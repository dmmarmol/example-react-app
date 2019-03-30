import { AppState } from 'store/store-types';
declare const window: Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
};

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState: AppState | undefined) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    return {
        store,
        runSaga: sagaMiddleware.run,
    };
};

export default configureStore;
