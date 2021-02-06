import React, { FC } from 'react'
import styled from 'styled-components'

const StyleContentWrapper = styled.section`
  & + & {
    margin-top: 3rem;
  }
  position: relative;
`

interface ICartWrapProps {
  children: React.ReactNode
}

const ContentWrapper: FC<ICartWrapProps> = ({ children }) => {
  return <StyleContentWrapper>{children}</StyleContentWrapper>
}

export default React.memo(ContentWrapper)
