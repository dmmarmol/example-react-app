import * as React from 'react';

export interface FormProps extends React.FormHTMLAttributes<{}> {}

export default class Form extends React.Component<FormProps> {
    public render() {
        return <form {...this.props}>{this.props.children}</form>;
    }
}
