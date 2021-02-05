import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import {
  Button,
  CartListWrap,
  CartSelectedItem,
  ContentSpaceBetween,
  ContentTitle,
  ContentWrapper,
  CouponWrap,
  Divider,
  Dropdown,
  DropdownFormat,
  Label,
  Product,
  PaymentReceipt,
  CartButtonWrap,
  CartTitleWrap,
} from '../components'
import { LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, loadProductReqeust } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { image750Size, productMonthly } from '../const'
import { ICoopon, IStoreState } from '../types'
import { changeToPrice, range } from '../utils'
import { useDropdown } from '../hooks'

const couponsData = [
  {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10,
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000,
  },
]

const indexPage: FC = () => {
  const dispatch = useDispatch()
  const { productItemList, loading: productLoading, success: productSuccess } = useSelector(
    (state: IStoreState) => state.product,
  )

  const loadingState = useMemo(() => productLoading.type.includes(LOAD_PRODUCT_REQUEST), [productLoading.type])

  const [coupons, setCoupons] = useState<ICoopon[]>([])
  const {
    value: dropdownValue,
    setValue: setDropdownValue,
    open: dropdownOpen,
    setOpen: setDropdownOpen,
    onClickHandle: onClickDropdownHandle,
  } = useDropdown(coupons)

  const onClickUnAppliedCouponHandle = useCallback(() => {
    setDropdownValue(null)
  }, [])

  useEffect(() => {
    dispatch(loadProductReqeust(1))
    setCoupons(couponsData)
  }, [])

  useEffect(() => {
    console.log(dropdownValue)
  }, [dropdownValue])

  return (
    <>
      <ContentWrapper>
        <CartTitleWrap>
          <ContentTitle title="장바구니" margin={0} titleLoading={loadingState} />
          <CartButtonWrap>
            <Button value="삭제" buttonLoading={loadingState} />
            <Button value="전체선택" buttonLoading={loadingState} />
          </CartButtonWrap>
        </CartTitleWrap>
        {/*<CartEmpty />*/}
        <CartListWrap>
          {productSuccess.type.includes(LOAD_PRODUCT_SUCCESS) &&
            productItemList.length > 0 &&
            productItemList.map(
              (productItem, index) =>
                index < 3 && (
                  <Product
                    key={productItem.id}
                    id={productItem.id}
                    imageUrl={productItem.coverImage + image750Size}
                    title={productItem.title}
                    price={productItem.price}
                    monthly={productMonthly}
                  />
                ),
            )}
          {loadingState && range(3).map((el: number) => <Product key={el} />)}
        </CartListWrap>
      </ContentWrapper>
      <ContentWrapper>
        <CartSelectedItem cartLoading={loadingState} />
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="쿠폰" titleLoading={loadingState} />
        <CouponWrap>
          <Dropdown
            dropdownLoading={loadingState}
            value={dropdownValue}
            onClickHandle={onClickDropdownHandle}
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            defaultValue={dropdownValue ? dropdownValue.title : '선택해주세요.'}
          >
            {coupons.map((coupon, index) => (
              <DropdownFormat key={index} formatId={index}>
                <Label value={`${coupon.title}`} weight="500" labelId={index} />
                <Label
                  value={
                    (coupon.discountAmount && `${changeToPrice(coupon.discountAmount)}원`) ||
                    (coupon.discountRate && `${coupon.discountRate}%`)
                  }
                  size="14px"
                  color="#727272"
                  weight="500"
                  labelId={index}
                />
              </DropdownFormat>
            ))}
          </Dropdown>
          <div className="coupon-wrap">
            <Button value="미적용" onClickHandle={onClickUnAppliedCouponHandle} buttonLoading={loadingState} />
            <Button value="최적적용" buttonLoading={loadingState} />
          </div>
        </CouponWrap>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="결제 금액" titleLoading={loadingState} />
        <PaymentReceipt>
          <ContentSpaceBetween>
            <Label color="#858a8d" size="14px" value="총 상품 금액" labelLoading={loadingState} />
            <Label color="#858a8d" size="14px" value="282,200원" labelLoading={loadingState} />
          </ContentSpaceBetween>
          <ContentSpaceBetween>
            <Label color="#858a8d" size="14px" value="상품 할인 금액" labelLoading={loadingState} />
            <Label color="#858a8d" size="14px" value="- 282,200원" labelLoading={loadingState} />
          </ContentSpaceBetween>
          <Divider style={{ margin: '15px 0' }} />
          <ContentSpaceBetween>
            <Label color="#1b1c1d" size="18px" weight="600" value="최종 가격" labelLoading={loadingState} />
            <Label
              color="#858a8d"
              size="14px"
              decoration="line-through"
              value="282,200원"
              labelLoading={loadingState}
            />
          </ContentSpaceBetween>
          <ContentSpaceBetween>
            <Label value="" />
            <Label color="#1b1c1d" size="18px" weight="600" value="252,200원" labelLoading={loadingState} />
          </ContentSpaceBetween>
          <ContentSpaceBetween margin="40px 0 0">
            <Label value="" />
            <Button value="결제하기" buttonLoading={loadingState} />
          </ContentSpaceBetween>
        </PaymentReceipt>
      </ContentWrapper>
    </>
  )
}

export default indexPage
