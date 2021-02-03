import { IResponseProductData, TCreateAction } from '../../types'

const createAction = (type: string, payload?: any) => ({ type, payload })

export const LOAD_BANNER_REQUEST = 'LOAD_BANNER_REQUEST'
export const LOAD_BANNER_SUCCESS = 'LOAD_BANNER_SUCCESS'
export const LOAD_BANNER_FAILURE = 'LOAD_BANNER_FAILURE'

export const loadBannerReqeust: TCreateAction<any, any> = () => createAction(LOAD_BANNER_REQUEST)
export const loadBannerSuccess: TCreateAction<string, IResponseProductData> = (payload) => createAction(LOAD_BANNER_SUCCESS, payload)
export const loadBannerError: TCreateAction<string, string> = (payload) => createAction(LOAD_BANNER_FAILURE, payload)

export type TProductAction =
  | ReturnType<typeof loadBannerReqeust>
  | ReturnType<typeof loadBannerSuccess>
  | ReturnType<typeof loadBannerError>
