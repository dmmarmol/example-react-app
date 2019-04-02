import * as React from 'react';
import { Form, Row, Col, Input } from 'components';
import SelectPosition from './SelectPosition';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { FORM_FILTERS_ID } from '../../../store/form/constants';

interface FiltersProps extends InjectedFormProps {}

let Filters: React.FunctionComponent<FiltersProps> = () => {
    return (
        <Form>
            <Row bottom="sm">
                <Col sm={4}>
                    <Input.Field name="name" placeholder="Player name" />
                </Col>
                <Col sm={4}>
                    <SelectPosition name="position" /* label="Position" */ />
                </Col>
                <Col sm={4}>
                    <Input.Field name="age" type="number" placeholder="Age" />
                </Col>
            </Row>
        </Form>
    );
};

export default reduxForm({
    form: FORM_FILTERS_ID,
})(Filters);
