import React, { FC } from 'react'
import styled from 'styled-components'

export const StyleLabelWrapper = styled.div<ILabelProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`

export interface ILabelProps {
  size?: string
  weight?: string
  padding?: string
  margin?: string
  color?: string
  value?: string | number
  onClickHandle?: React.MouseEventHandler<HTMLElement>
  labelId?: string | number
}

const Label: FC<ILabelProps> = ({
  size = '16px',
  weight = '400',
  padding = '0',
  margin = '0',
  color = '#121212',
  value = '',
  onClickHandle,
  labelId,
}) => {
  return (
    <StyleLabelWrapper
      size={size}
      weight={weight}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClickHandle}
      labelId={labelId}
    >
      {value}
    </StyleLabelWrapper>
  )
}

export default React.memo(Label)
