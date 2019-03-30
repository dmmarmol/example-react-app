import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppState } from 'store/store-types';
import rootReducer from 'redux/reducers';

const composeEnhancers = compose;
const configureStore = (initialState: AppState | undefined) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    return {
        store,
        runSaga: sagaMiddleware.run,
    };
};

export default configureStore;
