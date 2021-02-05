import React, { FC, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

const StyleCartListWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1022px) {
    gap: 40px 25px;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
    gap: 40px 10px;
  }

  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 25px;
  margin-top: 36px;
`

interface ICartListWrapProps {
  children?: ReactElement | ReactElement[] | ReactFragment
}

const CartListWrap: FC<ICartListWrapProps> = ({ children }) => {
  return <StyleCartListWrapper>{children}</StyleCartListWrapper>
}

export default React.memo(CartListWrap)
