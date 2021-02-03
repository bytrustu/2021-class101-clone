import { ICoopon, IErrorMessage } from '../types'

export const getCooponList = async (): Promise<ICoopon[] | IErrorMessage> => {
  try {
    console.log(coopons);
    return coopons
  } catch (e) {
    return { error: '쿠폰을 불러올 수 없습니다.' }
  }
}

export const coopons: ICoopon[] = [
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
