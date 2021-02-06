import React, { FC } from 'react'
import styled from 'styled-components'

const StyleCounterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f2f2f2;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
`

const StyleCounterValue = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyleCounterButton = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`

const StyleSymbol = styled.img`
  width: 15px;
  height: 15px;
`

interface ICounterProps {
  value?: number
  countUp?: () => void
  countDown?: () => void
}

const Counter: FC<ICounterProps> = ({ value, countUp, countDown }) => {
  return (
    <StyleCounterWrapper>
      <StyleCounterButton onClick={countDown}>
        <StyleSymbol src="/images/Minus.svg" alt="마이너스 기호" />
      </StyleCounterButton>
      <StyleCounterValue>{value}</StyleCounterValue>
      <StyleCounterButton onClick={countUp}>
        <StyleSymbol src="/images/Plus.svg" alt="플러스 기호" />
      </StyleCounterButton>
    </StyleCounterWrapper>
  )
}

export default React.memo(Counter)
