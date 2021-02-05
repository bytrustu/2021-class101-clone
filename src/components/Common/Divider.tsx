import React, { FC } from 'react'
import styled from 'styled-components'

const StyleDivider = styled.div<IDividerProps>`
  height: 2px;
  box-shadow: ${(props) => props.color} 0px -1px 0px inset;
  margin: 6px 0;
`

interface IDividerProps {
  color?: string
  style?: { [k: string]: string }
}

const Divider: FC<IDividerProps> = ({ color = '#f8f8f9', style }) => {
  return <StyleDivider color={color} style={style} />
}

export default React.memo(Divider)
