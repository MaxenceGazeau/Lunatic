// updateQuestionnaire is useless since 2.0 optimization efforts
// export { updateQuestionnaire } from './handler';
// export { mergeQuestionnaireAndData } from './init-questionnaire';
// export {
// 	getState,
// 	getCollectedState,
// 	getCollectedStateByValueType,
// 	getBindings,
// } from './state';
// export { interpret } from './interpret';
// export * from './hooks';
export { default as useLunatic } from './hooks';

export const interpret = () => {
	throw new Error('redefine interpret if needed');
};
