import { put, call, takeLatest } from 'redux-saga/effects';
import { getPlayers, getPlayersAsync } from '../actions';
import Api from 'services/Api';

const executor = function*() {
    const params = undefined;
    yield put(getPlayersAsync.started(params));
    try {
        // GetPlayersResponse
        const response = yield call(Api.players.getPlayers);

        yield put(
            getPlayersAsync.done({
                params,
                result: response.data,
            }),
        );
    } catch (error) {
        yield put(
            getPlayersAsync.failed({
                params,
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
