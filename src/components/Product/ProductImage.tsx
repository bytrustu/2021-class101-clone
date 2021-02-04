import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleProductImageWrap = styled.div`
  border-radius: 4px;
  max-height: 247px;
  overflow: hidden;
`

const StyleProductImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
  cursor: pointer;
  object-fit: cover;
  height: 248px;
  &:hover {
    transform: scale(1.1);
  }
`

const StyleSkeletonByProductImage = styled(Skeleton)`
  height: 248px;
`

interface IProductImageProps {
  imageUrl: string | undefined
}

const ProductImage: FC<IProductImageProps> = ({ imageUrl }) => {
  return (
    <StyleProductImageWrap>
      {imageUrl ? <StyleProductImage src={imageUrl} alt="상품이미지" /> : <StyleSkeletonByProductImage />}
    </StyleProductImageWrap>
  )
}

export default React.memo(ProductImage)
