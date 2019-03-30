import * as React from 'react';
import { kebabCase } from 'lodash-es';
import { Select, MenuItem } from 'components';
import { connect } from 'react-redux';
import { Entity } from 'src/App/app-types';

enum positions {
    ATTACKING_MIDFIELD = 'Attacking Midfield',
    CENTRAL_MIDFIELD = 'Central Midfield',
    CENTRE_BACK = 'Centre-Back',
    CENTRE_FORWARD = 'Centre-Forward',
    DEFENSIVE_MIDFIELD = 'Defensive Midfield',
    KEEPER = 'Keeper',
    LEFT_MIDFIELD = 'Left Midfield',
    LEFT_WING = 'Left Wing',
    LEFT_BACK = 'Left-Back',
    RIGHT_BACK = 'Right-Back',
}

/**
 * @TODO Move to selectors
 */
const items: Entity[] = Object.keys(positions).map(position => ({
    id: kebabCase(position),
    name: positions[position],
}));

interface SelectPositionProps {
    items: Entity[];
}

const SelectPosition: React.SFC<SelectPositionProps> = props => {
    const [value, setValue] = React.useState<string>(items[0].id);

    return (
        <Select
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
