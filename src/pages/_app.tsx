import React from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import wrapper from '../redux/store/configureStore'
import { AppLayout, Header, Contents, Footer } from '../components'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
