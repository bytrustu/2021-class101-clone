import React, { FC } from 'react'
import styled from 'styled-components'
import { ProductDetail, ProductImage, ProductLine, ProductPrices } from '../../components'

const StyleProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

interface IProductProps {
  imageUrl?: string
  title?: string
  price?: number
  monthly?: number
}

const Product: FC<IProductProps> = ({ imageUrl, title, price, monthly }) => {
  console.log(imageUrl, title, price, monthly);
  return (
    <StyleProduct>
      <ProductImage imageUrl={imageUrl} />
      <ProductDetail title={title} />
      <ProductLine />
      <ProductPrices price={price} monthly={monthly} />
    </StyleProduct>
  )
}

export default React.memo(Product)
