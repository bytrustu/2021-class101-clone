import React, { FC } from 'react'
import styled from 'styled-components'

const StyleCircleIcon = styled.i<StyleCircleIcon>`
  position: relative;
  display: inline-block;
  height: 35px;
  width: 35px;
  outline: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
`

interface StyleCircleIcon {
  background?: string
  width?: string
  height?: string
  border?: string
}

const CircleIcon: FC<StyleCircleIcon> = ({
  background = '#fff',
  width = '35px',
  height = '35px',
  border = '1px solid #ddd',
}) => {
  return <StyleCircleIcon background={background} width={width} height={height} width={width} border={border} />
}

export default React.memo(CircleIcon)
