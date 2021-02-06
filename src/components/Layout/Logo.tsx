import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyleLogo = styled.img`
  width: 110px;
  cursor: pointer;
`

interface ILogo {
  link: string
  imageUrl: string
}

const Logo: FC<ILogo> = ({ link, imageUrl }) => {
  return (
    <Link href={link}>
      <StyleLogo src={imageUrl} alt="클래스101로고" />
    </Link>
  )
}

export default React.memo(Logo)
