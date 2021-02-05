import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { ProductBadge, ProductRecommendMotion } from '../../components'
import Image from 'next/image'

const StyleProductImageWrap = styled.div<IProductImageProps>`
  @media (max-width: 768px) {
    max-height: 200px;
  }
  max-height: 250px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;

  & > div {
    display: block;
    position: relative;
    overflow: hidden;
    padding-top: 75%;
  }
`

const StyleProductImage = styled.img`
  @media (min-width: 768px) {
    height: 248px;
  }
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
  cursor: pointer;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`

const StyleSkeletonByProductImage = styled(Skeleton)`
  height: 250px;
  top: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
`

interface IProductImageProps {
  imageUrl?: string
  recommend?: boolean
}

const ProductImage: FC<IProductImageProps> = ({ imageUrl, recommend }) => {
  return (
    <StyleProductImageWrap recommend={recommend}>
      {recommend && <ProductRecommendMotion />}
      <div>
        {imageUrl ? (
          <>
            <StyleProductImage src={imageUrl} alt="상품이미지" />
            {recommend && <ProductBadge color="#000" text="CLASS101 추천" />}
          </>
        ) : (
          <StyleSkeletonByProductImage />
        )}
      </div>
    </StyleProductImageWrap>
  )
}

export default React.memo(ProductImage)
