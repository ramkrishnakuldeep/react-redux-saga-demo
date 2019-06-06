import { put, takeLatest, all } from 'redux-saga/effects';
import {
    GET_ITEMS,
    GET_ITEM_DETAILS,
    GET_CATEGORIES,
    ITEM_CATEGORIES_RECEIVED,
    ITEMS_RECEIVED,
    ITEM_DETAILS_RECEIVED
} from '../actions/actions';

function *fetchCategory () {
    const responseData = yield fetch('http://localhost:5000/categories').then(response => response.json());
    yield put({ type: ITEM_CATEGORIES_RECEIVED, payload: responseData.data });
}

function *fetchItems () {
    const responseData = yield fetch('http://localhost:5000/items').then(response => response.json());
    yield put({ type: ITEMS_RECEIVED, payload: responseData.data });
}

function *fetchItemDetails (action) {
    const responseData = yield fetch(`http://localhost:5000/items/${action.id}`).then(response => response.json());
    yield put({ type: ITEM_DETAILS_RECEIVED, payload: responseData });
}

function *actionWatcher () {
    yield takeLatest(GET_ITEMS, fetchItems);
    yield takeLatest(GET_ITEM_DETAILS, fetchItemDetails);
    yield takeLatest(GET_CATEGORIES, fetchCategory);
}

export default function *rootSaga () {
    yield all([
        actionWatcher()
    ]);
}
