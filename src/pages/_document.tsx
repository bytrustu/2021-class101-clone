import React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { createGlobalStyle, ServerStyleSheet } from 'styled-components'
import { baseUrl } from '../const'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html,
  body {
    height: 100%;
  }
`

interface IProps {
  styleTags: Array<React.ReactNode>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export default // @ts-ignore
class MyDocument extends Document<IProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } catch (e) {
      console.error(e)
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <title>클래스101 | 준비물까지 챙겨주는 온라인 클래스</title>
          <meta name="name" content="클래스101" />
          <meta name="author" />
          <meta name="description" content="대한민국 1등 온라인 클래스 플랫폼. 준비물까지 모두 챙겨드릴게요. 해야만 하는 일에 밀려, 방법을 몰라서, 시작을 망설였다면, 사랑하는 일을 하기 위한 기반이 필요하다면, 당신이 사랑하는 일을 하며 살수 있도록 1,000명 이상의 크리에이터와 함께 취미도, 직무도, 경제적인 자유도 클래스101에서 시작을 함께하세요." />
          <meta property="keywords" />
          <meta property="og:site_name" content="클래스101" />
          <meta property="og:title" content="준비물까지 챙겨주는 온라인 클래스" />
          <meta property="og:url" content="https://class101.net/" />
          <meta property="og:description" content="대한민국 1등 온라인 클래스 플랫폼. 준비물까지 모두 챙겨드릴게요. 해야만 하는 일에 밀려, 방법을 몰라서, 시작을 망설였다면, 사랑하는 일을 하기 위한 기반이 필요하다면, 당신이 사랑하는 일을 하며 살수 있도록 1,000명 이상의 크리에이터와 함께 취미도, 직무도, 경제적인 자유도 클래스101에서 시작을 함께하세요." />
          <meta property="og:image" content={`${baseUrl}/images/og-image.png`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:image" content={`${baseUrl}/images/og-image.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" />
          <meta name="twitter:title" content="준비물까지 챙겨주는 온라인 클래스" />
          <meta name="twitter:description" content="대한민국 1등 온라인 클래스 플랫폼. 준비물까지 모두 챙겨드릴게요. 해야만 하는 일에 밀려, 방법을 몰라서, 시작을 망설였다면, 사랑하는 일을 하기 위한 기반이 필요하다면, 당신이 사랑하는 일을 하며 살수 있도록 1,000명 이상의 크리에이터와 함께 취미도, 직무도, 경제적인 자유도 클래스101에서 시작을 함께하세요." />
          <meta name="twitter:label1" content="Written By" />
          <meta name="twitter:data1" />
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" className="next-head" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href={`${baseUrl}/images/favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}/images/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/images/favicon-16x16.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/images/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="48x48" href={`${baseUrl}/images/favicon-48x48.png`} />
          <link rel="icon" type="image/png" sizes="57x57" href={`${baseUrl}/images/favicon-57x57.png`} />
          <link rel="icon" type="image/png" sizes="64x64" href={`${baseUrl}/images/favicon-64x64.png`} />
          <link rel="icon" type="image/png" sizes="72x72" href={`${baseUrl}/images/favicon-72x72.png`} />
          <link rel="icon" type="image/png" sizes="120x120" href={`${baseUrl}/images/favicon-120x120.png`} />
          <link rel="icon" type="image/png" sizes="152x152" href={`${baseUrl}/images/favicon-152x152.png`} />
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
