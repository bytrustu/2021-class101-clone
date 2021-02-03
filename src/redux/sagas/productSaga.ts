import { all, fork, put } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';

const takeLatest: any = Eff.takeLatest;
export const call: any = Eff.call;

import {
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_FAILURE,
  testSuccessAction,
  testErrorAction,
} from '../actions';
import { IAction, TCreateAction } from '../../types';
import { sleep } from '../../utils';
import { testAPI } from '../../api';


export function* test() {
  try {
    yield sleep(2);
    const result = yield call(testAPI);
    yield put(testSuccessAction(result.payload));
  } catch (e) {
    console.error(e);
    yield put(testErrorAction(e.message));
  }
}

function* watchTest() {
  yield takeLatest(TEST_REQUEST, test);
}

export default function* companySaga() {
  yield all([
    fork(watchTest),
  ]);
}
