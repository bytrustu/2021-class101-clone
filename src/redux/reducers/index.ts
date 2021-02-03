import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import product, { TProductReducerState } from "../reducers/productReducer";

export interface IReducerState {
  user: TProductReducerState;
}


const rootReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        product,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
