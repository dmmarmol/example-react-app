import { AppBar as MaterialAppBar, Typography } from '@material-ui/core';
import { AppBarProps as MaterialAppBarProps } from '@material-ui/core/AppBar';

import * as React from 'react';
import { Row, Col, Grid } from '../Grid';

interface AppBarProps extends MaterialAppBarProps {}

const AppBar: React.FunctionComponent<AppBarProps> = props => {
    return (
        <Grid>
            <Row bottom="lg">
                <Col>
                    <MaterialAppBar position="static" {...props}>
                        <Typography variant="h6" color="inherit">
                            Football Player Finder
                        </Typography>
                    </MaterialAppBar>
                </Col>
            </Row>
        </Grid>
    );
};

export default AppBar;
