import produce, { Draft } from 'immer'
import { IFetchCycle, IProductState } from '../../types'

import {
  TProductAction,
  LOAD_BANNER_REQUEST,
  LOAD_BANNER_SUCCESS,
  LOAD_BANNER_FAILURE,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
} from '../actions'
import { initFetchCycle, processFetchCycle } from '../utils'

const fetchCycle: IFetchCycle = {
  type: [],
  response: {},
}

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
          ? action.payload.recommendProductItem
          : draft.recommendProductItem
        draft.currentPage = action.payload.currentPage
        draft.maxPage = action.payload.maxPage
        break
      }
      case LOAD_PRODUCT_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, LOAD_PRODUCT_REQUEST)
        draft.error = processFetchCycle(draft.error, LOAD_PRODUCT_FAILURE, action.payload)
        break
      }
      default: {
        break
      }
    }
  })
}
