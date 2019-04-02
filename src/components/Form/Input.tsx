import * as React from 'react';
import { Input as FormInput } from '@material-ui/core';
import { InputProps as MaterialInputProps } from '@material-ui/core/Input';
import { Field, WrappedFieldProps } from 'redux-form';

interface FormInputProps extends MaterialInputProps {
    defaultValue?: string | string[];
}

class Input extends React.Component<FormInputProps> {
    public static Field: React.ComponentType<Partial<WrappedFieldProps> & FormInputProps>;

    render() {
        return <FormInput fullWidth {...this.props} />;
    }
}

const RenderField = props => (
    <Input
        {...props}
        value={props.input.value}
        onChange={(event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            return props.input && props.input.onChange(event);
        }}
    />
);

const InputAsField: typeof Input.Field = props => {
    return (
        <Field
            name={props.name}
            type="text"
            {...props}
            rows={Number(props.rows) || undefined}
            value={`${props.value}`}
            component={RenderField}
        />
    );
};
Input.Field = InputAsField;
Input.Field.displayName = 'Input(Field)';

export default Input;
