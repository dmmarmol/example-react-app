import * as React from 'react';

import Grid from './Grid';
import Row from './Row';
import Col from './Col';

interface ISectionProps {}

const Section: React.FunctionComponent<ISectionProps> = props => {
    return (
        <Grid>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Grid>
    );
};

export default Section;
