import { useState, useCallback } from 'react';
import { interpret } from './interpret';
import { mergeQuestionnaireAndData } from './init-questionnaire';
import { getBindings } from './state';
import { updateQuestionnaire } from './handler';
import { COLLECTED } from '../../constants';

const filterComponents = (components, management, bindings, features) =>
	components.filter(({ conditionFilter }) =>
		management || !conditionFilter
			? true
			: interpret(features)(bindings, true)(conditionFilter) === 'normal'
	);

const useLunatic = (
	source,
	data = {},
	{
		savingType = COLLECTED,
		preferences = [COLLECTED],
		features = ['VTL'],
		management = false,
	}
) => {
	const [questionnaire, setQuestionnaire] = useState(() =>
		mergeQuestionnaireAndData(source)(data)
	);

	const handleChange = useCallback(
		(up) => {
			const newQ = updateQuestionnaire(savingType)(questionnaire)(preferences)(
				up
			);
			setQuestionnaire(newQ);
		},
		[savingType, questionnaire, preferences]
	);

	const bindings = getBindings(questionnaire);
	const components = filterComponents(
		questionnaire.components,
		management,
		bindings,
		features
	);

	return { questionnaire, handleChange, components, bindings };
};

export default useLunatic;
