import React, { FC } from 'react'
import styled from 'styled-components'

const StyleRecommendMotionTop = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #fff, #222);
  z-index: 10;
  animation: animate1 4s linear infinite;
  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

const StyleRecommendMotionRight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #fff, #222);
  z-index: 10;
  animation: animate2 4s linear infinite;
  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`

const StyleRecommendMotionBottom = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, #fff, #222);
  z-index: 10;
  animation: animate3 4s linear infinite;
  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const StyleRecommendMotionLeft = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, #fff, #222);
  z-index: 10;
  animation: animate4 4s linear infinite;
  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`

const RecommendMotion: FC = () => {
  return (
    <>
      <StyleRecommendMotionTop />
      <StyleRecommendMotionRight />
      <StyleRecommendMotionBottom />
      <StyleRecommendMotionLeft />
    </>
  )
}

export default RecommendMotion
