import '../styles/globals.css'  
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
         <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
          <link rel="canonical" href="" />
          <meta name="robots" content="noindex"></meta>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:domain" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:url" content="" />
          <meta itemprop="image" content="" />
          <meta itemprop="name" content="" />
          <meta itemprop="description" content="" />
          <meta name="geo.region" content="" />
          <meta name="geo.placename" content="" />
          <meta name="geo.position" content="" />
          <meta name="ICBM" content="" />
          <meta name="" content="" />
          <meta name="theme-color" content="#0054a6" /> 
          </Head>
          <Component {...pageProps} />
        </> 
 
}

export default MyApp
