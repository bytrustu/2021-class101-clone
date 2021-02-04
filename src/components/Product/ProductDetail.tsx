import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Skeleton from "react-loading-skeleton";

const StyleProductDetailWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyleProductDetailTitle = styled.h3`
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
`

const StyleSkeletonByProductDetail = styled(Skeleton)`
  height: 17px;
  & + & {
    margin-bottom: 10px;  
  }
`

interface IProductDetailProps {
  title: string | undefined
}

const ProductDetail: FC<IProductDetailProps> = ({ title }) => {
  return (
    <StyleProductDetailWrap>
      {
        title ?
          <StyleProductDetailTitle>{title}</StyleProductDetailTitle>
          :
          <StyleSkeletonByProductDetail count={2}/>
      }
    </StyleProductDetailWrap>
  )
}

export default React.memo(ProductDetail)
