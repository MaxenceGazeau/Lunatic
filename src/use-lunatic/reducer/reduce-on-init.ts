import {
	checkLoops,
	createExecuteExpression,
	createMapPages,
	isFirstLastPage,
} from '../commons';
import {
	LunaticData,
	LunaticState,
	LunaticStateVariable,
	LunaticVariable,
} from '../type';
import { ActionInit, goToPage as goToPageAction } from '../actions';
import { LunaticSource } from '../type-source';
import { getPagerFromPageTag } from '../commons/page-tag';
import reduceGoToPage from './reduce-go-to-page';

/**
 * Extract value from colllected data
 */
function getInitalValueFromCollected(
	variable: LunaticVariable,
	data = {} as LunaticData['COLLECTED']
): unknown {
	const { name } = variable;
	let fromData;
	if (name in data) {
		const { COLLECTED, FORCED } = data[name];
		fromData = COLLECTED || FORCED;
	}
	if ('values' in variable && variable.values) {
		const { COLLECTED, FORCED } = variable.values;
		return fromData || FORCED || COLLECTED;
	}
	return undefined;
}

/**
 * Extract value from an external data
 */
function getInitialValueFromExternal(
	variable: LunaticVariable,
	data = {} as LunaticData['EXTERNAL']
) {
	const { name } = variable;
	if (name in data) {
		return data[name];
	}
	return undefined;
}

/**
 * Extract value from data for the variable
 */
function getInitialValue(variable: LunaticVariable, data = {} as LunaticData) {
	const { COLLECTED, EXTERNAL, CALCULATED } = data;
	switch (variable.variableType) {
		case 'COLLECTED':
			return getInitalValueFromCollected(variable, COLLECTED);
		case 'EXTERNAL':
			return getInitialValueFromExternal(variable, EXTERNAL);
		case 'CALCULATED':
			return getInitialValueFromExternal(variable, CALCULATED);
		default:
			return null;
	}
}

export type VariablesByType = {
	EXTERNAL: (LunaticVariable & { variableType: 'EXTERNAL' })[];
	COLLECTED: (LunaticVariable & { variableType: 'COLLECTED' })[];
	CALCULATED: (LunaticVariable & { variableType: 'CALCULATED' })[];
};

function appendToArrayMap(
	map: VariablesByType,
	key: LunaticVariable['variableType'],
	entry: LunaticVariable
) {
	if (key in map) {
		return { ...map, [key]: [...map[key], entry] };
	}
	return { ...map, [key]: [entry] };
}

function appendToObjectMap(
	map: LunaticState['variables'],
	variable: LunaticVariable,
	value: unknown
): LunaticState['variables'] {
	const key = variable.name;
	const object = {
		variable,
		value,
		type: variable.variableType,
	} as LunaticStateVariable;
	if (key in map) {
		return { ...map, [key]: { ...map[key], ...object } };
	}
	return { ...map, [key]: object };
}

/**
 * Creates the variables object to set in the state
 */
function createVariables(source: LunaticSource, data: LunaticData) {
	const { variables = [] } = source;
	const [mapVariablesTypes, mapVariables] = variables.reduce(
		function ([mapType, mapVar], variable) {
			const { variableType: type } = variable;

			return [
				appendToArrayMap(mapType, type, variable),
				appendToObjectMap(mapVar, variable, getInitialValue(variable, data)),
			];
		},
		[{ EXTERNAL: [], COLLECTED: [], CALCULATED: [] }, {}] as [
			VariablesByType,
			LunaticState['variables']
		]
	);
	const { CALCULATED = [] } = mapVariablesTypes;
	CALCULATED.forEach(function (calculated) {
		const { bindingDependencies = [] } = calculated;
		bindingDependencies.forEach(function (name) {
			if (name in mapVariables) {
				const variable = mapVariables[name];
				const { CalculatedLinked } = variable;
				if (CalculatedLinked) {
					CalculatedLinked.push(calculated);
				} else {
					variable.CalculatedLinked = [calculated];
				}
			}
		});
	});

	return mapVariables;
}

export function reduceOnInit(state: LunaticState, action: ActionInit) {
	const { payload } = action;
	const {
		source,
		data,
		initialPage,
		features,
		handleChange,
		preferences,
		savingType,
		management,
		activeControls,
		goToPage,
	} = payload;
	if (source && data) {
		const variables = createVariables(source, data); // map des variables
		const [executeExpression, updateBindings] = createExecuteExpression(
			variables,
			features
		);
		const pages = checkLoops(createMapPages(source));
		const { maxPage, cleaning = {}, missingBlock = {}, resizing = {} } = source;
		const pager = {
			page: [1],
			maxPage: [parseInt(maxPage, 10)],
			iteration: [],
			maxIteration: [],
			lastReachedPage: { page: [1], iteration: [] },
		} satisfies LunaticState['pager'];
		const { isFirstPage, isLastPage } = isFirstLastPage(pager);

		const newState = {
			...state,
			cleaning,
			missingBlock,
			resizing,
			variables,
			pages,
			isFirstPage,
			isLastPage,
			pager,
			executeExpression,
			updateBindings,
			handleChange,
			preferences,
			management,
			savingType,
			activeControls,
			goToPage,
		};

		// If we need an initialPage, jump to it
		if (initialPage) {
			return reduceGoToPage(
				newState,
				goToPageAction(getPagerFromPageTag(initialPage))
			);
		}

		return newState;
	}

	return state;
}
