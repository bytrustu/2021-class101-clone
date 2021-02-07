import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { IProductItem } from '../../types'

const StyleCartSelectedItemWrap = styled.div`
  height: auto;
  min-height: 110px;
  & > div.cart-selected-wrap {
    @media (max-width: 768px) {
      padding-top: 70px !important;  
    }
    
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 110px;
    font-size: 14px;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1.5rem;
  }
`

const CartSelectedItemTitle = styled.h3`
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  top: 1.5rem;
  left: 1.5rem;
`

export const StyleCartSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.15px;
  color: #1b1c1d;

  & + & {
    margin-top: 20px;
  }
`

export const StyleMultiplyIcon = styled.img`
  margin: 0 10px;
  width: 10px;
  height: 10px;
`

const CartSelectedItemSkeleton = styled(Skeleton)`
  height: 110px;
  width: 100%;
`

export const StyleClassTitle = styled.span`
  @media (max-width: 1023px) {
  }
  @media (max-width: 768px) {
    min-width: 0;
    width: 300px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    width: 240px;
  }
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 400px;
  text-align: right;
  color: #858a8d;
  font-size: 15px;
  font-weight: 400;
`

export const StyleClassCount = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.15px;
`

interface ICartSelectedItemProps {
  cartLoading?: boolean
  cartSelectedData?: IProductItem[]
  checkState?: any[]
}

const CartSelectedItem: FC<ICartSelectedItemProps> = ({ cartLoading, cartSelectedData, checkState }) => {
  return (
    <>
      <StyleCartSelectedItemWrap>
        {cartLoading ? (
          <CartSelectedItemSkeleton />
        ) : (
          <div className="cart-selected-wrap">
            <CartSelectedItemTitle>구매목록</CartSelectedItemTitle>
            {cartSelectedData &&
              cartSelectedData.map(
                (product) =>
                  checkState?.includes(product.id) && (
                    <StyleCartSelectedItem>
                      <StyleClassTitle>{product.title}</StyleClassTitle>
                      <StyleMultiplyIcon src="/images/Cross.svg" alt="곱하기 아이콘" />
                      <StyleClassCount>{product.count}</StyleClassCount>
                    </StyleCartSelectedItem>
                  ),
              )}
          </div>
        )}
      </StyleCartSelectedItemWrap>
    </>
  )
}

export default React.memo(CartSelectedItem)
