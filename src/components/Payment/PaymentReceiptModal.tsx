import React, { FC } from 'react'
import styled from 'styled-components'
import { Modal } from 'antd'
import { IPayment } from '../../types'
import { Button, ContentSpaceBetween, ContentTitle, ContentWrapper, Divider, PaymentReceipt } from '../../components'
import { StyleCartSelectedItem, StyleClassCount, StyleClassTitle, StyleMultiplyIcon } from '../Cart/CartSelectedItem'

const StylePaymentReceiptModal = styled(Modal)`
  
  @media (max-width: 768px) {
    left: calc(50% - 15rem) !important;
    width: 30rem !important;
  }
  @media (max-width: 500px) {
    left: calc(50% - 11rem) !important;
    width: 22rem !important;
  }

  @media (max-width: 320px) {
    left: calc(50% - 9.4rem) !important;
    top: 5% !important;
    width: 22rem !important;
  }
  
  position: absolute !important;
  width: 50rem !important;
  top: 15% !important;
  left: calc(50% - 25rem) !important;
  z-index: 1000;
  
  .ant-modal-body {
    @media (max-width: 768px) {
      padding: 3rem 3rem 2rem 3rem;
    }
    padding: 0;
    height: auto;
    max-height: 50rem;
    background: #f9f9f9;
    padding: 3rem 7rem 2rem 7rem;
  }
  .ant-modal-footer {
    background-color: #fff;
  }
  .ant-modal-footer {
    display: none;
    border: unset;
  }
}

@keyframes display {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`

interface IPaymentReceiptModalProps extends IPayment {
  visible: boolean
  onClose: React.MouseEventHandler<HTMLElement>
  checkboxState?: string[]
}

const PaymentReceiptModal: FC<IPaymentReceiptModalProps> = ({
  totalPrice,
  discountPrice,
  products,
  visible,
  onClose,
}) => {
  return (
    <StylePaymentReceiptModal
      centered
      visible={visible}
      closable={false}
      cancelText="닫기"
      cancelButtonProps={{ style: { display: 'hidden' } }}
      onCancel={onClose}
    >
      <ContentTitle title="결제 완료" />
      <ContentWrapper>
        {products &&
          products.map((product) => (
            <StyleCartSelectedItem>
              <StyleClassTitle>{product.title}</StyleClassTitle>
              <StyleMultiplyIcon src="/images/Cross.svg" alt="곱하기 아이콘" />
              <StyleClassCount>{product.count}</StyleClassCount>
            </StyleCartSelectedItem>
          ))}
      </ContentWrapper>

      <ContentWrapper>
        <PaymentReceipt
          paymentLoading={false}
          discountPrice={discountPrice as number}
          totalPrice={totalPrice as number}
        />
      </ContentWrapper>
      <Divider />
      <ContentSpaceBetween margin={0} padding={0}>
        <span />
        <Button value="닫기" onClickHandle={onClose} />
      </ContentSpaceBetween>
    </StylePaymentReceiptModal>
  )
}

export default React.memo(PaymentReceiptModal)
