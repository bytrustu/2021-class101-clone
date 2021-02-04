import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const StyleProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

interface IProductWrapProps {
  children?: ReactElement | ReactElement[]
}

const ProductWrap: FC<IProductWrapProps> = ({ children }) => {
  return <StyleProduct>{children}</StyleProduct>
}

export default React.memo(ProductWrap)
