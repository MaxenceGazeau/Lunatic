import { useState, useEffect, useCallback } from 'react';
import { interpret } from './interpret';
import { mergeQuestionnaireAndData } from './init-questionnaire';
import { getBindings } from './state';
import { updateQuestionnaire } from './handler';
import { getPage, FLOW_NEXT, FLOW_PREVIOUS } from '../lib';
import { COLLECTED } from '../../constants';

const customFilterPagination = ({ page }, pagination, currentPage) => {
	return pagination ? currentPage.split('.')[0] === page : true;
};

const filterComponents = (
	components,
	management,
	bindings,
	features,
	currentPage,
	pagination
) => {
	if (management && !pagination) return components;
	if (management && pagination)
		return components.filter((c) =>
			customFilterPagination(c, pagination, currentPage)
		);

	if (!pagination) {
		const filtered = components.filter(({ conditionFilter }) => {
			if (!conditionFilter) return true;
			const inter = interpret(features)(bindings)(conditionFilter);
			return inter;
		});
		return filtered;
	}
	return components
		.filter((c) => customFilterPagination(c, pagination, currentPage))
		.filter(({ conditionFilter }) => {
			if (!conditionFilter) return true;
			return interpret(features)(bindings)(conditionFilter);
		});
};

const useLunatic = (
	source,
	data,
	{
		savingType = COLLECTED,
		preferences = [COLLECTED],
		features = ['VTL'],
		management = false,
		pagination = false,
		initialPage = '1',
	}
) => {
	const featuresWithoutMD = features.filter((f) => f !== 'MD');
	const [questionnaire, setQuestionnaire] = useState(() =>
		mergeQuestionnaireAndData(source)(data || {})
	);
	const bindings = getBindings(questionnaire);
	const [page, setPage] = useState(initialPage);
	const [components, setComponents] = useState(() =>
		filterComponents(
			questionnaire.components,
			management,
			bindings,
			featuresWithoutMD,
			page,
			pagination
		)
	);
	const [todo, setTodo] = useState({});
	const [flow, setFlow] = useState(FLOW_NEXT);

	// TODO: dynamic because of filters (kind of last accessible page)
	const { maxPage } = source;

	const isFirstPage = page === '1';
	const isLastPage = page === maxPage;

	const goNext = () => {
		if (!isLastPage) {
			if (flow !== FLOW_NEXT) {
				setFlow(FLOW_NEXT);
			}
			const nextPage = getPage({
				components: questionnaire.components,
				bindings,
				currentPage: page,
				features: featuresWithoutMD,
				flow: FLOW_NEXT,
				management,
			});
			setPage(nextPage);
		}
	};

	const goPrevious = () => {
		if (!isFirstPage) {
			if (flow !== FLOW_PREVIOUS) {
				setFlow(FLOW_PREVIOUS);
			}
			const previousPage = getPage({
				components: questionnaire.components,
				bindings,
				currentPage: page,
				features: featuresWithoutMD,
				flow: FLOW_PREVIOUS,
				management,
			});
			setPage(previousPage);
		}
	};

	const handleChange = useCallback((updatedValue) => {
		setTodo(updatedValue);
	}, []);

	// Assume we only want to handle source update
	useEffect(() => {
		setQuestionnaire(mergeQuestionnaireAndData(source)(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [source]);

	useEffect(() => {
		if (Object.keys(todo).length !== 0) {
			const newQ =
				updateQuestionnaire(savingType)(questionnaire)(preferences)(todo);
			setQuestionnaire(newQ);
			setTodo({});
		}
	}, [todo, preferences, questionnaire, savingType, features, management]);

	useEffect(() => {
		const c = filterComponents(
			questionnaire.components,
			management,
			bindings,
			featuresWithoutMD,
			page,
			pagination
		);
		setComponents(c);
		// Assume we only want to filter after questionnaire update
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [questionnaire]);

	return {
		questionnaire,
		handleChange,
		components,
		bindings,
		pagination: {
			page,
			setPage,
			maxPage,
			goNext,
			goPrevious,
			isFirstPage,
			isLastPage,
			flow,
		},
	};
};

export default useLunatic;
