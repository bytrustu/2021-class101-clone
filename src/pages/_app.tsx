import React from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import wrapper from '../redux/store/configureStore'
import { AppLayout, Header, Contents, Footer } from '../components'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" className="next-head" />
      <AppLayout>
        <Header />
        <Contents>
          <Component {...pageProps} />
        </Contents>
        <Footer />
      </AppLayout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MyApp)
