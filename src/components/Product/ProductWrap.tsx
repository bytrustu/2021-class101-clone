import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const StyleProductWrap = styled.section`
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 25px;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 25px;
  margin-top: 36px;
`

interface IProductWrapProps {
  children?: ReactElement | ReactElement[]
}

const ProductWrap: FC<IProductWrapProps> = ({ children }) => {
  return <StyleProductWrap>{children}</StyleProductWrap>
}

export default React.memo(ProductWrap)
