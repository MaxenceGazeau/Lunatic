import {
	type FunctionComponent,
	useCallback,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import * as actions from './actions';
import { getPageTag, isFirstLastPage, useComponentsFromState } from './commons';
import type { LunaticData, LunaticState } from './type';
import D from '../i18n';
import { COLLECTED } from '../utils/constants';
import { getQuestionnaireData } from './commons/get-data';
import INITIAL_STATE from './initial-state';
import { createLunaticProvider } from './lunatic-context';
import type { LunaticSource } from './type-source';
import type { LunaticComponentType } from '../components/type';
import compileControlsLib from './commons/compile-controls';
import { overviewWithChildren } from './commons/getOverview';
import { useLoopVariables } from './hooks/use-loop-variables';
import reducer from './reducer';
import { useSuggesters } from './use-suggesters';

type LunaticOptions = {
	features?: LunaticState['features'];
	preferences?: LunaticState['preferences'];
	savingType?: LunaticState['savingType'];
	onChange?: typeof nothing;
	management?: boolean;
	shortcut?: boolean;
	initialPage?: string;
	lastReachedPage?: string;
	autoSuggesterLoading?: boolean;
	getReferentiel?: (name: string) => Promise<Array<unknown>>;
	activeControls?: boolean;
	custom?: Record<string, FunctionComponent<unknown>>;
	withOverview?: boolean;
	missing?: boolean;
	missingStrategy?: () => void;
	missingShortcut?: { dontKnow: string; refused: string };
	dontKnowButton?: string;
	refusedButton?: string;
};

const empty = {}; // Keep the same empty object (to avoid problem with useEffect dependencies)
const emptyFn = () => {};
const DEFAULT_DATA = empty as LunaticData;
const DEFAULT_FEATURES = ['VTL', 'MD'] as ['VTL', 'MD'];
const DEFAULT_PREFERENCES = [COLLECTED] as ['COLLECTED'];
const DEFAULT_SHORTCUT = { dontKnow: '', refused: '' };

const DEFAULT_DONT_KNOW = D.DK;
const DEFAULT_REFUSED = D.RF;
const nothing: LunaticState['handleChange'] = () => {};

function useLunatic(
	source: LunaticSource,
	data: LunaticData = DEFAULT_DATA,
	options: LunaticOptions = empty
) {
	const {
		features = DEFAULT_FEATURES,
		preferences = DEFAULT_PREFERENCES,
		savingType = COLLECTED,
		onChange = nothing,
		management = false,
		shortcut = false,
		initialPage = '1',
		lastReachedPage = undefined,
		autoSuggesterLoading = false,
		activeControls = false,
		getReferentiel,
		custom = empty,
		// Calculate an overview of every sequence (will be exposed as "overview")
		withOverview = false,
		missing = false,
		missingStrategy = emptyFn,
		missingShortcut = DEFAULT_SHORTCUT,
		dontKnowButton = DEFAULT_DONT_KNOW,
		refusedButton = DEFAULT_REFUSED,
	} = options;
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { pager, waiting, overview, pages, executeExpression, isInLoop } =
		state;
	const components = useComponentsFromState(state);
	const { suggesters } = source;

	// Required context provider: cleaner than prop drilling through every component
	const Provider = useMemo(
		() =>
			createLunaticProvider({
				custom,
				management,
				missing,
				missingStrategy,
				shortcut,
				missingShortcut,
				dontKnowButton,
				refusedButton,
			}),
		[
			custom,
			management,
			missing,
			missingStrategy,
			shortcut,
			missingShortcut,
			dontKnowButton,
			refusedButton,
		]
	);

	const getSuggesterStatus = useSuggesters({
		auto: autoSuggesterLoading,
		getReferentiel,
		suggesters,
	});

	const compileControls = useCallback(
		function () {
			return compileControlsLib({ pager, pages, isInLoop, executeExpression });
		},
		[pager, pages, isInLoop, executeExpression]
	);

	const goPreviousPage = useCallback(
		function () {
			dispatch(actions.goPreviousPage());
		},
		[dispatch]
	);

	const goNextPage = useCallback(
		function (payload = {}) {
			dispatch(actions.goNextPage(payload));
		},
		[dispatch]
	);

	const goToPage: LunaticState['goToPage'] = useCallback(
		function (payload) {
			dispatch(actions.goToPage(payload));
		},
		[dispatch]
	);

	const getComponents = useCallback(
		function ({
			only,
			except,
		}: {
			only?: LunaticComponentType[];
			except?: LunaticComponentType[];
		} = {}) {
			if (only && except) {
				throw new Error(
					'"only" and "except" cannot be used together in getComponents()'
				);
			}
			if (only) {
				return components.filter((c) => only.includes(c.componentType));
			}
			if (except) {
				return components.filter((c) => !except.includes(c.componentType));
			}
			return components;
		},
		[components]
	);
	const handleChange = useCallback<LunaticState['handleChange']>(
		(response, value, args) => {
			dispatch(actions.handleChange(response, value, args));
			onChange(response, value, args);
		},
		[dispatch, onChange]
	);

	const getData = (withRefreshedCalculated: boolean) => {
		const { variables } = state;
		return getQuestionnaireData({ variables, withRefreshedCalculated });
	};

	const buildedOverview = useMemo(
		() => overviewWithChildren(overview),
		[overview]
	);

	const pageTag = getPageTag(pager);
	const { isFirstPage, isLastPage } = isFirstLastPage(pager);

	useEffect(
		function () {
			dispatch(
				actions.onInit({
					source,
					data,
					initialPage,
					lastReachedPage,
					features,
					preferences,
					savingType,
					management,
					shortcut,
					handleChange,
					activeControls,
					goToPage,
					goNextPage,
					goPreviousPage,
					withOverview,
				})
			);
		},
		[
			source,
			data,
			initialPage,
			features,
			preferences,
			savingType,
			management,
			shortcut,
			handleChange,
			activeControls,
			withOverview,
			goToPage,
			goNextPage,
			goPreviousPage,
			lastReachedPage,
		]
	);

	useEffect(
		function () {
			dispatch(actions.updateState({ getSuggesterStatus }));
		},
		[getSuggesterStatus]
	);

	return {
		getComponents,
		goPreviousPage,
		goNextPage,
		goToPage,
		compileControls,
		pageTag,
		isFirstPage,
		isLastPage,
		pager,
		waiting,
		getData,
		Provider,
		overview: buildedOverview,
		loopVariables: useLoopVariables(pager, state.pages),
	};
}

export default useLunatic;
