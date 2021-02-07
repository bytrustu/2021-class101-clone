import React, { FC } from 'react'
import styled from 'styled-components'

const StyleCartEmptyItemWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const StyleCartEmptyItem = styled.article`
  @media (min-width: 768px) and (max-width: 1022px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleCartEmptyImage = styled.img`
  width: 80%;
`

const StyleCartEmptyNotice = styled.h4`
  @media (min-width: 768px) and (max-width: 1022px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  color: #e2e3e7;
`

const CartEmpty: FC = () => {
  return (
    <StyleCartEmptyItemWrap>
      <StyleCartEmptyItem>
        <StyleCartEmptyImage src="/images/EmptyPay.png" />
        <StyleCartEmptyNotice>장바구니에 담은 클래스가 없습니다.</StyleCartEmptyNotice>
      </StyleCartEmptyItem>
    </StyleCartEmptyItemWrap>
  )
}

export default React.memo(CartEmpty)
