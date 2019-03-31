import { AppBar as MaterialAppBar, Typography } from '@material-ui/core';
import { AppBarProps as MaterialAppBarProps } from '@material-ui/core/AppBar';

import * as React from 'react';

interface AppBarProps extends MaterialAppBarProps {}

const AppBar: React.FunctionComponent<AppBarProps> = props => {
    return (
        <MaterialAppBar position="static" {...props}>
            <Typography variant="h6" color="inherit">
                Football Player Finder
            </Typography>
        </MaterialAppBar>
    );
};

export default AppBar;
