import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Layout from '../../Components/Ar/Layout/Layout'
import AppDetail from '../../Components/Ar/TheApp/AppDetail'
import Hero from '../../Components/Ar/TheApp/Hero'
import styles from '../../arStyles/Home.module.css'

const TheApp = () => {

    useEffect(()=>{
        document.querySelector('body').style.direction='rtl'
    },[])

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