import React, { FC } from 'react'
import styled from 'styled-components'
import { Label } from '../../components'
import Skeleton from 'react-loading-skeleton'
import { DownOutlined } from '@ant-design/icons'

export interface IDropdownProps {
  dropdownLoading?: boolean
  value?: any
  onClickHandle?: React.MouseEventHandler<HTMLElement>
  open?: boolean
  setOpen?: () => void
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  defaultValue?: string
}

const StyleDropdownWrapper = styled.div<IDropdownProps>`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 400px;
  position: relative;
  cursor: pointer;
`

const StyleDropdownDefault = styled.div<IDropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c2c2c2;
  padding: 8px 12px;
`

const StyleDropdownIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyleDropdownOption = styled.div<IDropdownProps>`
  width: 100%;
  background-color: #fff;
  z-index: ${(props) => (props.open ? '10' : '-10')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  position: absolute;
  top: ${(props) => (props.open ? '42px' : '0')};
  left: 0;
  padding: 4px 12px;
  border: 1px solid #c2c2c2;
  border-top: none;
  .dropdown-option {
    padding: 12px 0;
    border-bottom: 1px solid #d2d2d2;
    &:last-child {
      border: none;
    }
  }
  transition: all 0.2s ease-in-out;
`

const StyleDropdownSkeleton = styled(Skeleton)`
  width: 400px !important;
  height: 45px;
`

const Dropdown: FC<IDropdownProps> = ({
  dropdownLoading,
  onClickHandle,
  open = false,
  setOpen,
  children,
  disabled = false,
  className,
  defaultValue = '선택해주세요',
}) => {
  return dropdownLoading ? (
    <StyleDropdownSkeleton />
  ) : (
    <StyleDropdownWrapper onClick={setOpen} disabled={disabled} className={className}>
      <StyleDropdownDefault>
        <Label value={defaultValue} weight="500" />
        <StyleDropdownIcon>
          <DownOutlined />
        </StyleDropdownIcon>
      </StyleDropdownDefault>
      <StyleDropdownOption onClick={onClickHandle} open={open} className="dropdown-option">
        {children}
      </StyleDropdownOption>
    </StyleDropdownWrapper>
  )
}

export default React.memo(Dropdown)
