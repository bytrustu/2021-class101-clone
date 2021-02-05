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
} from '../actions'

import { IAction } from '../../types'
import { sleep } from '../../utils'

export function* addCart(action: IAction<string>) {
  try {
    yield sleep(1)
    yield put(addCartSuccess(action.payload))
    const cartList = JSON.parse(localStorage.getItem('cart') as string)
    cartList.push(action.payload)
    localStorage.setItem('cart', JSON.stringify([...new Set(cartList)]))
  } catch (e) {
    console.error(e)
    yield put(addCartError(e.message))
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart)
}

export function* removeCart(action: IAction<string>) {
  try {
    yield sleep(1)
    yield put(removeCartSuccess(action.payload))
  } catch (e) {
    console.error(e)
    yield put(removeCartError(e.message))
  }
}

function* watchRemoveCart() {
  yield takeLatest(REMOVE_CART_REQUEST, removeCart)
}

export default function* cartSaga() {
  yield all([fork(watchAddCart)])
  yield all([fork(watchRemoveCart)])
}
