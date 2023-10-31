import { type StateForControls } from '../../commons/compile-controls';
import type {
	LunaticComponentDefinition,
	LunaticControl,
	LunaticError,
	LunaticState,
} from '../../type';
import { resolveRoundaboutControl } from './resolve-roundabout-control';
import type { ReactNode } from 'react';
import { ControlTypeEnum } from '../../type-source';

/**
 * Convert controls into errors
 */
export function getComponentErrors(
	component: LunaticComponentDefinition,
	state: StateForControls
): LunaticError[] {
	// There is no controls for this component
	if (!('controls' in component) || !component.controls) {
		return [];
	}

	return component.controls.reduce(function (errors, control) {
		const error = getComponentErrorForControl(control, state);
		if (error) {
			return [...errors, error];
		}
		return errors;
	}, [] as LunaticError[]);
}

function getComponentErrorForControl(
	control: LunaticControl,
	state: StateForControls
): LunaticError | null {
	console.log('control', control.type, control);
	switch (control.type) {
		case ControlTypeEnum.roundabout:
			return resolveRoundaboutControl(state, control);
		default:
			return evaluateControl(control, state.executeExpression, state.pager);
	}
}

/**
 * Check the control against the state
 */
export function evaluateControl(
	control: LunaticControl,
	executeExpression: LunaticState['executeExpression'],
	{
		iteration,
		linksIterations,
	}: {
		iteration?: number;
		linksIterations?: number[];
	} = {}
): LunaticError | null {
	const { criticality, errorMessage, id, typeOfControl } = control;
	const value = control?.control?.value ?? 'true';

	const result = executeExpression(value, {
		iteration: linksIterations ?? iteration,
	});

	try {
		/**
		 * Currently, the controls are lifted when the condition is false.
		 * An evolution is planned on the questionnaire generation side (Eno) to come back to a more coherent logic (i.e. lift the control when the condition is true)
		 *
		 * After this change, we have to change the next line to `if (!result) return undefined;`
		 */
		if (result) return null;

		const label = executeExpression<ReactNode>(errorMessage, {
			iteration,
		});
		return {
			criticality,
			errorMessage: label,
			id,
			typeOfControl,
		};
	} catch (e) {
		console.warn(`Error on validating control ${value}`);
		return null;
	}
}
