import React, { FC } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../types'
import { NavLink, Logo } from '../../components'

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

  & > div {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const Header: FC = () => {
  const { cartList } = useSelector((state: IStoreState) => state.cart)
  return (
    <StyleHeader>
      <div>
        <Logo link="/products" imageUrl="/images/HeaderLogo.svg" />
        <NavLink link="/cart" imageUrl="/images/CartIcon.svg" dataList={cartList} />
      </div>
    </StyleHeader>
  )
}

export default React.memo(Header)
