import React, { FC } from 'react'
import styled from 'styled-components'
import { CircleIcon } from '../../components'

const StyleCloseButton = styled.div`
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const CrossIcon = styled.img`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface ICloseButton {
  onClickHandle?: React.MouseEventHandler<HTMLElement>
}

const CloseButton: FC<ICloseButton> = ({ onClickHandle }) => {
  return (
    <StyleCloseButton>
      <CircleIcon />
      <CrossIcon src="/images/Cross.svg" alt="장바구니 제거 아이콘" />
    </StyleCloseButton>
  )
}

export default React.memo(CloseButton)
