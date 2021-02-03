import produce, { Draft } from 'immer'
import { IHandleChangeFetchCycle, IFetchCycle, IProductState } from '../../types'

import { TProductAction, LOAD_BANNER_REQUEST, LOAD_BANNER_SUCCESS, LOAD_BANNER_FAILURE } from '../actions'

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
      default: {
        break
      }
    }
  })
}
