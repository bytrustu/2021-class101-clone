import React from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import wrapper from '../redux/store/configureStore'
import AppLayout from '../components/Layout/AppLayout'
import Header from '../components/Layout/Header'
import Contents from '../components/Layout/Contents'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" className="next-head" />
      <AppLayout>
        <Header />
        <Contents>
          <Component {...pageProps} />
        </Contents>
      </AppLayout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MyApp)
