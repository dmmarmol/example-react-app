import { FormFiltersFormData } from './../formFiltersTypes';
import { FORM_FILTERS_ID } from './../../constants';
import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { getPlayersTableRows } from 'store/players/selectors';
import { sluglify } from 'components/utils';

const getFiltersFormValues = getFormValues(FORM_FILTERS_ID);

export const getFilteredPlayers = createSelector(
    getFiltersFormValues,
    getPlayersTableRows,
    (formValues, players) => {
        if (!formValues) {
            return players;
        }

        /** Need to cast as unknown due to redux-form missing generic param for getFormValues() */
        const { name, age, position } = (formValues as unknown) as FormFiltersFormData;

        return players
            .filter(player => {
                if (!name) {
                    return true;
                }
                const filter = name.toLowerCase();
                const value = player.name.toLowerCase();
                return filter && value.match(filter);
            })
            .filter(player => {
                if (!position) {
                    return true;
                }
                const filter = position.toLowerCase();
                const value = sluglify(player.position);
                return filter && value === filter;
            })
            .filter(player => {
                if (!age) {
                    return true;
                }
                return age && `${player.age}`.match(age);
            });
    },
);
