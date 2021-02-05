import React, { FC } from 'react'
import styled from 'styled-components'

const StyleDropdownFormat = styled.div<{ id?: any }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface IDropdownProps {
  formatId?: string | number
  children?: React.ReactNode
}

const DropdownFormat: FC<IDropdownProps> = ({ formatId = 0, children }) => {
  return (
    <StyleDropdownFormat id={formatId} className="dropdown-option">
      {children}
    </StyleDropdownFormat>
  )
}

export default React.memo(DropdownFormat)
