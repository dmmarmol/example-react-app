import { GetPlayersResponse, ResponsePlayer } from './../playersTypes.d';
import { PlayersState } from './../playersReducer';
import { Success } from 'typescript-fsa';
import { FetchStatus } from 'App/app-types.d';
import { indexBy } from 'ramda';

export const onGetPlayersFetchStatusStarted = (state: PlayersState): PlayersState => ({
    ...state,
    fetchStatus: {
        ...state,
        get: FetchStatus.STARTED,
    },
});

export const onGetPlayersFetchStatusSuccess = (state: PlayersState): PlayersState => ({
    ...state,
    fetchStatus: {
        ...state,
        get: FetchStatus.SUCCESS,
    },
});

export const onGetPlayersFetchStatusFailed = (state: PlayersState): PlayersState => ({
    ...state,
    fetchStatus: {
        ...state,
        get: FetchStatus.FAILURE,
    },
});

export const onGetPlayersSuccess = (
    state: PlayersState,
    action: Success<undefined, GetPlayersResponse>,
): PlayersState => ({
    ...state,
    byName: indexBy<ResponsePlayer>(player => player.name, action.result),
});
