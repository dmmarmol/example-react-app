import { GetPlayersResponse, ResponsePlayer } from 'store/players/playersTypes';
import { Success } from 'typescript-fsa';
import { FetchStatus } from 'App/app-types.d';
import {
    onGetPlayersFetchStatusStarted,
    onGetPlayersFetchStatusSuccess,
    onGetPlayersFetchStatusFailed,
    onGetPlayersSuccess,
} from './../getPlayers.reducers';
import { PlayersState, initialState } from '../../playersReducer';

describe('getPlayers Reducers', () => {
    const state: PlayersState = initialState;
    describe('FetchStatus', () => {
        describe('onGetPlayersFetchStatusStarted', () => {
            it('should set FetchStatus as STARTED ', () => {
                const actual = onGetPlayersFetchStatusStarted(state);
                const expected = {
                    ...state,
                    fetchStatus: {
                        ...state.fetchStatus,
                        get: FetchStatus.STARTED,
                    },
                };
                expect(actual).toEqual(expected);
            });
        });
        describe('onGetPlayersFetchStatusSuccess', () => {
            it('should ', () => {
                const actual = onGetPlayersFetchStatusSuccess(state);
                const expected = {
                    ...state,
                    fetchStatus: {
                        ...state.fetchStatus,
                        get: FetchStatus.SUCCESS,
                    },
                };
                expect(actual).toEqual(expected);
            });
        });
        describe('onGetPlayersFetchStatusFailed', () => {
            it('should ', () => {
                const actual = onGetPlayersFetchStatusFailed(state);
                const expected = {
                    ...state,
                    fetchStatus: {
                        ...state.fetchStatus,
                        get: FetchStatus.FAILURE,
                    },
                };
                expect(actual).toEqual(expected);
            });
        });
    });
    describe('Saving the new players', () => {
        it('should save a list of players into the store', () => {
            const action: Success<undefined, GetPlayersResponse> = {
                params: undefined,
                result: [{ name: 'mock name #1' }, { name: 'mock name #2' }] as ResponsePlayer[],
            };
            const actual = onGetPlayersSuccess(state, action);
            const expected = {
                'mock name #1': { name: 'mock name #1' },
                'mock name #2': { name: 'mock name #2' },
            };
            expect(actual).toEqual(expected);
        });
    });
});
