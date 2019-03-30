import { put, call, takeLatest } from 'redux-saga/effects';
import { getPlayers, getPlayersAsync } from '../actions';

const executor = function*() {
    yield put(getPlayersAsync.started({}));
    try {
        yield put(
            getPlayersAsync.done({
                params: {},
                result: [],
            }),
        );
    } catch (error) {
        yield put(
            getPlayersAsync.failed({
                params: {},
                error,
            }),
        );
    }
};

const worker = function*() {
    yield call(executor);
};

export default function*() {
    yield takeLatest(getPlayers, worker);
}
