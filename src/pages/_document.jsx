import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component
      })

    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="LTnT0hR54gkU6bmW_vf_TF6VhNvyGQv6MgAfL0iKThM"
          />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <link href="css/all.css" rel="stylesheet" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Kumpulan potentiaali" />
          <meta
            name="apple-mobile-web-app-title"
            content="Kumpulan potentiaali"
          />
          <meta name="theme-color" content="#f58020" />
          <meta name="msapplication-navbutton-color" content="#f58020" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="icon_192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="icon_192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="icon_512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="icon_512x512.png"
          />
          <meta
            name="description"
            content="Kumpulan Potentiaali on Helsingin yliopiston matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä työelämä- ja rekrytointitapahtuma"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
