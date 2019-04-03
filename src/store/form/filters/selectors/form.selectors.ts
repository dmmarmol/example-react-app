import { Player } from 'store/players/playersTypes';
import { FormFiltersFormData } from './../formFiltersTypes';
import { FORM_FILTERS_ID } from './../../constants';
import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { getPlayersTableRows } from 'store/players/selectors';
import { sluglify } from 'components/utils';

const getFiltersFormValues = getFormValues(FORM_FILTERS_ID);

export const filterByName = (name: string) => (player: Player) => {
    if (!name) {
        return true;
    }
    const filter = name.toLowerCase();
    const value = player.name.toLowerCase();
    return Boolean(filter && value.match(filter));
};

export const filterByPosition = (position: string) => (player: Player) => {
    if (!position) {
        return true;
    }
    const filter = sluglify(position);
    const value = sluglify(player.position);
    return Boolean(filter && value === filter);
};

export const filterByAge = (age: string) => (player: Player) => {
    if (!age) {
        return true;
    }
    const match = Boolean(`${player.age}`.match(age));
    return Boolean(age && match);
};

export const getFilteredPlayers = createSelector(
    getFiltersFormValues,
    getPlayersTableRows,
    (formValues, players) => {
        if (!formValues) {
            return players;
        }

        /** Need to cast as unknown due to redux-form missing generic param for getFormValues() */
        const { name, age, position } = (formValues as unknown) as FormFiltersFormData;

        const filters = [filterByName(name), filterByPosition(position), filterByAge(age)];
        const filteredData = filters.reduce((acc, filterFn) => acc.filter(filterFn), players);

        return filteredData;
    },
);
