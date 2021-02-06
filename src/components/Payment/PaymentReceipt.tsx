import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Button, ContentSpaceBetween, Divider, Label } from '../../components'
import { ICoupon, IPurchaseItem } from '../../types'
import { calcMonthlyPrice, changeToPrice } from '../../utils'

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

const StyleTotalCostWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

interface IPaymentReceiptProps {
  paymentLoading: boolean
  discountPrice: number
  totalPrice: number
}

const PaymentReceipt: FC<IPaymentReceiptProps> = ({ paymentLoading, discountPrice, totalPrice }) => {
  return (
    <>
      <StylePaymentReceipt>
        <ContentSpaceBetween>
          <Label color="#858a8d" size="14px" value="총 상품 금액" labelLoading={paymentLoading} />
          <Label
            color="#858a8d"
            size="14px"
            value={`${changeToPrice(totalPrice)}원`}
            labelLoading={paymentLoading}
          />
        </ContentSpaceBetween>
        <ContentSpaceBetween>
          <Label color="#858a8d" size="14px" value="상품 할인 금액" labelLoading={paymentLoading} />
          <Label
            color="#858a8d"
            size="14px"
            value={discountPrice === 0 ? '0원' : `${changeToPrice(discountPrice)}원`}
            labelLoading={paymentLoading}
          />
        </ContentSpaceBetween>
        <Divider style={{ margin: '15px 0' }} />
        <ContentSpaceBetween>
          <Label color="#1b1c1d" size="18px" weight="600" value="최종 가격" labelLoading={paymentLoading} />
          <StyleTotalCostWrap>
            {discountPrice !== 0 && (
              <Label
                color="#858a8d"
                size="14px"
                decoration="line-through"
                value={`${changeToPrice(totalPrice)}원`}
                labelLoading={paymentLoading}
              />
            )}
            <Label
              color="#1b1c1d"
              size="18px"
              weight="600"
              value={changeToPrice(totalPrice - discountPrice)}
              labelLoading={paymentLoading}
            />
          </StyleTotalCostWrap>
        </ContentSpaceBetween>

        <ContentSpaceBetween margin="40px 0 0">
          <Label value="" />
          <Button value="결제하기" buttonLoading={paymentLoading} />
        </ContentSpaceBetween>
      </StylePaymentReceipt>
    </>
  )
}

export default React.memo(PaymentReceipt)
