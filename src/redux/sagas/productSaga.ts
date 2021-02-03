import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest
const takeEvery: any = Eff.takeEvery
export const call: any = Eff.call

import {
  LOAD_BANNER_REQUEST,
  LOAD_BANNER_SUCCESS,
  LOAD_BANNER_FAILURE,
  loadBannerSuccess,
  loadBannerError
} from '../actions'
import {
  getBannerAPI,
  getCooponListAPI,
  getProductItemListAPI
} from '../../api'
import { IAction } from '../../types'
import { sleep } from '../../utils'

export function* getBanner(action: IAction<number>) {
  try {
    yield sleep(1)
    const result = yield call(getBannerAPI)
    yield put(loadBannerSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadBannerError(e.message))
  }
}

function* watchTest() {
  yield takeEvery(LOAD_BANNER_REQUEST, getBanner)
}

export default function* companySaga() {
  yield all([fork(watchTest)])
}
