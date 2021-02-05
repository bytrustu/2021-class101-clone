import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'
const takeLatest: any = Eff.takeLatest
export const call: any = Eff.call
import {
  loadBannerSuccess,
  loadBannerError,
  loadProductSuccess,
  loadProductError,
  LOAD_BANNER_REQUEST,
  LOAD_PRODUCT_REQUEST,
} from '../actions'
import { loadBannerAPI, loadProductItemListAPI } from '../../api'
import { IAction } from '../../types'
import { sleep } from '../../utils'

export function* loadBanner() {
  try {
    yield sleep(1)
    const result = yield call(loadBannerAPI)
    yield put(loadBannerSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadBannerError(e.message))
  }
}

function* watchLoadBanner() {
  yield takeLatest(LOAD_BANNER_REQUEST, loadBanner)
}

export function* loadProduct(action: IAction<number>) {
  try {
    yield sleep(1.5)
    const result = yield call(loadProductItemListAPI, action.payload)
    yield put(loadProductSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadProductError(e.message))
  }
}

function* watchLoadProduct() {
  yield takeLatest(LOAD_PRODUCT_REQUEST, loadProduct)
}

export default function* productSaga() {
  yield all([fork(watchLoadBanner)])
  yield all([fork(watchLoadProduct)])
}
