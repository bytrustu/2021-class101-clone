import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleContentTitleWrap = styled.hgroup<IContentTitleProps>`
  @media (min-width: 768px) and (max-width: 1022px) {
    padding-left: 2rem;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

const StyleContentTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #5f5f61;
`

const StyleContentTitleSkeleton = styled(Skeleton)`
  @media (max-width: 768px) {
    width: 150px !important;
  }
  width: 200px !important;
  height: 40px !important;
`

interface IContentTitleProps {
  title?: string
  titleLoading?: boolean
  padding?: string | number
  margin?: string | number
}

const ContentTitle: FC<IContentTitleProps> = ({ title, titleLoading, margin = '2rem 0', padding = 0 }) => {
  return (
    <StyleContentTitleWrap margin={margin} padding={padding}>
      {titleLoading ? <StyleContentTitleSkeleton /> : <StyleContentTitle>{title}</StyleContentTitle>}
    </StyleContentTitleWrap>
  )
}

export default React.memo(ContentTitle)
