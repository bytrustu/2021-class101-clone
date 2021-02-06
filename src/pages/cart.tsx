import React, { FC, useCallback, useEffect, useMemo } from 'react'
import {
  Button,
  CartListWrap,
  CartSelectedItem,
  ContentTitle,
  ContentWrapper,
  CouponWrap,
  Dropdown,
  DropdownFormat,
  Label,
  Product,
  PaymentReceipt,
  CartButtonWrap,
  CartTitleWrap,
  CartEmpty,
} from '../components'
import {
  LOAD_PURCHASE_REQUEST,
  LOAD_PURCHASE_SUCCESS,
  loadCouponReqeust,
  loadLocalCart,
  loadPurchaseReqeust,
} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { image750Size, productMonthly } from '../const'
import { IProductItem, IStoreState } from '../types'
import { changeToPrice, range } from '../utils'
import { useCheckbox, useDropdown } from '../hooks'
import { discountCost, sumTotalCost, bestPricingByCoupon } from '../utils/calculatorPrice'

const cartPage: FC = () => {
  const dispatch = useDispatch()

  const { cartList, purchaseList, loading: cartLoading, success: cartSuccess, couponList } = useSelector(
    (state: IStoreState) => state.cart,
  )

  const checkboxState = useCheckbox(purchaseList.length)
  const {
    value: dropdownValue,
    setValue: setDropdownValue,
    open: dropdownOpen,
    setOpen: setDropdownOpen,
    onClickHandle: onClickDropdownHandle,
  } = useDropdown(couponList)

  const onClickUnAppliedCouponHandle = useCallback(() => {
    setDropdownValue(null)
  }, [])
  const onClickBestPriceHandle = useCallback(() => {
    setDropdownValue(bestPricingByCoupon(purchaseList, couponList, checkboxState.form))
  }, [checkboxState.form])

  const cartLoadingMemo = useMemo(() => cartLoading.type.includes(LOAD_PURCHASE_REQUEST), [cartLoading.type])
  const cartSuccessMemo = useMemo(() => cartSuccess.type.includes(LOAD_PURCHASE_SUCCESS), [cartSuccess.type])
  const purchaseIdListMemo = useMemo(() => purchaseList.map((product) => product.id), [purchaseList])
  const discountPrice = useMemo(() => discountCost(purchaseList, dropdownValue, checkboxState.form), [
    purchaseList,
    dropdownValue,
    checkboxState.form,
  ])
  const totalPrice = useMemo(() => sumTotalCost(purchaseList, checkboxState.form), [purchaseList, checkboxState.form])

  useEffect(() => {
    dispatch(loadLocalCart())
    dispatch(loadCouponReqeust())
  }, [])
  useEffect(() => {
    dispatch(loadPurchaseReqeust(cartList))
  }, [cartList])
  useEffect(() => {
    checkboxState.checkAllCheckbox(purchaseIdListMemo)
  }, [cartSuccessMemo])

  return (
    <>
      <ContentWrapper>
        <CartTitleWrap>
          <ContentTitle title="장바구니" margin={0} titleLoading={cartLoadingMemo} />
          {cartLoadingMemo ? (
            <CartButtonWrap>
              <Button value="삭제" buttonLoading={cartLoadingMemo} />
              <Button
                value="전체선택"
                buttonLoading={cartLoadingMemo}
                onClickHandle={() => checkboxState.checkAllCheckbox(purchaseIdListMemo)}
              />
            </CartButtonWrap>
          ) : cartSuccessMemo && purchaseList.length > 0 ? (
            <CartButtonWrap>
              <Button value="삭제" buttonLoading={cartLoadingMemo} />
              <Button
                value="전체선택"
                buttonLoading={cartLoadingMemo}
                onClickHandle={() => checkboxState.checkAllCheckbox(purchaseIdListMemo)}
              />
            </CartButtonWrap>
          ) : (
            <></>
          )}
        </CartTitleWrap>
        {cartSuccessMemo && purchaseList.length === 0 && <CartEmpty />}
        <CartListWrap>
          {cartSuccessMemo &&
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
                  checkboxState={checkboxState}
                />
              )
            })}
          {cartLoadingMemo && range(3).map((el: number) => <Product key={el} />)}
        </CartListWrap>
      </ContentWrapper>

      <ContentWrapper>
        <CartSelectedItem
          cartLoading={cartLoadingMemo}
          cartSelectedData={purchaseList}
          checkState={checkboxState.form}
        />
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="쿠폰" titleLoading={cartLoadingMemo} />
        <CouponWrap>
          <Dropdown
            dropdownLoading={cartLoadingMemo}
            value={dropdownValue}
            onClickHandle={onClickDropdownHandle}
            open={dropdownOpen}
            setOpen={setDropdownOpen}
            defaultValue={dropdownValue ? dropdownValue.title : '선택해주세요.'}
          >
            {couponList.map((coupon, index) => (
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
            <Button value="미적용" onClickHandle={onClickUnAppliedCouponHandle} buttonLoading={cartLoadingMemo} />
            <Button value="최적적용" onClickHandle={onClickBestPriceHandle} buttonLoading={cartLoadingMemo} />
          </div>
        </CouponWrap>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle title="결제 금액" titleLoading={cartLoadingMemo} />
        <PaymentReceipt paymentLoading={cartLoadingMemo} discountPrice={discountPrice} totalPrice={totalPrice} />
      </ContentWrapper>
    </>
  )
}

export default React.memo(cartPage)
