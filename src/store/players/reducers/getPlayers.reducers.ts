import { GetPlayersResponse } from './../playersTypes.d';
import { PlayersState } from './../playersReducer';
import { Success } from 'typescript-fsa';
import { FetchStatus } from 'App/app-types.d';
import { keyBy } from 'lodash-es';

export const onGetPlayersStarted = (state: PlayersState): PlayersState => ({
    ...state,
    fetchStatus: {
        ...state,
        get: FetchStatus.START,
    },
});

export const onGetPlayersSuccess = (
    state: PlayersState,
    action: Success<undefined, GetPlayersResponse>,
): PlayersState => ({
    ...state,
    byName: keyBy(action.result, 'name'),
    fetchStatus: {
        ...state,
        get: FetchStatus.SUCCESS,
    },
});

export const onGetPlayersFailed = (state: PlayersState): PlayersState => ({
    ...state,
    fetchStatus: {
        ...state,
        get: FetchStatus.FAILURE,
    },
});
