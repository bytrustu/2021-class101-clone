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
  CartEmpty,
} from '../components'
import { LOAD_PURCHASE_REQUEST, LOAD_PURCHASE_SUCCESS, loadLocalCart, loadPurchaseReqeust } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { image750Size, productMonthly } from '../const'
import { ICoopon, IProductItem, IStoreState } from '../types'
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

  const { cartList, purchaseList, loading: cartLoading, success: cartSuccess } = useSelector(
    (state: IStoreState) => state.cart,
  )

  const cartLoadingState = useMemo(() => cartLoading.type.includes(LOAD_PURCHASE_REQUEST), [cartLoading.type])
  const cartSuccessState = useMemo(() => cartSuccess.type.includes(LOAD_PURCHASE_SUCCESS), [cartSuccess.type])

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
    dispatch(loadLocalCart())
    setCoupons(couponsData)
  }, [])

  useEffect(() => {
    dispatch(loadPurchaseReqeust(cartList))
  }, [cartList])

  return (
    <>
      <ContentWrapper>
        <CartTitleWrap>
          <ContentTitle title="장바구니" margin={0} titleLoading={cartLoadingState} />
          {cartLoadingState ? (
            <CartButtonWrap>
              <Button value="삭제" buttonLoading={cartLoadingState} />
              <Button value="전체선택" buttonLoading={cartLoadingState} />
            </CartButtonWrap>
          ) : cartSuccessState && purchaseList.length > 0 ? (
            <CartButtonWrap>
              <Button value="삭제" buttonLoading={cartLoadingState} />
              <Button value="전체선택" buttonLoading={cartLoadingState} />
            </CartButtonWrap>
          ) : (
            <></>
          )}
        </CartTitleWrap>
        {cartSuccessState && purchaseList.length === 0 && <CartEmpty />}
        <CartListWrap>
          {cartSuccessState &&
            purchaseList &&
            purchaseList.length > 0 &&
            purchaseList.map((purchaseItem: IProductItem) => {
              return (
                <Product
                  key={purchaseItem.id}
                  id={purchaseItem.id}
                  imageUrl={purchaseItem.coverImage + image750Size}
                  title={purchaseItem.title}
                  price={purchaseItem.price}
                  monthly={productMonthly}
                  badge={purchaseItem.availableCoupon === false ? '쿠폰적용불가' : undefined}
                  isCounter={true}
                />
              )
            })}
          {cartLoadingState && range(3).map((el: number) => <Product key={el} />)}
        </CartListWrap>
      </ContentWrapper>

      <ContentWrapper>
        <CartSelectedItem cartLoading={cartLoadingState} cartSelectedData={purchaseList} />
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="쿠폰" titleLoading={cartLoadingState} />
        <CouponWrap>
          <Dropdown
            dropdownLoading={cartLoadingState}
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
            <Button value="미적용" onClickHandle={onClickUnAppliedCouponHandle} buttonLoading={cartLoadingState} />
            <Button value="최적적용" buttonLoading={cartLoadingState} />
          </div>
        </CouponWrap>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="결제 금액" titleLoading={cartLoadingState} />
        <PaymentReceipt>
          <ContentSpaceBetween>
            <Label color="#858a8d" size="14px" value="총 상품 금액" labelLoading={cartLoadingState} />
            <Label color="#858a8d" size="14px" value="282,200원" labelLoading={cartLoadingState} />
          </ContentSpaceBetween>
          <ContentSpaceBetween>
            <Label color="#858a8d" size="14px" value="상품 할인 금액" labelLoading={cartLoadingState} />
            <Label color="#858a8d" size="14px" value="- 282,200원" labelLoading={cartLoadingState} />
          </ContentSpaceBetween>
          <Divider style={{ margin: '15px 0' }} />
          <ContentSpaceBetween>
            <Label color="#1b1c1d" size="18px" weight="600" value="최종 가격" labelLoading={cartLoadingState} />
            <Label
              color="#858a8d"
              size="14px"
              decoration="line-through"
              value="282,200원"
              labelLoading={cartLoadingState}
            />
          </ContentSpaceBetween>
          <ContentSpaceBetween>
            <Label value="" />
            <Label color="#1b1c1d" size="18px" weight="600" value="252,200원" labelLoading={cartLoadingState} />
          </ContentSpaceBetween>
          <ContentSpaceBetween margin="40px 0 0">
            <Label value="" />
            <Button value="결제하기" buttonLoading={cartLoadingState} />
          </ContentSpaceBetween>
        </PaymentReceipt>
      </ContentWrapper>
    </>
  )
}

export default indexPage
