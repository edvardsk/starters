import { all } from 'redux-saga/effects';

import routerSaga from './router';
import fileUploader from './fileUploader';
import { saga as testGroupsSaga } from 'domains/testGroups';

export default function* rootSaga() {
  yield all([
    routerSaga(),
    fileUploader(),
    // here can be only domain sagas
    testGroupsSaga(),
  ]);
}
