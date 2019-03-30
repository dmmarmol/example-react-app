import { ResponsePlayer } from './playersTypes';
import { FetchStatus } from 'App/app-types.d';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface PlayersState {
    byId: { [i: string]: ResponsePlayer };
    fetchStatus: {
        get: FetchStatus;
    };
}

export const initialState: PlayersState = {
    byId: {},
    fetchStatus: {
        get: FetchStatus.IDLE,
    },
};

const reducer = reducerWithInitialState<PlayersState>(initialState);

export default reducer;
