import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyleHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
`

const StyleMainLogo = styled.img`
  width: 110px;
`

const StyleCartWrap = styled.div`
  @media (min-width: 1024px) {
    right: 15vh;
  }

  position: absolute;
  right: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid #eee5ee;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s 0.2s ease-out;

  &:hover {
    background-color: #fcfcfc;
  }
`

const StyleCartIcon = styled.img`
  width: 25px;
`

const StyleCartCount = styled.div`
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
  background-color: #444;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
`

const Header: FC = () => {
  return (
    <StyleHeader>
      <Link href="/products">
        <StyleMainLogo src="/images/HeaderLogo.svg" alt="클래스101로고" />
      </Link>
      <Link href="/cart">
        <StyleCartWrap>
          <StyleCartCount>3</StyleCartCount>
          <StyleCartIcon src="images/CartIcon.svg" alt="장바구니아이콘" />
        </StyleCartWrap>
      </Link>
    </StyleHeader>
  )
}

export default Header