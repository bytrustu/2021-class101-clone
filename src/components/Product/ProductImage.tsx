import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Checkbox, ProductBadge, RecommendMotion, CloseButton } from '../../components'
import { TUseCheckbox } from '../../types'

const StyleProductImageWrap = styled.div`
  @media (max-width: 768px) {
    max-height: 200px;
  }
  max-height: 250px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;

  & > div {
    display: block;
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
  id?: string
  imageUrl?: string
  badge?: string
  important?: boolean
  checkboxState?: ReturnType<TUseCheckbox>
}

const ProductImage: FC<IProductImageProps> = ({ id, imageUrl, badge, important, checkboxState }) => {
  return (
    <StyleProductImageWrap>
      {important && <RecommendMotion />}
      <div>
        {imageUrl ? (
          <>
            <StyleProductImage src={imageUrl} alt="상품이미지" />
            {badge && <ProductBadge color="#000" text={badge} />}
          </>
        ) : (
          <StyleSkeletonByProductImage />
        )}
        {checkboxState ? (
          <>
            <Checkbox
              checked={checkboxState.form && checkboxState.form.includes(id)}
              onChange={checkboxState && checkboxState.onChangeSingle}
              id={id}
              name={id}
            />
            <CloseButton />
          </>
        ) : (
          <></>
        )}
      </div>
    </StyleProductImageWrap>
  )
}

export default React.memo(ProductImage)
