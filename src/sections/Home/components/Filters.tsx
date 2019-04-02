import * as React from 'react';
import { Form, Input, Grid } from 'components';
import SelectPosition from './SelectPosition';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { FORM_FILTERS_ID } from '../../../store/form/constants';

interface FiltersProps extends InjectedFormProps {}

let Filters: React.FunctionComponent<FiltersProps> = () => {
    return (
        <Form>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Input.Field name="name" title="Player name" />
                </Grid>
                <Grid item xs={4}>
                    <SelectPosition name="position" title="Position" />
                </Grid>
                <Grid item xs={4}>
                    <Input.Field name="age" type="number" title="Age" />
                </Grid>
            </Grid>
        </Form>
    );
};

export default reduxForm({
    form: FORM_FILTERS_ID,
})(Filters);
