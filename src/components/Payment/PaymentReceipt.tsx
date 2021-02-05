import React, { FC } from 'react'
import styled from 'styled-components'

const StylePaymentReceipt = styled.section`
  @media (min-width: 768px) and (max-width: 1022px) {
    
  }

  @media (max-width: 768px) {
    & .button {
      width: 100%;
      
      button {
        width: 100%;  
      }

      .react-loading-skeleton {
        width: 100% !important;
        margin: 0;
      }
    
    }
`

interface IPaymentReceiptProps {
  children?: React.ReactNode
}

const PaymentReceipt: FC<IPaymentReceiptProps> = ({ children }) => {
  return (
    <>
      <StylePaymentReceipt>{children}</StylePaymentReceipt>
    </>
  )
}

export default React.memo(PaymentReceipt)
