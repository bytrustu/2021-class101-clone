import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest
const takeEvery: any = Eff.takeEvery
export const call: any = Eff.call

import {
  LOAD_BANNER_REQUEST,
  loadBannerSuccess,
  loadBannerError,
  loadProductSuccess,
  loadProductError,
  LOAD_PRODUCT_REQUEST, addCartSuccess, addCartError, ADD_CART_REQUEST
} from "../actions";
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
  yield takeEvery(LOAD_BANNER_REQUEST, loadBanner)
}

export function* loadProduct(action: IAction<number>) {
  try {
    yield sleep(1)
    const result = yield call(loadProductItemListAPI, action.payload)
    yield put(loadProductSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadProductError(e.message))
  }
}

function* watchLoadProduct() {
  yield takeEvery(LOAD_PRODUCT_REQUEST, loadProduct)
}

export function* addCart(action: IAction<string>) {
  try {
    yield sleep(0.5)
    yield put(addCartSuccess(action.payload))
  } catch (e) {
    console.error(e)
    yield put(addCartError(e.message))
  }
}

function* watchAddCart() {
  yield takeEvery(ADD_CART_REQUEST, addCart)
}

export default function* companySaga() {
  yield all([fork(watchLoadBanner)])
  yield all([fork(watchLoadProduct)])
  yield all([fork(watchAddCart)])
}
