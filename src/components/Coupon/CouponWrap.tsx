import React, { FC, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

const StyleCouponWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1022px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    * + *:not('img') {
      margin-top: 10px;
    }

    & .button {
      margin: 10px 0 0;
      width: 100%;
      
      .react-loading-skeleton {
        width: 100% !important;
        margin: 0;
      }
      
      button {
        width: 100%;
      }
      
      & + & {
        margin-left: 10px;
      }
    }

    .coupon-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .coupon-wrap {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

interface ICouponWrapProps {
  children?: React.ReactNode
}

const CouponWrap: FC<ICouponWrapProps> = ({ children }) => {
  return <StyleCouponWrapper>{children}</StyleCouponWrapper>
}

export default React.memo(CouponWrap)
