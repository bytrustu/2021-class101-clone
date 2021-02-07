import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const StyleLabelWrapper = styled.span<ILabelProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decoration};
`

const StyleLabelSkeleton = styled(Skeleton)`
  width: 100px !important;
  height: 30px;
`

export interface ILabelProps {
  size?: string
  weight?: string
  padding?: string
  margin?: string
  color?: string
  decoration?: string
  value?: string | number
  onClickHandle?: React.MouseEventHandler<HTMLElement>
  labelId?: string | number
  labelLoading?: boolean
}

const Label: FC<ILabelProps> = ({
  size = '16px',
  weight = '400',
  padding = '0',
  margin = '0',
  color = '#121212',
  decoration = 'auto',
  value = '',
  onClickHandle,
  labelId,
  labelLoading = false,
}) => {
  return (
    <StyleLabelWrapper
      size={size}
      weight={weight}
      padding={padding}
      margin={margin}
      color={color}
      decoration={decoration}
      onClick={onClickHandle}
      labelId={labelId}
    >
      {labelLoading ? <StyleLabelSkeleton /> : value}
    </StyleLabelWrapper>
  )
}

export default React.memo(Label)
