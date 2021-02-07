import React, { FC } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { IBannerData } from '../../types'

const StyleBannerWrap = styled.section<IBannerData>`
  @media (max-width: 1023px) {
  }
  @media (min-width: 768px) {
    height: 320px;
  }
  width: 100%;
  height: 380px;
  display: block;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  cursor: not-allowed;
`

const StyleBannerTextWrap = styled.hgroup`
  position: absolute;
  word-break: keep-all;
  top: 30px;
  left: 24px;
  max-width: 255px;
  z-index: 10;

  h4.banner-title {
    font-size: 32px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    line-height: 44px;
    letter-spacing: -0.6px;
    margin: 0px;
  }

  h5.banner-detail {
    margin-top: 8px;
    opacity: 0.55;
    white-space: pre-line;
    font-size: 16px;
    font-weight: normal;
    color: rgb(255, 255, 255);
    line-height: 24px;
    letter-spacing: -0.3px;
  }

  @media (min-width: 1024px) {
    max-width: 330px;
    top: 46px;
    left: 48px;
  }

  @media (max-width: 1023px) {
    h4.banner-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      letter-spacing: -0.4px;
      margin: 0;
    }

    h5.banner-detail {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin-top: 12px;
    }
  }

  @media (min-width: 768px) {
    max-width: 255px;
  }
`

const StyleBannerImageWrap = styled.article`
  @media (min-width: 768px) {
    height: 320px;
  }

  position: absolute;
  right: 0;
  bottom: 0;
  width: 576px;
  max-width: 100%;
`

const StyleBannerImage = styled.img`
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 768px) {
    top: 0;
  }
  bottom: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  position: relative;
  transition: opacity 0.1s linear 0s;
  opacity: 1;
`

interface IBannerProps {
  bannerData?: IBannerData
}

const Banner: FC<IBannerProps> = ({ bannerData }) => {
  return bannerData ? (
    <StyleBannerWrap backgroundColor={bannerData.backgroundColor}>
      <StyleBannerTextWrap>
        <h4 className="banner-title">{bannerData?.title}</h4>
        <h5 className="banner-detail">{bannerData?.detail}</h5>
      </StyleBannerTextWrap>
      <StyleBannerImageWrap>
        <StyleBannerImage src={bannerData?.imageUrl} alt="CLASS101 배너" />
      </StyleBannerImageWrap>
    </StyleBannerWrap>
  ) : (
    <Skeleton height={320} />
  )
}

export default React.memo(Banner)
