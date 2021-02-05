import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleContentTitleWrap = styled.div`
  @media (min-width: 768px) and (max-width: 1022px) {
    padding-left: 2rem;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  margin: 2rem 0;
  padding: 0;
`

const StyleContentTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: #5f5f61;
`

const StyleContentTitleSkeleton = styled(Skeleton)`
  width: 200px !important;
  height: 40px !important;
`

interface IContentTitleProps {
  title?: string
  titleLoading?: boolean
}

const ContentTitle: FC<IContentTitleProps> = ({ title, titleLoading }) => {
  return (
    <StyleContentTitleWrap>
      {titleLoading ? <StyleContentTitleSkeleton /> : <StyleContentTitle>{title}</StyleContentTitle>}
    </StyleContentTitleWrap>
  )
}

export default React.memo(ContentTitle)
