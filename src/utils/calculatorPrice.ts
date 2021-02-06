import { ICoupon, IPurchaseItem } from '../types'

const filterPaymentProducts = (products: IPurchaseItem[] = [], checkboxState: string[] = []): IPurchaseItem[] => {
  if (products.length === 0 || checkboxState.length === 0) return []
  return products.filter((product) => checkboxState.includes(product.id))
}

const sumPaymentProducts = (products: IPurchaseItem[] = []): number => {
  if (products.length === 0) return 0
  return products.reduce((acc, curr) => acc + curr.price * curr.count, 0)
}

const calcDiscountCoupon = (price = 0, coupon: ICoupon): number => {
  if (price === 0 || !coupon) return 0
  console.log(price, coupon)
  if (coupon.type === 'rate' && coupon.discountRate) {
    return (price * coupon.discountRate) / 100
  }
  if (coupon.type === 'amount' && coupon.discountAmount) {
    return coupon.discountAmount
  }
  return 0
}

const appliedDiscountCoupon = (products: IPurchaseItem[] = [], coupon: ICoupon): number => {
  if (products.length === 0 || !coupon) return 0
  const appliedCouponProducts = products.filter((product) => product.availableCoupon !== false)
  if (appliedCouponProducts.length === 0) return 0
  const sumProductsPrice = sumPaymentProducts(appliedCouponProducts)
  console.log(products)
  if (sumProductsPrice === 0) return 0
  return calcDiscountCoupon(sumProductsPrice, coupon)
}

const filterProducts = (products: IPurchaseItem[], checkboxState: string[]): IPurchaseItem[] =>
  filterPaymentProducts(products, checkboxState)

const sumProductsCost = (products: IPurchaseItem[]): number => sumPaymentProducts(products)

export const sumTotalCost = (products: IPurchaseItem[], checkboxState: string[]) =>
  sumProductsCost(filterProducts(products, checkboxState))

export const discountCost = (products: IPurchaseItem[], coupon: ICoupon, checkboxState: string[]): number =>
  appliedDiscountCoupon(filterProducts(products, checkboxState), coupon)

export const bestPricingByCoupon = (
  purchaseList: IPurchaseItem[],
  coupons: ICoupon[],
  checkboxState: string[],
): ICoupon | void | null => {
  if (purchaseList.length === 0 || coupons.length === 0) return null
  const filterProducts = filterPaymentProducts(purchaseList, checkboxState)
  if (filterProducts.length === 0) return null
  const sumProductsPrice = sumPaymentProducts(filterProducts)
  if (sumProductsPrice === 0) return null
  const prices: number[] = coupons.map((coupon) => calcDiscountCoupon(sumProductsPrice, coupon))
  const bestDiscount: number = Math.max(...prices)
  return coupons[prices.findIndex((price) => price === bestDiscount)]
}
