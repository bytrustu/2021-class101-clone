import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

const StyleAppLayout = styled.div`
  min-width: 320px !important;
  width: 100%;
`

interface IAppLayoutProps {
  children: ReactElement | ReactElement[]
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return <StyleAppLayout>{children}</StyleAppLayout>
}

export default AppLayout
