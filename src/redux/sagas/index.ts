import { all, fork } from 'redux-saga/effects'
import productSaga from '../sagas/productSaga'
import cartSaga from '../sagas/cartSaga'

export default function* rootSaga() {
  yield all([fork(productSaga), fork(cartSaga)])
}
