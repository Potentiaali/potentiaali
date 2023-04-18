import Head from 'next/head'
import React, { Suspense, useEffect } from 'react'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Provider } from 'react-redux'
import { store } from '../store'
import '../reset.scss'
import '../index.scss'
import Nav from '../components/partials/Nav'

const gTag = 'UA-141725249-1'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (err) {
          console.log('Service Worker registration failed: ', err)
        })
      })
    }
  }, [])
  return (
    <>
      <Head>
        <title>Kumpulan Potentiaali</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId={gTag} />

      <Provider store={store}>
        <Suspense fallback="...is loading">
          <Nav />
        </Suspense>
        <Suspense fallback="...is loading">
          <Component {...pageProps} />
        </Suspense>
      </Provider>
    </>
  )
}

export default MyApp
