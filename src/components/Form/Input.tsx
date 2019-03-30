import * as React from 'react';
import { Input as FormInput } from '@material-ui/core';
import { InputProps as MaterialInputProps } from '@material-ui/core/Input';

interface FormInputProps extends MaterialInputProps {}

const Input: React.SFC<FormInputProps> = props => <FormInput {...props} />;

export default Input;
