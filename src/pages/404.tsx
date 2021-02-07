import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyleNoticeWrap = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 300px;
`

const StyleNotice = styled.strong`
  font-size: 26px;
  letter-spacing: -1px;
`

const PageNotFound: FC = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/products')
  }, [])
  return (
    <>
      <StyleNoticeWrap>
        <StyleNotice>페이지를 전환 합니다 👋</StyleNotice>
      </StyleNoticeWrap>
    </>
  )
}

export default React.memo(PageNotFound)
