import { TProductReducerState } from '../redux/reducers/productReducer'
import { TCartReducerState } from '../redux/reducers/cartReducer'

export interface IFetchCycle {
  type: string[]
  response: { [k: string]: string }
}

export interface IFetchState {
  loading: IFetchCycle
  success: IFetchCycle
  error: IFetchCycle
}

export interface IProductState extends IFetchState {
  productItemList: IProductItem[]
  recommendProductItem: IProductItem | null
  cooponList: ICoopon[]
  bannerData: IBannerData | null
  currentPage: number
  maxPage: number
  cartList: string[]
}

export interface ICartState extends IFetchState {
  cartList: string[]
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
  backgroundColor?: string
}

export interface IStoreState {
  product: TProductReducerState
  cart: TCartReducerState
}