import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, loadBannerReqeust, loadProductReqeust } from '../redux/actions'
import { IStoreState } from '../types'
import { Banner, ProductWrap, Product } from '../components'
import { range } from '../utils'
import { adjustableHeight, productMonthly } from '../const'

const Products: FC = () => {
  const dispatch = useDispatch()
  const { bannerData, currentPage, maxPage, recommendProductItem, productItemList, loading, success } = useSelector(
    (state: IStoreState) => state.product,
  )
  const [isFetching, setIsFetching] = useState<boolean>(false)

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

  useEffect(() => {
    dispatch(loadBannerReqeust())
    dispatch(loadProductReqeust(1))
  }, [])

  useEffect(() => {
    if (loading.type.includes(LOAD_PRODUCT_REQUEST)) {
      setIsFetching(true)
    }
  }, [loading.type])

  useEffect(() => {
    if (success.type.includes(LOAD_PRODUCT_SUCCESS)) {
      setIsFetching(false)
    }
  }, [success.type])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <Banner bannerData={bannerData ? bannerData : null} />
      <ProductWrap>
        {recommendProductItem && (
          <Product
            key={recommendProductItem.id}
            id={recommendProductItem.id}
            imageUrl={recommendProductItem.coverImage}
            title={recommendProductItem.title}
            price={recommendProductItem.price}
            monthly={productMonthly}
            recommend={true}
          />
        )}

        {productItemList.length > 0 &&
          productItemList.map((productItem) => (
            <Product
              key={productItem.id}
              id={productItem.id}
              imageUrl={productItem.coverImage}
              title={productItem.title}
              price={productItem.price}
              monthly={productMonthly}
            />
          ))}

        {loading.type.includes(LOAD_PRODUCT_REQUEST) && currentPage === 1 ? (
          range(6).map((el) => <Product key={el} />)
        ) : loading.type.includes(LOAD_PRODUCT_REQUEST) && currentPage > 1 ? (
          range(5).map((el) => <Product key={el} />)
        ) : (
          <></>
        )}
      </ProductWrap>
    </>
  )
}

export default Products
