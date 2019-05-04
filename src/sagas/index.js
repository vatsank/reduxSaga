import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchUsers() {

    const json = yield fetch('http://localhost:4000/users')
        .then(response => response.json(), );

    yield put({ type: "USERS_RECEIVED", json: json, });
}

function* actionWatcher() {
    yield takeLatest('GET_USERS', fetchUsers)
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}