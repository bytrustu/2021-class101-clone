import React, { FC } from 'react'
import styled from 'styled-components'
import { ProductDetail, ProductImage, ProductLine, ProductPrices } from '../../components'

const StyleProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

interface IProductProps {
  id?: string
  imageUrl?: string
  title?: string
  price?: number
  monthly?: number
  recommend?: boolean
}

const Product: FC<IProductProps> = ({ id, imageUrl, title, price, monthly, recommend }) => {
  return (
    <StyleProduct>
      <ProductImage imageUrl={imageUrl} recommend={recommend} />
      <ProductDetail title={title} />
      <ProductLine />
      <ProductPrices id={id} price={price} monthly={monthly} />
    </StyleProduct>
  )
}

export default React.memo(Product)
