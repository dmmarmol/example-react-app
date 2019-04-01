import { AppState } from 'store/store-types';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import playersReducer from 'store/players/playersReducer';

/**
 * Place all application reducers here
 */
const rootReducer = combineReducers<AppState>({
    players: playersReducer,
    form: formReducer,
});
export default rootReducer;
