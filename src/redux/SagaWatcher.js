import {FETCH_POST, REQUEST_POST} from "./ProfileStore/profileTypes";
import {put, takeEvery, call} from "redux-saga/effects";


export function* sagaWatcher() {
    yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POST, payload})
    } catch (e) {
        console.log(e.message('Error'))
    }
}

async function fetchPosts() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    return await response.json()
}