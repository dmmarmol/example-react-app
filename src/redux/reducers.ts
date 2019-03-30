import { AppState } from 'store/store-types';
import { combineReducers } from 'redux';

import playersReducer from 'store/players/playersReducer';

/**
 * Place all application reducers here
 */
export default combineReducers<AppState>({
    players: playersReducer,
});
