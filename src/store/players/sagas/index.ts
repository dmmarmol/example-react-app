import { fork, all } from 'redux-saga/effects';
import getPlayersSaga from './getPlayers.sagas';

export default function*() {
    yield all([fork(getPlayersSaga)]);
}
