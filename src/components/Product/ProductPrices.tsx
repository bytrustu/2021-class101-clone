import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import ProductCartIcon from '../../components/Product/ProductCartIcon'
import { calcMontlyPrice, changeToPrice } from '../../utils'

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
  price?: number
  monthly?: number
  cartActive?: boolean
  cartLoading?: boolean
}

const ProductPrices: FC<IProductPricesProps> = ({ price, monthly = 0, cartActive, cartLoading }) => {
  const originPrice = changeToPrice(price)
  const monthlyPrice = calcMontlyPrice(price, monthly)
  return (
    <StyleProductPricesWrap>
      {price ? (
        <>
          <StyleProductPrice>{originPrice}원</StyleProductPrice>
          <StyleProductPridceByMontly>
            월 {monthlyPrice}원<span>({monthly}개월)</span>
          </StyleProductPridceByMontly>
          <ProductCartIcon active={cartActive} loading={cartLoading} />
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
