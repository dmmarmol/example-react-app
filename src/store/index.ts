import { AppState } from 'store/store-types';
import { initialState as playersInitialState } from 'store/players/playersReducer';

export const initialState: AppState = {
    players: playersInitialState,
    form: {},
};
