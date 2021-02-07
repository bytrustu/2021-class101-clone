import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleContentSpaceBetween = styled.article<IContentSpaceBetweenProps>`
  @media (min-width: 768px) and (max-width: 1022px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 30px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

const StyleContentSpaceBetweenSkeleton = styled(Skeleton)`
  width: 200px !important;
  height: 40px !important;
`

interface IContentSpaceBetweenProps {
  spaceBetweenLoading?: boolean
  padding?: string | number
  margin?: string | number
  children?: React.ReactNode
}

const ContentSpaceBetween: FC<IContentSpaceBetweenProps> = ({
  spaceBetweenLoading,
  margin = 0,
  padding = 0,
  children,
}) => {
  return spaceBetweenLoading ? (
    <StyleContentSpaceBetweenSkeleton />
  ) : (
    <StyleContentSpaceBetween padding={padding} margin={margin}>
      {children}
    </StyleContentSpaceBetween>
  )
}

export default React.memo(ContentSpaceBetween)
