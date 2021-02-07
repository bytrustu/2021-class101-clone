import produce, { Draft } from 'immer'
import { ICartState } from '../../types'
import {
  TCartAction,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
  LOAD_LOCAL_CART,
  LOAD_PURCHASE_REQUEST,
  LOAD_PURCHASE_SUCCESS,
  LOAD_PURCHASE_FAILURE,
  PLUS_PURCHASE_REQUEST,
  MINUS_PURCHASE_REQUEST,
  LOAD_COUPON_REQUEST,
  LOAD_COUPON_SUCCESS,
  LOAD_COUPON_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  CLEAR_PAYMENT,
} from '../actions'
import { initFetchCycle, processFetchCycle } from '../utils'
import { fetchCycle } from '../../const'
import { pushLocalStorageByArray } from '../../utils'

const initialState: ICartState = {
  loading: fetchCycle,
  success: fetchCycle,
  error: fetchCycle,
  cartList: [],
  purchaseList: [],
  couponList: [],
  payment: {},
}

export type TCartReducerState = typeof initialState

export default (state: TCartReducerState = initialState, action: TCartAction) => {
  return produce(state, (draft: Draft<TCartReducerState>) => {
    switch (action.type) {
      case ADD_CART_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, ADD_CART_REQUEST, action.payload)
        draft.error = initFetchCycle(draft.error, ADD_CART_FAILURE)
        draft.success = initFetchCycle(draft.success, ADD_CART_SUCCESS)
        break
      }
      case ADD_CART_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, ADD_CART_REQUEST)
        draft.success = processFetchCycle(draft.success, ADD_CART_SUCCESS)
        draft.cartList = [...new Set([...draft.cartList, action.payload])]
        break
      }
      case ADD_CART_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, ADD_CART_REQUEST)
        draft.error = processFetchCycle(draft.error, ADD_CART_FAILURE, action.payload)
        break
      }

      case REMOVE_CART_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, REMOVE_CART_REQUEST, action.payload)
        draft.error = initFetchCycle(draft.error, REMOVE_CART_FAILURE)
        draft.success = initFetchCycle(draft.success, REMOVE_CART_SUCCESS)
        break
      }
      case REMOVE_CART_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, REMOVE_CART_REQUEST)
        draft.success = processFetchCycle(draft.success, REMOVE_CART_SUCCESS)
        draft.cartList = draft.cartList.filter((cartItem) => !action.payload.includes(cartItem))
        break
      }
      case REMOVE_CART_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, REMOVE_CART_REQUEST)
        draft.error = processFetchCycle(draft.error, REMOVE_CART_FAILURE, action.payload)
        break
      }

      case LOAD_LOCAL_CART: {
        const cartList = localStorage.getItem('cart') as string
        cartList ? (draft.cartList = JSON.parse(cartList)) : pushLocalStorageByArray('cart')
        break
      }

      case LOAD_PURCHASE_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, LOAD_PURCHASE_REQUEST, action.payload)
        draft.error = initFetchCycle(draft.error, LOAD_PURCHASE_FAILURE)
        draft.success = initFetchCycle(draft.success, LOAD_PURCHASE_SUCCESS)
        break
      }
      case LOAD_PURCHASE_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, LOAD_PURCHASE_REQUEST)
        draft.success = processFetchCycle(draft.success, LOAD_PURCHASE_SUCCESS)
        draft.purchaseList = action.payload
        break
      }
      case LOAD_PURCHASE_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, LOAD_PURCHASE_REQUEST)
        draft.error = processFetchCycle(draft.error, LOAD_PURCHASE_FAILURE, action.payload)
        break
      }

      case PLUS_PURCHASE_REQUEST: {
        draft.purchaseList = draft.purchaseList.map((product) => {
          if (product.id === action.payload) {
            product.count += 1
          }
          return product
        })
        break
      }
      case MINUS_PURCHASE_REQUEST: {
        draft.purchaseList = draft.purchaseList.map((product) => {
          if (product.id === action.payload) {
            product.count -= 1
          }
          return product
        })
        break
      }

      case LOAD_COUPON_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, LOAD_COUPON_REQUEST)
        draft.error = initFetchCycle(draft.error, LOAD_COUPON_FAILURE)
        draft.success = initFetchCycle(draft.success, LOAD_COUPON_SUCCESS)
        break
      }
      case LOAD_COUPON_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, LOAD_COUPON_REQUEST)
        draft.success = processFetchCycle(draft.success, LOAD_COUPON_SUCCESS)
        draft.couponList = action.payload
        break
      }
      case LOAD_COUPON_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, LOAD_COUPON_REQUEST)
        draft.error = processFetchCycle(draft.error, LOAD_COUPON_FAILURE, action.payload)
        break
      }

      case PAYMENT_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, PAYMENT_REQUEST)
        draft.error = initFetchCycle(draft.error, PAYMENT_FAILURE)
        draft.success = initFetchCycle(draft.success, PAYMENT_SUCCESS)
        break
      }
      case PAYMENT_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, PAYMENT_REQUEST)
        draft.success = processFetchCycle(draft.success, PAYMENT_SUCCESS)
        draft.payment = action.payload
        break
      }
      case PAYMENT_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, PAYMENT_REQUEST)
        draft.error = processFetchCycle(draft.error, PAYMENT_FAILURE, action.payload)
        break
      }

      case CLEAR_PAYMENT: {
        draft.loading = initFetchCycle(draft.loading, PAYMENT_REQUEST)
        draft.success = initFetchCycle(draft.success, PAYMENT_SUCCESS)
        draft.payment = {}
        break
      }

      default: {
        break
      }
    }
  })
}
