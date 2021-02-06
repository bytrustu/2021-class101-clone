import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_CART_REQUEST,
  addCartReqeust,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  loadBannerReqeust,
  loadLocalCart,
  loadProductReqeust,
  REMOVE_CART_REQUEST,
  removeCartReqeust,
} from '../redux/actions'
import { IStoreState } from '../types'
import { Banner, ProductWrap, Product, ProductCartIcon } from '../components'
import { range } from '../utils'
import { adjustableHeight, image750Size, productMonthly } from '../const'
import { message } from 'antd'

const productsPage: FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const dispatch = useDispatch()
  const {
    bannerData,
    currentPage,
    maxPage,
    recommendProductItem,
    productItemList,
    loading: productLoading,
    success: productSuccess,
  } = useSelector((state: IStoreState) => state.product)
  const { loading: cartLoading, cartList } = useSelector((state: IStoreState) => state.cart)

  const cartAddLoadingMemo = useMemo(() => cartLoading.response[ADD_CART_REQUEST], [cartLoading.response])
  const cartRevmoeLoadingMemo = useMemo(() => cartLoading.response[REMOVE_CART_REQUEST], [cartLoading.response])
  const cartAddRequestMemo = useMemo(() => cartLoading.type.includes(ADD_CART_REQUEST), [cartLoading.type])
  const cartRemoveRequestMemo = useMemo(() => cartLoading.type.includes(ADD_CART_REQUEST), [cartLoading.type])
  const productLoadRequestMemo = useMemo(() => productLoading.type.includes(LOAD_PRODUCT_REQUEST), [
    productLoading.type,
  ])

  const handleScroll = useCallback(() => {
    if (currentPage >= maxPage) return
    if (!isFetching) {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      if (scrollTop + clientHeight + adjustableHeight >= scrollHeight) {
        dispatch(loadProductReqeust(currentPage + 1))
      }
    }
  }, [isFetching])

  const onClickCartHandle = useCallback(
    (id: string) => {
      if (cartAddRequestMemo || cartRemoveRequestMemo) {
        return message.info('장바구니 갱신 중입니다.')
      }
      if (cartList.includes(id as string)) {
        return dispatch(removeCartReqeust(id))
      } else {
        if (cartList.length >= 3) {
          return message.info('장바구니 개수를 초과 하였습니다.')
        }
        return dispatch(addCartReqeust(id))
      }
    },
    [cartLoading.type],
  )

  useEffect(() => {
    dispatch(loadBannerReqeust())
    dispatch(loadLocalCart())
    if (productItemList.length === 0) {
      dispatch(loadProductReqeust(1))
    }
  }, [])

  useEffect(() => {
    if (productLoadRequestMemo) {
      setIsFetching(true)
    }
  }, [productLoading.type])

  useEffect(() => {
    if (productSuccess.type.includes(LOAD_PRODUCT_SUCCESS)) {
      setIsFetching(false)
    }
  }, [productSuccess.type])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <Banner bannerData={bannerData ? bannerData : undefined} />
      <ProductWrap>
        {recommendProductItem && (
          <Product
            key={recommendProductItem.id}
            id={recommendProductItem.id}
            imageUrl={recommendProductItem.coverImage + image750Size}
            title={recommendProductItem.title}
            price={recommendProductItem.price}
            monthly={productMonthly}
            badge="CLASS101 추천"
            important={true}
          >
            <ProductCartIcon
              cartActive={cartList?.includes(recommendProductItem.id as string)}
              cartLoading={
                cartAddLoadingMemo === recommendProductItem.id || cartRevmoeLoadingMemo === recommendProductItem.id
              }
              onClickHandle={() => {
                onClickCartHandle(recommendProductItem.id)
              }}
            />
          </Product>
        )}

        {productItemList.length > 0 &&
          productItemList.map((productItem) => (
            <Product
              key={productItem.id}
              id={productItem.id}
              imageUrl={productItem.coverImage + image750Size}
              title={productItem.title}
              price={productItem.price}
              monthly={productMonthly}
            >
              <ProductCartIcon
                cartActive={cartList?.includes(productItem.id as string)}
                cartLoading={cartAddLoadingMemo === productItem.id || cartRevmoeLoadingMemo === productItem.id}
                onClickHandle={() => {
                  onClickCartHandle(productItem.id)
                }}
              />
            </Product>
          ))}

        {productLoadRequestMemo && currentPage === 1 ? (
          range(6).map((el) => <Product key={el} />)
        ) : productLoadRequestMemo && currentPage > 1 ? (
          range(5).map((el) => <Product key={el} />)
        ) : (
          <></>
        )}
      </ProductWrap>
    </>
  )
}

export default React.memo(productsPage)
