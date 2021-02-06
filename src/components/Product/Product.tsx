import React, { FC } from 'react'
import styled from 'styled-components'
import { Divider, ProductDetail, ProductImage, ProductPrices } from '../../components'
import { useCounter } from '../../hooks'
import { TUseCheckbox } from '../../types'

const StyleProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

interface IProductProps {
  id?: string
  imageUrl?: string
  title?: string
  price?: number
  monthly?: number
  badge?: string
  important?: boolean
  isCounter?: boolean
  checkboxState?: ReturnType<TUseCheckbox>
  onClickRemoveCartHandle?: any
  children?: React.ReactNode
}

const Product: FC<IProductProps> = ({
  id = '',
  imageUrl = '',
  title = '',
  price = 0,
  monthly = 1,
  badge = '',
  important = false,
  isCounter = false,
  checkboxState,
  onClickRemoveCartHandle,
  children,
}) => {
  const counterState = useCounter(1, 10)
  return (
    <StyleProduct>
      <ProductImage
        id={id}
        imageUrl={imageUrl}
        badge={badge}
        important={important}
        checkboxState={checkboxState ? checkboxState : undefined}
        onClickRemoveCartHandle={onClickRemoveCartHandle}
      />
      <ProductDetail title={title} />
      <Divider />
      <ProductPrices
        id={id}
        price={price}
        monthly={monthly}
        counterState={isCounter ? counterState : null}
        productFeature={children}
      />
    </StyleProduct>
  )
}

export default React.memo(Product)
