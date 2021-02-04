import produce, { Draft } from 'immer'
import { IHandleChangeFetchCycle, IFetchCycle, IProductState } from '../../types'

import {
  TProductAction,
  LOAD_BANNER_REQUEST,
  LOAD_BANNER_SUCCESS,
  LOAD_BANNER_FAILURE,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
} from '../actions'

const fetchCycle: IFetchCycle = {
  type: [],
  response: {},
}

const initFetchCycle: IHandleChangeFetchCycle = (fetchCycle, initType) => {
  delete fetchCycle.response[initType]
  return {
    ...fetchCycle,
    type: fetchCycle.type.filter((type) => type !== initType),
  }
}

const processFetchCycle: IHandleChangeFetchCycle = (fetchCycle, processType, data) => ({
  ...fetchCycle,
  type: [...fetchCycle.type, processType],
  response: {
    ...fetchCycle.response,
    [processType]: data,
  },
})

const initialState: IProductState = {
  loading: fetchCycle,
  success: fetchCycle,
  error: fetchCycle,
  productItemList: [],
  recommendProductItem: null,
  cooponList: [],
  bannerData: null,
  currentPage: 1,
  maxPage: 1,
  cartList: [],
}

export type TProductReducerState = typeof initialState

export default (state: TProductReducerState = initialState, action: TProductAction) => {
  return produce(state, (draft: Draft<TProductReducerState>) => {
    switch (action.type) {
      case LOAD_BANNER_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, LOAD_BANNER_REQUEST)
        draft.error = initFetchCycle(draft.error, LOAD_BANNER_FAILURE)
        draft.success = initFetchCycle(draft.success, LOAD_BANNER_SUCCESS)
        break
      }
      case LOAD_BANNER_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, LOAD_BANNER_REQUEST)
        draft.success = processFetchCycle(draft.success, LOAD_BANNER_SUCCESS)
        draft.bannerData = action.payload
        break
      }
      case LOAD_BANNER_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, LOAD_BANNER_REQUEST)
        draft.error = processFetchCycle(draft.error, LOAD_BANNER_FAILURE, action.payload)
        break
      }
      case LOAD_PRODUCT_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, LOAD_PRODUCT_REQUEST)
        draft.error = initFetchCycle(draft.error, LOAD_PRODUCT_FAILURE)
        draft.success = initFetchCycle(draft.success, LOAD_PRODUCT_SUCCESS)
        break
      }
      case LOAD_PRODUCT_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, LOAD_PRODUCT_REQUEST)
        draft.success = processFetchCycle(draft.success, LOAD_PRODUCT_SUCCESS)
        draft.productItemList = [...draft.productItemList, ...action.payload.productItemList]
        draft.recommendProductItem = action.payload.recommendProductItem
        draft.currentPage = action.payload.currentPage
        draft.maxPage = action.payload.maxPage
        break
      }
      case LOAD_PRODUCT_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, LOAD_PRODUCT_REQUEST)
        draft.error = processFetchCycle(draft.error, LOAD_PRODUCT_FAILURE, action.payload)
        break
      }
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
        draft.cartList = draft.cartList.filter((cartItem) => cartItem !== action.payload)
        break
      }
      case REMOVE_CART_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, REMOVE_CART_REQUEST)
        draft.error = processFetchCycle(draft.error, REMOVE_CART_FAILURE, action.payload)
        break
      }
      default: {
        break
      }
    }
  })
}
