export interface IFetchCycle {
  type: string[];
  response: { [k: string]: string }
}

export interface IInitialState {
  loading: IFetchCycle,
  success: IFetchCycle,
  error: IFetchCycle,
}

export interface IAction<T> {
  type: string;
  payload?: T;
}
export type TCreateAction<T> = (payload?: T) => IAction<T>;

export type IHandleChangeFetchCycle = (fetchCycle: IFetchCycle, initType: string, data?: any) => IFetchCycle;

export interface IProductItem {
  id: string
  coverImage: string
  price: number
  score: number
  title: string
  availableCoupon?: boolean
}

export interface ICoupon {
  type: string
  title: string
  discountRate?: number
  discountAmount?: number
}