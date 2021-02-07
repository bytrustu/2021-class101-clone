import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest
export const call: any = Eff.call

import {
  addCartSuccess,
  addCartError,
  removeCartSuccess,
  removeCartError,
  ADD_CART_REQUEST,
  REMOVE_CART_REQUEST,
  loadPurchaseSuccess,
  loadPurchaseError,
  LOAD_PURCHASE_REQUEST,
  loadCouponSuccess,
  loadCouponError,
  LOAD_COUPON_REQUEST,
  paymentSuccess,
  paymentError,
  PAYMENT_REQUEST,
} from '../actions'
import { IAction, IPayment } from '../../types'
import { filterLocalStorageByArray, pushLocalStorageByArray, sleep } from '../../utils'
import { loadCooponListAPI, loadPurchaseAPI } from '../../api'

export function* addCart(action: IAction<string>) {
  try {
    yield sleep(1)
    yield put(addCartSuccess(action.payload))
    pushLocalStorageByArray('cart', action.payload)
    pushLocalStorageByArray('interestCart', action.payload)
  } catch (e) {
    console.error(e)
    yield put(addCartError(e.message))
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart)
}

export function* removeCart(action: IAction<string[]>) {
  try {
    yield put(removeCartSuccess(action.payload))
    filterLocalStorageByArray('cart', action.payload as string[])
  } catch (e) {
    console.error(e)
    yield put(removeCartError(e.message))
  }
}

function* watchRemoveCart() {
  yield takeLatest(REMOVE_CART_REQUEST, removeCart)
}

export function* loadPurchase(action: IAction<string[]>) {
  try {
    yield sleep(1)
    const result = yield call(loadPurchaseAPI, action.payload)
    yield put(loadPurchaseSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadPurchaseError(e.message))
  }
}
function* watchLoadPurchase() {
  yield takeLatest(LOAD_PURCHASE_REQUEST, loadPurchase)
}

export function* loadCoupon() {
  try {
    yield sleep(1)
    const result = yield call(loadCooponListAPI)
    yield put(loadCouponSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadCouponError(e.message))
  }
}
function* watchLoadCoupon() {
  yield takeLatest(LOAD_COUPON_REQUEST, loadCoupon)
}

export function* requestPayment(action: IAction<IPayment>) {
  try {
    yield sleep(5)
    yield put(paymentSuccess(action.payload))
  } catch (e) {
    console.error(e)
    yield put(paymentError(e.message))
  }
}
function* watchRequestPayment() {
  yield takeLatest(PAYMENT_REQUEST, requestPayment)
}

export default function* cartSaga() {
  yield all([fork(watchAddCart)])
  yield all([fork(watchRemoveCart)])
  yield all([fork(watchLoadPurchase)])
  yield all([fork(watchLoadCoupon)])
  yield all([fork(watchRequestPayment)])
}
