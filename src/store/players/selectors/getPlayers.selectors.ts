import { beautifyString, sluglify } from 'components/utils';
import { Entity } from 'App/app-types';
import { AppState } from 'store/store-types';
import { createSelector } from 'reselect';
import { Player } from '../playersTypes';
import moment from 'moment';

const getPlayersById = (state: AppState) => state.players.byName;

export const getPlayersList = createSelector(
    getPlayersById,
    players => Object.values(players),
);

export const getPlayersTableRows = createSelector(
    getPlayersList,
    (players): Player[] => {
        return players.map((player, index) => {
            const age = moment().diff(player.dateOfBirth, 'years');

            return {
                ...player,
                id: `${index}`,
                position: beautifyString(player.position),
                age,
            };
        });
    },
);

export const getPositionList = (positions): Entity[] =>
    Object.keys(positions).map(position => {
        const id = sluglify(position);
        const name = beautifyString(positions[position]);

        return {
            id,
            name,
        };
    });
