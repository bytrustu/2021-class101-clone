import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { githubLink } from '../../const'

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #fff;
  box-shadow: #f8f8f9 0px 1px 0px inset;
`

const StyleCopyright = styled.h3`
  color: #222;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: -1px;
`

const Footer: FC = () => {
  return (
    <StyleFooter>
      <Link href={githubLink}>
        <StyleCopyright>CLASS101 ASSIGNMENT</StyleCopyright>
      </Link>
    </StyleFooter>
  )
}

export default React.memo(Footer)
