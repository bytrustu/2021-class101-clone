import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleProductImageWrap = styled.div`
  @media (max-width: 768px) {
    max-height: 200px;
  }
  max-height: 250px;
  overflow: hidden;
  border-radius: 4px;
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
  imageUrl: string | undefined
}

const ProductImage: FC<IProductImageProps> = ({ imageUrl }) => {
  return (
    <StyleProductImageWrap>
    <div>
      {imageUrl ? <StyleProductImage src={imageUrl} alt="상품이미지" /> : <StyleSkeletonByProductImage />}
    </div>
    </StyleProductImageWrap>
  )
}

export default React.memo(ProductImage)
