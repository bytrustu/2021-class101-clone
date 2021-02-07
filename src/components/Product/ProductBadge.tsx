import React, { FC } from 'react'
import styled from 'styled-components'

const StyleProductBadge = styled.span<IProductBadgeProps>`
  @media (max-width: 375px) {
    font-size: 10px;
    padding: 4px 5px;
  }
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${(props) => props.color};
  padding: 6px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 11px;
  color: #fff;
  font-weight: bold;
  letter-spacing: normal;
`

const StyleExcelamation = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`

interface IProductBadgeProps {
  text?: string
  color?: string
}

const ProductBadge: FC<IProductBadgeProps> = ({ text, color }) => {
  return (
    <StyleProductBadge color={color}>
      <StyleExcelamation src="/images/Exclamation.svg" alt="추천아이콘" />
      {text}
    </StyleProductBadge>
  )
}

export default React.memo(ProductBadge)
