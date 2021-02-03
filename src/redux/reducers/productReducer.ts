import produce, { Draft } from 'immer'
import { IHandleChangeFetchCycle, IFetchCycle, IProductState } from '../../types'

import { TProductAction, TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from '../actions'

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
}

export type TProductReducerState = typeof initialState

export default (state: TProductReducerState = initialState, action: TProductAction) => {
  return produce(state, (draft: Draft<TProductReducerState>) => {
    switch (action.type) {
      case TEST_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, TEST_REQUEST)
        draft.error = initFetchCycle(draft.error, TEST_FAILURE)
        draft.success = initFetchCycle(draft.success, TEST_SUCCESS)
        break
      }
      case TEST_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, TEST_REQUEST)
        draft.success = processFetchCycle(draft.success, TEST_SUCCESS, action.payload)
        draft.recommendProductItem = action.payload.recommendProductItem
          ? action.payload.recommendProductItem
          : draft.recommendProductItem
        break
      }
      case TEST_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, TEST_REQUEST)
        draft.error = processFetchCycle(draft.error, TEST_FAILURE, action.payload)
        break
      }
      default: {
        break
      }
    }
  })
}
