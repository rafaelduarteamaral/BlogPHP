import { all, takeLatest } from 'redux-saga/effects';

import { ArticlesTypes } from './articles/types';
import { load } from './articles/sagas';


export default function* rootSaga() {
    return yield all([
        takeLatest(ArticlesTypes.LOAD_REQUEST, load)
    ]);
}