import { extractCritical } from '@emotion/server'
import * as Layout from 'components/Layout'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import GlobalStyles from '../styles/global'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style data-emotion-css={critical.ids.join(' ')} dangerouslySetInnerHTML={{ __html: critical.css }} />
      </React.Fragment>
    )

    return initialProps
  }

  public render(): React.ReactElement {
    return (
      <Html lang={'en'} data-theme='synthwave'>
        <Head>
          <GlobalStyles />
          <meta name='Description' content={'Next.js template'} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body css={{ position: 'relative' }}>
          <Layout.Topbar user='test' />
          {/* SSR Rendered*/}
          <Main />
          {/* Frontend Javascript */}
          <NextScript />
          <Layout.Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument
