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
  cooponList: ICoupon[]
  bannerData: IBannerData | null
  currentPage: number
  maxPage: number
  cartList: string[]
}

export interface ICartState extends IFetchState {
  cartList: string[]
  purchaseList: IPurchaseItem[]
  couponList: ICoupon[]
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
  count?: number
}

export interface IPurchaseItem {
  id: string
  coverImage: string
  price: number
  title: string
  availableCoupon?: boolean
  score: number
  count: number
}

export interface ICoupon {
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

export interface IBannerData extends IErrorMessage {
  title?: string
  detail?: string
  imageUrl?: string
  backgroundColor?: string
}

export interface IStoreState {
  product: TProductReducerState
  cart: TCartReducerState
}

export type IUseCounter = (
  currentNumber: number,
  maxNumber: number,
) => { count: number; countUp: (action?: any) => void; countDown: (action?: any) => void }

export type TUseCheckbox = (
  length: number,
) => {
  form: any[]
  onChangeSingle: (checked: boolean, name: string | undefined, id: string | undefined) => void
  onChangeAll: (checked: boolean) => void
  emptyCheckbox: () => void
  checkAllCheckbox: (all: any[]) => void
}
