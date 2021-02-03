import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactElement | ReactElement[]
}

const StyleContentsWrap = styled.div`
  @media (min-width: 1240px) {
    max-width: 1176px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  padding-bottom: 80px;
`

const Contents: FC<IProps> = ({ children }) => {
  return (
    <main>
      <StyleContentsWrap>{children}</StyleContentsWrap>
    </main>
  )
}

export default Contents
