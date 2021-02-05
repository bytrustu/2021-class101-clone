import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import product from '../reducers/productReducer'
import cart from '../reducers/cartReducer'

const rootReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default: {
      const combineReducer = combineReducers({
        product,
        cart,
      })
      return combineReducer(state, action)
    }
  }
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
