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
  error?: string
}

export interface IResponseProductData extends IErrorMessage {
  currentPage?: number
  maxPage?: number
  productItemList?: IProductItem[]
  recommendProductItem?: IProductItem
}
