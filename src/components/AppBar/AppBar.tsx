import { AppBar as MaterialAppBar, Typography } from '@material-ui/core';
import { AppBarProps as MaterialAppBarProps } from '@material-ui/core/AppBar';

import * as React from 'react';
import { Paper, Grid, Gap } from '../Grid';

interface AppBarProps extends MaterialAppBarProps {}

const AppBar: React.FunctionComponent<AppBarProps> = props => {
    return (
        <Grid>
            <Paper>
                <MaterialAppBar position="static" {...props}>
                    <Gap size="sm" all>
                        <Typography variant="h6" color="inherit">
                            Football Player Finder
                        </Typography>
                    </Gap>
                </MaterialAppBar>
            </Paper>
        </Grid>
    );
};

export default AppBar;
