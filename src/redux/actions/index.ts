import { ICoupon, IPayment, IPurchaseItem, IResponseProductData, TCreateAction } from '../../types'

const createAction = (type: string, payload?: any) => ({ type, payload })

export const LOAD_BANNER_REQUEST = 'LOAD_BANNER_REQUEST'
export const LOAD_BANNER_SUCCESS = 'LOAD_BANNER_SUCCESS'
export const LOAD_BANNER_FAILURE = 'LOAD_BANNER_FAILURE'

export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST'
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS'
export const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE'

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST'
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS'
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE'

export const REMOVE_CART_REQUEST = 'REMOVE_CART_REQUEST'
export const REMOVE_CART_SUCCESS = 'REMOVE_CART_SUCCESS'
export const REMOVE_CART_FAILURE = 'REMOVE_CART_FAILURE'

export const LOAD_LOCAL_CART = 'LOAD_LOCAL_CART'

export const LOAD_PURCHASE_REQUEST = 'LOAD_PURCHASE_REQUEST'
export const LOAD_PURCHASE_SUCCESS = 'LOAD_PURCHASE_SUCCESS'
export const LOAD_PURCHASE_FAILURE = 'LOAD_PURCHASE_FAILURE'

export const PLUS_PURCHASE_REQUEST = 'PLUS_PURCHASE_REQUEST'
export const MINUS_PURCHASE_REQUEST = 'MINUS_PURCHASE_REQUEST'

export const LOAD_COUPON_REQUEST = 'LOAD_COUPON_REQUEST'
export const LOAD_COUPON_SUCCESS = 'LOAD_COUPON_SUCCESS'
export const LOAD_COUPON_FAILURE = 'LOAD_COUPON_FAILURE'

export const PAYMENT_REQUEST = 'PAYMENT_REQUEST'
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS'
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE'

export const CLEAR_PAYMENT = 'CLEAR_PAYMENT'

export const loadBannerReqeust: TCreateAction<any, any> = () => createAction(LOAD_BANNER_REQUEST)
export const loadBannerSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(LOAD_BANNER_SUCCESS, payload)
export const loadBannerError: TCreateAction<string, string> = (payload) => createAction(LOAD_BANNER_FAILURE, payload)

export const loadProductReqeust: TCreateAction<number, any> = (page) => createAction(LOAD_PRODUCT_REQUEST, page)
export const loadProductSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(LOAD_PRODUCT_SUCCESS, payload)
export const loadProductError: TCreateAction<string, string> = (payload) => createAction(LOAD_PRODUCT_FAILURE, payload)

export const addCartReqeust: TCreateAction<string, any> = (id) => createAction(ADD_CART_REQUEST, id)
export const addCartSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(ADD_CART_SUCCESS, payload)
export const addCartError: TCreateAction<string, string> = (payload) => createAction(ADD_CART_FAILURE, payload)

export const removeCartReqeust: TCreateAction<string[], any> = (data) => createAction(REMOVE_CART_REQUEST, data)
export const removeCartSuccess: TCreateAction<string[], IResponseProductData> = (payload) =>
  createAction(REMOVE_CART_SUCCESS, payload)
export const removeCartError: TCreateAction<string, string> = (payload) => createAction(REMOVE_CART_FAILURE, payload)

export const loadLocalCart: TCreateAction<any, any> = () => createAction(LOAD_LOCAL_CART)

export const loadPurchaseReqeust: TCreateAction<string[], any> = (cartList) =>
  createAction(LOAD_PURCHASE_REQUEST, cartList)
export const loadPurchaseSuccess: TCreateAction<IPurchaseItem[], string> = (payload) =>
  createAction(LOAD_PURCHASE_SUCCESS, payload)
export const loadPurchaseError: TCreateAction<string, string> = (payload) =>
  createAction(LOAD_PURCHASE_FAILURE, payload)

export const reqestPlusPurchase: TCreateAction<string, any> = (payload) => createAction(PLUS_PURCHASE_REQUEST, payload)
export const reqestMinusPurchase: TCreateAction<string, any> = (payload) =>
  createAction(MINUS_PURCHASE_REQUEST, payload)

export const loadCouponReqeust: TCreateAction<any, any> = () => createAction(LOAD_COUPON_REQUEST)
export const loadCouponSuccess: TCreateAction<ICoupon[], string> = (payload) =>
  createAction(LOAD_COUPON_SUCCESS, payload)
export const loadCouponError: TCreateAction<string, string> = (payload) => createAction(LOAD_COUPON_FAILURE, payload)

export const paymentReqeust: TCreateAction<IPayment, any> = (payload) => createAction(PAYMENT_REQUEST, payload)
export const paymentSuccess: TCreateAction<IPayment, string> = (payload) => createAction(PAYMENT_SUCCESS, payload)
export const paymentError: TCreateAction<string, string> = (payload) => createAction(PAYMENT_FAILURE, payload)

export const clearPayment: TCreateAction<any, any> = () => createAction(CLEAR_PAYMENT)

export type TProductAction =
  | ReturnType<typeof loadBannerReqeust>
  | ReturnType<typeof loadBannerSuccess>
  | ReturnType<typeof loadBannerError>
  | ReturnType<typeof loadProductReqeust>
  | ReturnType<typeof loadProductSuccess>
  | ReturnType<typeof loadProductError>

export type TCartAction =
  | ReturnType<typeof addCartReqeust>
  | ReturnType<typeof addCartSuccess>
  | ReturnType<typeof addCartError>
  | ReturnType<typeof removeCartReqeust>
  | ReturnType<typeof removeCartSuccess>
  | ReturnType<typeof removeCartError>
  | ReturnType<typeof loadLocalCart>
  | ReturnType<typeof loadPurchaseReqeust>
  | ReturnType<typeof loadPurchaseSuccess>
  | ReturnType<typeof loadPurchaseError>
  | ReturnType<typeof reqestPlusPurchase>
  | ReturnType<typeof reqestMinusPurchase>
  | ReturnType<typeof loadCouponReqeust>
  | ReturnType<typeof loadCouponSuccess>
  | ReturnType<typeof loadCouponError>
  | ReturnType<typeof paymentReqeust>
  | ReturnType<typeof paymentSuccess>
  | ReturnType<typeof paymentError>
  | ReturnType<typeof clearPayment>
