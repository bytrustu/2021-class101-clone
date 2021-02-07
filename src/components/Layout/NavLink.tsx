import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyleNavLinkWrap = styled.nav`
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

const StyleNavLink = styled.img`
  width: 25px;
`

const StyleNavLinkCounter = styled.div`
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

interface INavLink {
  link: string
  imageUrl: string
  dataList?: string[]
}

const NavLink: FC<INavLink> = ({ link, imageUrl, dataList }) => {
  return (
    <>
      <Link href={link}>
        <StyleNavLinkWrap>
          <StyleNavLinkCounter>{dataList ? dataList.length : 0}</StyleNavLinkCounter>
          <StyleNavLink src={imageUrl} alt="링크 아이콘" />
        </StyleNavLinkWrap>
      </Link>
    </>
  )
}

export default React.memo(NavLink)
