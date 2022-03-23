import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { LunaticField, useOnHandleChange, ComboBox } from '../commons';

const OPTIONS = [
	{ label: 'toto', id: 'toto' },
	{ label: 'lulu', id: 'lulu' },
];

function Dropdown({ label, declarations, id, handleChange, response, value }) {
	const htmlFor = `lunatic-dropdown-${id}`;
	const labelId = `lunatic-dropdown-label-${id}`;

	const onSelect = useOnHandleChange({ handleChange, response, value });

	const onChange = useCallback(function (...args) {
		console.log('onChange', args);
	}, []);

	return (
		<LunaticField
			label={label}
			contentId={htmlFor}
			labelId={labelId}
			declarations={declarations}
			id={id}
			value={value}
			className="lunatic-dropdown"
		>
			<ComboBox
				id={id}
				htmlFor={htmlFor}
				labelledBy={labelId}
				onChange={onChange}
				disabled={false}
				options={OPTIONS}
				editable={false}
				onSelect={onSelect}
			/>
		</LunaticField>
	);
}

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default React.memo(Dropdown);
