import React, { FC } from 'react'
import styled from 'styled-components'

const StyleBlockPage = styled.div`
  z-index: 10000;
  overflow: hidden;
`

export interface IBlockPageProps {
  view: boolean
}

const BlockPage: FC<IBlockPageProps> = ({ view }) => {
  return <>{view && <StyleBlockPage className="ant-modal-mask" />}</>
}

export default React.memo(BlockPage)
