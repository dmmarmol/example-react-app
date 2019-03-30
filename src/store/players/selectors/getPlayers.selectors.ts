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
            const age = moment()
                .diff(player.dateOfBirth)
                .toString();
            return {
                ...player,
                id: `${index}`,
                age,
            };
        });
    },
);
