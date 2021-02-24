import React from 'react';
import PropTypes from 'prop-types';
import Declarations from '../declarations';
import { TooltipResponse } from '../tooltip';
import * as U from '../../utils/lib';
import * as C from '../../constants';
import { interpret } from '../../utils/to-expose';

const Suggester = ({
	id,
	label,
	preferences,
	response,
	handleChange: propsHandleChange,
	disabled,
	positioning,
	focused,
	declarations,
	features,
	bindings,
	management,
	style,
}) => {
	return (
		<div key={`checkbox-boolean-${id}`} className={`checkbox-boolean-modality`}>
			<Declarations
				id={id}
				type={C.BEFORE_QUESTION_TEXT}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
			{label && (
				<label htmlFor={`checkbox-boolean-${id}`}>
					{interpret(features)(bindings)(label)}
				</label>
			)}
			<Declarations
				id={id}
				type={C.AFTER_QUESTION_TEXT}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
			<div className="field-container">
				<div className={`${management ? 'field-with-tooltip' : 'field'}`}>
					TODO
				</div>
				{management && (
					<div className="tooltip">
						<TooltipResponse
							id={id}
							response={U.buildBooleanTooltipResponse(response)}
						/>
					</div>
				)}
			</div>
			<Declarations
				id={id}
				type={C.DETACHABLE}
				declarations={declarations}
				features={features}
				bindings={bindings}
			/>
		</div>
	);
};

export default Suggester;
