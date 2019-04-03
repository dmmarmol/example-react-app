import * as React from 'react';
import { AppBar, Grid, Paper, Gap } from 'components';

import Filters from './components/Filters';
import Players from './components/Players';

interface IHomeProps {}

const Home: React.SFC<IHomeProps> = () => {
    return (
        <>
            <AppBar position="static" />
            <Grid item>
                <Gap size="lg" all>
                    <Filters />
                </Gap>
                <Paper>
                    <Players />
                </Paper>
            </Grid>
        </>
    );
};

export default Home;
