import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-32px.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-57px.png"
            sizes="57x57"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-76px.png"
            sizes="76x76"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-96px.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-128px.png"
            sizes="128x128"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-192px.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            href="/images/icons/TSA-Favicon-228px.png"
            sizes="228x228"
          />
          <link
            rel="shortcut icon"
            sizes="196x196"
            href="“/images/icons/TSA-Favicon-196px.png"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/TSA-Favicon-120px.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/TSA-Favicon-152px.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/TSA-Favicon-180px.png"
            sizes="180x180"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-square70x70logo"
            content="/images/icons/TSA-Favicon-128px.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/images/icons/TSA-Favicon-144px.png"
          />
          <meta name="msapplication-config" content="none" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />

          <script src="https://js.paystack.co/v1/inline.js" />
        </body>
      </Html>
    )
  }
}
