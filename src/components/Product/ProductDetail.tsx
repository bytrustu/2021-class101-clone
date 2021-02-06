import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleProductDetailWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyleProductDetailTitle = styled.h3`
  @media (max-width: 375px) {
    font-size: 13px;
  }
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  line-height: 17px;
  height: 34px;
  max-height: 34px;
  color: #424242;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  white-space: normal;
`

const StyleSkeletonByProductDetail = styled(Skeleton)`
  height: 17px;
  & + & {
    margin-bottom: 10px;
  }
`

interface IProductDetailProps {
  title?: string
}

const ProductDetail: FC<IProductDetailProps> = ({ title }) => {
  return (
    <StyleProductDetailWrap>
      {title ? <StyleProductDetailTitle>{title}</StyleProductDetailTitle> : <StyleSkeletonByProductDetail count={2} />}
    </StyleProductDetailWrap>
  )
}

export default React.memo(ProductDetail)
