import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions'


export function* load(data: any) {
    try {
        if (data.payload.id) {
            const response = yield call(api.get, `articles/${data.payload.id}`);
            yield put(loadSuccess(response.data))
        } else {
            const response = yield call(api.get, 'articles');
            yield put(loadSuccess(response.data))
        }
    } catch (err) {
        yield put(loadFailure());
    }
}

