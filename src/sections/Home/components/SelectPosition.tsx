import * as React from 'react';
import { Select, MenuItem } from 'components';
import { connect } from 'react-redux';
import { Entity } from 'App/app-types';
import { getPositionList } from 'store/players/selectors';
import { SelectFieldProps } from 'src/components/Form/Select';

interface SelectPositionProps extends SelectFieldProps {
    items: Entity[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectPosition: React.SFC<SelectPositionProps> = ({ input, items, ...props }) => {
    const [value, setValue] = React.useState<string>(items[0].id);

    return (
        <Select.Field
            {...props}
            name={props.name}
            fullWidth
            value={value}
            onChange={event => {
                return setValue(event.target.value);
            }}
        >
            {items.map(item => (
                <MenuItem value={item.id} key={item.id}>
                    {item.name}
                </MenuItem>
            ))}
        </Select.Field>
    );
};

export default connect(() => ({
    items: getPositionList(),
}))(SelectPosition);
