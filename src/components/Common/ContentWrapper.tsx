import React, { FC, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

interface ICartWrapProps {
  children?: ReactElement | ReactElement[] | ReactFragment
}

const StyleContentWrapper = styled.section`
  & + & {
    margin-top: 3rem;
  }
  position: relative;
`

const ContentWrapper: FC<ICartWrapProps> = ({ children }) => {
  return <StyleContentWrapper>{children}</StyleContentWrapper>
}

export default React.memo(ContentWrapper)
