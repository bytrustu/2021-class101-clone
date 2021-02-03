import React, { FC, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner/Banner'
import { loadBannerReqeust } from '../redux/actions';
import { IStoreState } from '../types'

const Products: FC = () => {
  const dispatch = useDispatch();
  const { bannerData } = useSelector((state:IStoreState) => state.product)


  useEffect(() => {
    dispatch(loadBannerReqeust());
  }, []);

  return (
    <>
      <Banner
        bannerData={bannerData}
      />
      
    </>
  )
}

export default Products
