import * as React from 'react';

import Grid from './Grid';
import Cell from './Cell';

interface ISectionProps {}

const Section: React.FunctionComponent<ISectionProps> = props => {
    return (
        <Grid>
            <Cell>{props.children}</Cell>
        </Grid>
    );
};

export default Section;
