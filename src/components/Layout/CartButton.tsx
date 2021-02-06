import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyleCartButtonWrap = styled.div`
  @media (min-width: 768px) {
    right: 3vw;
  }

  position: absolute;
  right: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  box-shadow: #ddd 0px -1px 0px inset;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s 0.2s ease-out;

  &:hover {
    background-color: #fcfcfc;
  }
`

const StyleCartButtonIcon = styled.img`
  width: 25px;
`

const StyleCartButtonCounter = styled.div`
  position: absolute;
  top: 5px;
  right: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3869da;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
`

interface ICartButton {
  link: string
  imageUrl: string
  cartList?: string[]
}

const CartButton: FC<ICartButton> = ({ link, imageUrl, cartList }) => {
  return (
    <>
      <Link href={link}>
        <StyleCartButtonWrap>
          <StyleCartButtonCounter>{cartList ? cartList.length : 0}</StyleCartButtonCounter>
          <StyleCartButtonIcon src={imageUrl} alt="장바구니 아이콘" />
        </StyleCartButtonWrap>
      </Link>
    </>
  )
}

export default React.memo(CartButton)
