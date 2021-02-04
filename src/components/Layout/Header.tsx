import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../types'

const StyleHeader = styled.header`
  @media (min-width: 1240px) {
    & > div {
      max-width: 1176px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  position: relative;
  height: 80px;
  background-color: #fff;
  box-shadow: #f8f8f9 0px -1px 0px inset;
  cursor: pointer;

  & > div {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const StyleMainLogo = styled.img`
  width: 110px;
`

const StyleCartWrap = styled.div`
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

const StyleCartIcon = styled.img`
  width: 25px;
`

const StyleCartCounter = styled.div`
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

const Header: FC = () => {
  const { cartList } = useSelector((state: IStoreState) => state.product)
  return (
    <StyleHeader>
      <div>
        <Link href="/products">
          <StyleMainLogo src="/images/HeaderLogo.svg" alt="클래스101로고" />
        </Link>
        <Link href="/cart">
          <StyleCartWrap>
            <StyleCartCounter>{cartList.length}</StyleCartCounter>
            <StyleCartIcon src="images/CartIcon.svg" alt="장바구니아이콘" />
          </StyleCartWrap>
        </Link>
      </div>
    </StyleHeader>
  )
}

export default Header
