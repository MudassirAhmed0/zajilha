import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Layout from '../Components/Layout/Layout'
import AppDetail from '../Components/TheApp/AppDetail'
import Hero from '../Components/TheApp/Hero'
import styles from '../styles/Home.module.css'

const TheApp = () => {
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
                <title>The App || Zajil</title>
                <meta name="description" content="" />

            </Head>
            <Layout noShipment={null}>
                <Hero />
                <section ref={blue} className={`relative    ${styles.blueBack}`}>

                    <div ref={white} className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}>
                        <AppDetail />
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default TheApp