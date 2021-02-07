import React, { FC } from 'react'
import styled from 'styled-components'

const StyleCartTitleWrap = styled.article<ICartTitleWrapProps>`
  @media (min-width: 768px) and (max-width: 1022px) {
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 30px;
  margin-top: 2rem;
`

interface ICartTitleWrapProps {
  spaceBetweenLoading?: boolean
  padding?: string | number
  margin?: string | number
  children?: React.ReactNode
}

const CartTitleWrap: FC<ICartTitleWrapProps> = ({ children }) => (
  <StyleCartTitleWrap>{children}</StyleCartTitleWrap>
)

export default React.memo(CartTitleWrap)
