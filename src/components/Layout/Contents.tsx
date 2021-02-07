import React, { FC } from 'react'
import styled from 'styled-components'

const StyleContentsWrap = styled.section`
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

interface IContentsProps {
  children: React.ReactNode
}

const Contents: FC<IContentsProps> = ({ children }) => {
  return (
    <main>
      <StyleContentsWrap>{children}</StyleContentsWrap>
    </main>
  )
}

export default React.memo(Contents)
