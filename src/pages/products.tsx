import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBannerReqeust } from '../redux/actions'
import { IStoreState } from '../types'
import { Banner, ProductWrap, Product } from '../components'

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
        <Product
          imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729/375xauto"
          title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨"
          price={100000}
          monthly={5}
        />
        <Product
          imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729/375xauto"
          title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨"
          price={100000}
          monthly={5}
        />
        <Product
          imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729/375xauto"
          title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨"
          price={100000}
          monthly={5}
        />
        <Product
          imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729/375xauto"
          title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨"
          price={100000}
          monthly={5}
        />
        <Product
          imageUrl="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729/375xauto"
          title="글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피글씨"
          price={100000}
          monthly={5}
        />
      </ProductWrap>
    </>
  )
}

export default Products
