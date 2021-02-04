import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { ProductCartIcon } from '../../components'
import { calcMontlyPrice, changeToPrice } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_CART_REQUEST, addCartReqeust } from '../../redux/actions'
import { IStoreState } from '../../types'
import { message } from 'antd'

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
}

const ProductPrices: FC<IProductPricesProps> = ({ id, price, monthly = 0 }) => {
  const dispatch = useDispatch()
  const { loading, cartList } = useSelector((state: IStoreState) => state.product)

  const originPrice = changeToPrice(price)
  const monthlyPrice = calcMontlyPrice(price, monthly)

  const onClickCartHandle = () => {
    if (cartList.length >= 3) {
      return message.info('장바구니 개수를 초과 하였습니다.')
    }
    dispatch(addCartReqeust(id))
  }

  return (
    <StyleProductPricesWrap>
      {price ? (
        <>
          <StyleProductPrice>{originPrice}원</StyleProductPrice>
          <StyleProductPridceByMontly>
            월 {monthlyPrice}원<span>({monthly}개월)</span>
          </StyleProductPridceByMontly>
          <ProductCartIcon
            active={cartList?.includes(id as string)}
            loading={loading.response[ADD_CART_REQUEST] === id}
            onClickHandle={onClickCartHandle}
          />
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
