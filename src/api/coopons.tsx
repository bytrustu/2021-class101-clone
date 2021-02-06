import { ICoupon, IErrorMessage } from '../types'

export const loadCooponListAPI = async (): Promise<ICoupon[] | IErrorMessage> => {
  try {
    return coopons
  } catch (e) {
    return { message: '쿠폰을 불러올 수 없습니다.' }
  }
}

export const coopons: ICoupon[] = [
  {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10,
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000,
  },
]
