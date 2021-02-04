import React, { FC } from 'react'
import styled from 'styled-components'

const StyleProductLine = styled.div`
  height: 2px;
  box-shadow: rgb(248 248 249) 0px -1px 0px inset;
  margin: 6px 0;
`

const ProductLine: FC = () => {
  return <StyleProductLine />
}

export default React.memo(ProductLine)
