import { useCallback } from 'react';
import { isObject } from '../../utils/is-object';
import type { FilledLunaticComponentProps } from '../commons/fill-components/fill-components';
import type { LunaticComponentDefinition, LunaticState } from '../type';
import type { ComponentType } from '../type-source';

/**
 * Check if a page has one response (value is filled for at least one field)
 */
export function usePageHasResponse(
	components: FilledLunaticComponentProps[],
	executeExpression: LunaticState['executeExpression']
): () => boolean {
	return useCallback(() => {
		if (!Array.isArray(components)) {
			return false;
		}

		for (const component of components) {
			// Some components are considered as "filled" by default
			if (['PairwiseLinks', 'Roundabout'].includes(component.componentType)) {
				return true;
			}
			// For Table, we have to extract components from its body and apply isSubComponentsEmpty function
			if (component.componentType === 'Table') {
				// Body is array for array (row), each "cell" could be an Label or Component, so we filter array.
				const childrenComponent = component.body.reduce((_, row) => {
					const componentsInRow = row.filter(
						(cell) => isObject(cell) && 'componentType' in cell
					);
					return [..._, ...componentsInRow];
				}, []) as ComponentType[];
				return !isSubComponentsEmpty(childrenComponent, executeExpression);
			}

			// We found a value in one of the root component
			if ('value' in component && !isEmpty(component.value)) {
				return true;
			}
			// For rosterForLoop we need to inspect child components
			if (
				'components' in component &&
				Array.isArray(component.components) &&
				!isSubComponentsEmpty(component.components, executeExpression)
			) {
				return true;
			}
		}

		return false;
	}, [components, executeExpression]);
}

/**
 * Check if a value is empty
 * - null ou undefined ou ''
 * - for arrays, every item must be empty
 * - for objects, every value must be empty
 */
function isEmpty(value: unknown): boolean {
	// Array is empty if all items are empty
	if (Array.isArray(value)) {
		// We find one value that is not empty
		return value.find((v) => !isEmpty(v)) === undefined;
	}
	// For object inspect each values
	if (typeof value === 'object' && value !== null) {
		return isEmpty(Object.values(value));
	}
	return !value;
}

/**
 * For complex component we need to inspect child components, interpret the response value
 */
function isSubComponentsEmpty(
	components: LunaticComponentDefinition[],
	executeExpression: LunaticState['executeExpression']
): boolean {
	for (const component of components) {
		if (
			'response' in component &&
			!isEmpty(executeExpression(component.response.name))
		) {
			return false;
		}
	}

	return true;
}
