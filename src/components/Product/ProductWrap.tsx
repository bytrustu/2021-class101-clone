import React, { FC, ReactElement, ReactFragment } from "react";
import styled from 'styled-components'

const StyleProductWrap = styled.section`
  @media (min-width: 768px) and (max-width: 1022px) {
    gap: 40px 25px;
    padding: 0 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10px;
    gap: 40px 10px;
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 25px;
  margin-top: 36px;
`

interface IProductWrapProps {
  children?: ReactElement | ReactElement[] | ReactFragment
}

const ProductWrap: FC<IProductWrapProps> = ({ children }) => {
  return <StyleProductWrap>{children}</StyleProductWrap>
}

export default React.memo(ProductWrap)
