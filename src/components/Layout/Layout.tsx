import * as React from 'react';
import { Grid } from '..';
import FullSizeLayout from './FullSizeLayout';

export default class Layout extends React.Component {
    public displayName = 'Layout';

    public static FullSize: React.ComponentType = () => <FullSizeLayout />;

    public render() {
        return <Grid>{this.props.children}</Grid>;
    }
}
