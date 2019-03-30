import * as React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button';

export interface ButtonProps extends MaterialButtonProps {
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.SFC<ButtonProps> = ({ children, ...props }) => {
    return <MaterialButton {...props}>{children}</MaterialButton>;
};

Button.displayName = 'Button';

export default Button;
