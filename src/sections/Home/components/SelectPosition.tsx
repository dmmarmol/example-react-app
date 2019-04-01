import * as React from 'react';
import kebabCase from 'kebab-case';
import { Select, MenuItem } from 'components';
import { connect } from 'react-redux';
import { Entity } from 'App/app-types';
import { Position } from 'store/form/filters/formFiltersTypes';

/**
 * @TODO Move to selectors
 */
const items: Entity[] = Object.keys(Position).map(position => ({
    id: kebabCase(position),
    name: Position[position],
}));

interface SelectPositionProps {
    name?: string;
    items: Entity[];
}

const SelectPosition: React.SFC<SelectPositionProps> = props => {
    const [value, setValue] = React.useState<string>(items[0].id);

    return (
        <Select
            name={props.name}
            fullWidth
            value={value}
            onChange={event => {
                return setValue(event.target.value);
            }}
        >
            {props.items.map(item => (
                <MenuItem value={item.id} key={item.id}>
                    {item.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default connect(() => ({
    items,
}))(SelectPosition);
