import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBannerReqeust } from '../redux/actions'
import { IStoreState } from '../types'
import Banner from '../components/Banner/Banner'
import ProductWrap from "../components/Product/ProductWrap";
import ProductImage from "../components/Product/ProductImage";
import Product from "../components/Product/Product";
import ProductDetail from "../components/Product/ProductDetail";
import ProductLine from "../components/Product/ProductLine";
import ProductPrice from "../components/Product/ProductPrices";

const Products: FC = () => {
  const dispatch = useDispatch()
  const { bannerData } = useSelector((state: IStoreState) => state.product)

  useEffect(() => {
    dispatch(loadBannerReqeust())
  }, [])

  return (
    <>
      <Banner bannerData={bannerData ? bannerData : null} />
      <ProductWrap>
        <Product>
          <ProductImage imageUrl={undefined} />
          <ProductDetail title={undefined} />
          <ProductLine />
          <ProductPrice price={undefined} />
        </Product>
        <Product>
          <ProductImage imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729" />
          <ProductDetail title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨" />
          <ProductLine />
          <ProductPrice price={100000} monthly={5} />
        </Product>
        <Product>
          <ProductImage imageUrl="https://cdn.class101.net/images/132a560b-ba7f-4564-b5f5-709b934f5ddd" />
          <ProductDetail title="한 땀 한 땀 꽃을 수 놓다 - 보태니컬 입체 프랑스 자수" />
          <ProductLine />
          <ProductPrice price={320000} />
        </Product>
        <Product>
          <ProductImage imageUrl={undefined} />
          <ProductDetail title={undefined} />
          <ProductLine />
          <ProductPrice price={undefined} />
        </Product>
        <Product>
          <ProductImage imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729" />
          <ProductDetail title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨" />
          <ProductLine />
          <ProductPrice price={10000} />
        </Product>
        <Product>
          <ProductImage imageUrl="https://cdn.class101.net/images/132a560b-ba7f-4564-b5f5-709b934f5ddd" />
          <ProductDetail title="한 땀 한 땀 꽃을 수 놓다 - 보태니컬 입체 프랑스 자수" />
          <ProductLine />
          <ProductPrice price={320000} />
        </Product>
      </ProductWrap>
    </>
  )
}

export default Products
