import { createCustomizableLunaticField } from '../commons';
import { getComponentErrors } from '../commons/components/errors/errors';
import LunaticComponent from '../commons/components/lunatic-component-without-label';
import useOnHandleChange from '../commons/use-on-handle-change';
import type { LunaticComponentProps } from '../type';
import Datepicker from './html/datepicker';

const LunaticDatepicker = (props: LunaticComponentProps<'Datepicker'>) => {
	const {
		id,
		errors,
		handleChange,
		response,
		value,
		disabled,
		readOnly,
		min,
		max,
		label,
		description,
		preferences,
		declarations,
		missing,
		missingResponse,
		management,
		dateFormat,
	} = props;

	const onChange = useOnHandleChange({ handleChange, response, value });

	return (
		<LunaticComponent
			id={id}
			preferences={preferences}
			declarations={declarations}
			value={value}
			missing={missing}
			missingResponse={missingResponse}
			management={management}
			description={description}
			handleChange={handleChange}
		>
			<Datepicker
				dateFormat={dateFormat}
				disabled={disabled}
				readOnly={readOnly}
				value={value ?? ''}
				onChange={onChange}
				id={id}
				min={min}
				max={max}
				label={label}
				description={description}
				errors={getComponentErrors(errors, id)}
			/>
		</LunaticComponent>
	);
};

export default createCustomizableLunaticField(
	LunaticDatepicker,
	'LunaticDatepicker'
);
