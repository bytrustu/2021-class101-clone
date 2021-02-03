import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest
const takeEvery: any = Eff.takeEvery
export const call: any = Eff.call

import { TEST_REQUEST, testSuccessAction, testErrorAction } from '../actions'
import { IAction } from '../../types'
import { sleep } from '../../utils'
import { getCooponList, getProductItemList } from '../../api'

export function* test(action: IAction<number>) {
  try {
    // yield sleep(2)
    const result = yield call(getProductItemList, action.payload)
    yield put(testSuccessAction(result))
  } catch (e) {
    console.error(e)
    yield put(testErrorAction(e.message))
  }
}

function* watchTest() {
  yield takeEvery(TEST_REQUEST, test)
}

export default function* companySaga() {
  yield all([fork(watchTest)])
}
