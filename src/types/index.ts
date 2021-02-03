import { TProductReducerState } from "../redux/reducers/productReducer"

export interface IFetchCycle {
  type: string[]
  response: { [k: string]: string }
}

export interface IProductState {
  loading: IFetchCycle
  success: IFetchCycle
  error: IFetchCycle
  productItemList: IProductItem[]
  recommendProductItem: IProductItem | null
  cooponList: ICoopon[]
  bannerData: IBannerData | null
}

export interface IAction<T> {
  type: string
  payload?: T
}
export type TCreateAction<T, U> = (payload?: T) => IAction<U>

export type IHandleChangeFetchCycle = (fetchCycle: IFetchCycle, initType: string, data?: any) => IFetchCycle

export interface IProductItem {
  id: string
  coverImage: string
  price: number
  score: number
  title: string
  availableCoupon?: boolean
}

export interface ICoopon extends IErrorMessage {
  type: string
  title: string
  discountRate?: number
  discountAmount?: number
}

export interface IErrorMessage {
  message?: string
}

export interface IResponseProductData extends IErrorMessage {
  currentPage?: number
  maxPage?: number
  productItemList?: IProductItem[]
  recommendProductItem?: IProductItem
}

export interface IBannerData extends IErrorMessage{
  title?: string
  detail?: string
  imageUrl?: string
}

export interface IStoreState {
  product: TProductReducerState
}