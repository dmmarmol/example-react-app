import { all, fork } from 'redux-saga/effects';
import playersSagas from 'store/players/sagas';

export default function* root() {
    yield all([fork(playersSagas)]);
}
