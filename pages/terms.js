import Head from 'next/head'
import Layout from '../Components/Layout/Layout'
import Hero from '../Components/Terms/Hero'
import TermsDetail from '../Components/Terms/TermsDetail'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

const Terms = () => {
  const blue = useRef()
  const white = useRef()
  useEffect(() => {
    setTimeout(() => {

      let toBeSubtracted = 248
      let height = white.current.clientHeight - toBeSubtracted
      blue.current.style.height = height + "px"

    }, 500)
  }, [])
  return (
    <>
      <Head>
        <title>Terms of uses || Zajil</title>
        <meta name="description" content="" />

      </Head>
      <Layout>
        <Hero />

        <section ref={blue} className={`relative    ${styles.blueBack}`}>

          <div ref={white} className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}>
            <TermsDetail />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Terms