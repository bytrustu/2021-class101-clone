import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleButtonWrapper = styled.div`
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
`

const StyleButton = styled.button<IButtonProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  min-width: 100px;
  min-height: 43px;
  background-color: #fff;
  border: 1px solid #c2c2c2;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
`

const StyleButtonSkeleton = styled(Skeleton)`
  width: 100px !important;
  height: 43px;
`

export interface IButtonProps {
  size?: string
  weight?: string
  padding?: string
  margin?: string
  color?: string
  value?: string | number
  buttonLoading?: boolean
  onClickHandle?: React.MouseEventHandler<HTMLElement>
  labelId?: string | number
  children?: React.ReactNode
}

const Button: FC<IButtonProps> = ({
  size = '16px',
  weight = '400',
  padding = '0',
  margin = '0',
  color = '#121212',
  value = '',
  buttonLoading = false,
  onClickHandle,
  children,
}) => (
  <StyleButtonWrapper className="button">
    {buttonLoading ? (
      <StyleButtonSkeleton />
    ) : (
      <StyleButton size={size} weight={weight} padding={padding} margin={margin} color={color} onClick={onClickHandle}>
        {value}
        {children}
      </StyleButton>
    )}
  </StyleButtonWrapper>
)

export default React.memo(Button)
