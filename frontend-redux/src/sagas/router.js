import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, cancel, call, fork } from 'redux-saga/effects';

// constants
import { Constants as Routes } from '../domains/routing';

// view sagas
import home from './views/home';

// init
import initialize from './initialize';

const viewSagas = {
  [Routes.HOME]: home,
};

let task = null;

function* onchange(action) {
  const {
    hash,
    pathname,
    search,
  } = action.payload;

  if (task) {
    yield cancel(task);
  }

  if (pathname in viewSagas) {
    task = yield fork(viewSagas[pathname], search, hash);
  }
}

export default function* routerSaga() {
  const pathname = yield call(initialize);
  yield call(onchange, { payload: { pathname }});

  yield takeEvery(LOCATION_CHANGE, onchange);
}
