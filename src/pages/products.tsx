import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  LOAD_BANNER_SUCCESS,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  loadBannerReqeust,
  loadProductReqeust,
} from '../redux/actions'
import { IStoreState } from '../types'
import { Banner, ProductWrap, Product } from '../components'
import { range } from '../utils'

const Products: FC = () => {
  const dispatch = useDispatch()
  const { bannerData, currentPage, maxPage, recommendProductItem, productItemList, loading, success } = useSelector(
    (state: IStoreState) => state.product,
  )

  useEffect(() => {
    dispatch(loadBannerReqeust())
    dispatch(loadProductReqeust(1))
  }, [])

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
            monthly={5}
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
              monthly={5}
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
