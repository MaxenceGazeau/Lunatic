import React from 'react';
import defaultArgTypes from '../utils/default-arg-types';
import Orchestrator from '../utils/orchestrator';
import source from './source';
import source1 from './source1';

const stories = {
	title: 'Components/Duration',
	component: Orchestrator,
	argTypes: defaultArgTypes,
};

export default stories;

const Template = (args) => <Orchestrator {...args} />;
export const PnYnM = Template.bind({});

PnYnM.args = { id: 'durationAnnéesMois', source };

export const PTnHnM = Template.bind({});

PTnHnM.args = {
	id: 'durationHeureMinute',
	source: source1,
};
