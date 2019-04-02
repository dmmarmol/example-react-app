import * as React from 'react';
import { Select as FormSelect, InputLabel } from '@material-ui/core';
import { SelectProps as MaterialSelectProps } from '@material-ui/core/Select/Select';
import { WrappedFieldProps, Field } from 'redux-form';

export interface FormSelectProps extends MaterialSelectProps {}

export type SelectFieldProps = Partial<WrappedFieldProps> & FormSelectProps;

class Select extends React.Component<FormSelectProps> {
    public static Field: React.ComponentType<SelectFieldProps>;

    render() {
        return <FormSelect fullWidth {...this.props} />;
    }
}

const renderSelectField = ({ input, children, ...props }) => (
    <>
        {props.title && <InputLabel htmlFor={props.id}>{props.title}</InputLabel>}
        <Select
            {...input}
            onChange={event => input.onChange(event.target.value)}
            {...props}
            inputProps={{
                name: props.name,
                id: props.id,
            }}
        >
            {children}
        </Select>
    </>
);

type AcceptedValueType = string | string[] | number;
export const getValidSelectValueType = (value: MaterialSelectProps['value']): AcceptedValueType => {
    if (Array.isArray(value)) {
        return value.map(val => val.toString());
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return value;
    }

    return JSON.stringify(value);
};

export const getValidSelectDefaultValue = (defaultValue: MaterialSelectProps['value']): string | string[] => {
    if (Array.isArray(defaultValue)) {
        return defaultValue.map(value => value.toString());
    }
    return `${defaultValue}`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectAsField: typeof Select.Field = ({ onChange, ...props }) => {
    const value = getValidSelectValueType(props.value);
    const defaultValue = props.defaultValue ? getValidSelectDefaultValue(props.defaultValue) : undefined;
    return <Field component={renderSelectField} {...props} value={value} defaultValue={defaultValue} />;
};
Select.Field = SelectAsField;
Select.Field.displayName = 'Select(Field)';

export default Select;
