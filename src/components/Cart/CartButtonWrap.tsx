import React, { FC } from 'react'
import styled from 'styled-components'

const StyleCartButtonWrap = styled.div`
  @media (min-width: 768px) and (max-width: 1022px) {
    display: inline-block;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px 0 32px;
    margin-top: 1rem;
    .button {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
  display: inline-block;
`
interface ICartButtonWrap {
  children?: React.ReactNode
}

const CartButtonWrap: FC<ICartButtonWrap> = ({ children }) => {
  return <StyleCartButtonWrap>{children}</StyleCartButtonWrap>
}

export default React.memo(CartButtonWrap)
