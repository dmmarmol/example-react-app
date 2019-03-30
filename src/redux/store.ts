import { initialState } from './../store/index';
import configureStoreProd from './stores/store.prod';
import configureStoreDev from './stores/store.dev';

const { NODE_ENV } = process.env;
const configureStore = NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

const { store, runSaga } = configureStore(initialState);

export { store, runSaga };
