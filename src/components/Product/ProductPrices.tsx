import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Counter } from '../../components'
import { calcMonthlyPrice, changeToPrice } from '../../utils'
import { IUseCounter } from '../../types'
import { useDispatch } from 'react-redux'
import { reqestPlusPurchase, reqestMinusPurchase } from '../../redux/actions'

const StyleProductPricesWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`

const StyleProductPrice = styled.span`
  @media (max-width: 375px) {
    line-height: 28px;
  }

  font-size: 11px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  color: #858a8d;
  margin-left: 10px;
`

const StyleProductPridceByMontly = styled.strong`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(27, 28, 29);
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;

  & > span {
    font-size: 11px;
    font-weight: normal;
    color: #1b1c1d;
    line-height: 16px;
    letter-spacing: normal;
    margin-left: 3px;
  }
`

const StyleSkeletonByProductPrice = styled(Skeleton)`
  height: 17px;
`
interface IProductPricesProps {
  id?: string
  price?: number
  monthly?: number
  cartActive?: boolean
  cartLoading?: boolean
  productFeature?: React.ReactNode
  counterState?: ReturnType<IUseCounter> | null
}

const ProductPrices: FC<IProductPricesProps> = ({ id, price, monthly = 0, productFeature, counterState }) => {
  const dispatch = useDispatch()
  const requestPlusByPurchase = () => dispatch(reqestPlusPurchase(id))
  const requestMinusByPurchase = () => dispatch(reqestMinusPurchase(id))

  const priceMemo = price && counterState ? useMemo(() => price * counterState.count, [counterState.count]) : price
  const originPrice = priceMemo && changeToPrice(priceMemo)
  const monthlyPrice = priceMemo && calcMonthlyPrice(priceMemo, monthly)


  return (
    <StyleProductPricesWrap>
      {price ? (
        <>
          <StyleProductPrice>{originPrice}원</StyleProductPrice>
          <StyleProductPridceByMontly>
            월 {monthlyPrice}원<span>({monthly}개월)</span>
          </StyleProductPridceByMontly>
          {productFeature}
          {counterState && (
            <Counter
              value={counterState.count}
              countUp={() => counterState.countUp(requestPlusByPurchase)}
              countDown={() => counterState.countDown(requestMinusByPurchase)}
            />
          )}
        </>
      ) : (
        <>
          <StyleSkeletonByProductPrice />
          <StyleSkeletonByProductPrice />
        </>
      )}
    </StyleProductPricesWrap>
  )
}

export default React.memo(ProductPrices)
