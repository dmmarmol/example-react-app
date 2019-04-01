import { ResponsePlayer } from './playersTypes';
import { FetchStatus } from 'App/app-types.d';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
    onGetPlayersFetchStatusStarted,
    onGetPlayersFetchStatusSuccess,
    onGetPlayersFetchStatusFailed,
    onGetPlayersSuccess,
} from './reducers';
import { getPlayersAsync } from './actions';

export interface PlayersState {
    byName: { [i: string]: ResponsePlayer };
    fetchStatus: {
        get: FetchStatus;
    };
}

export const initialState: PlayersState = {
    byName: {},
    fetchStatus: {
        get: FetchStatus.IDLE,
    },
};

const reducer = reducerWithInitialState<PlayersState>(initialState)
    .case(getPlayersAsync.started, onGetPlayersFetchStatusStarted)
    .case(getPlayersAsync.done, (state, payload) => ({
        ...onGetPlayersFetchStatusSuccess(state),
        ...onGetPlayersSuccess(state, payload),
    }))
    .case(getPlayersAsync.failed, onGetPlayersFetchStatusFailed);

export default reducer;
