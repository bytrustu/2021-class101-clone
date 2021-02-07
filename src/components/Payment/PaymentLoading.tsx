import React, { FC } from 'react'
import styled from 'styled-components'

const StylePaymentLoading = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999 !important;

  span {
    @media (max-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 375px) {
      font-size: 32px;
    }
    display: inline-block;
    margin: 0 -0.03em;
    animation: loading 1s infinite;
    font-size: 48px;
    font-weight: 800;
    z-index: 1000000;
    color: #fff;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
    color: #eee;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
    color: #dddd;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
    color: #ccc;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
    color: #bbb;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
    color: #fff;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
    color: #fff;
  }
  span:nth-child(8) {
    animation-delay: 0.7s;
    color: #fff;
  }
  @keyframes loading {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
  }
`

const PaymentLoading: FC = () => {
  return (
    <>
      <div className="ant-modal-mask" style={{ zIndex: 1000, backgroundColor: '#00000096' }} />
      <StylePaymentLoading>
        <span>C</span>
        <span>L</span>
        <span>A</span>
        <span>S</span>
        <span>S</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
      </StylePaymentLoading>
    </>
  )
}

export default React.memo(PaymentLoading)
