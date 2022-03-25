import Head from "next/head";
import Hero from "../../Components/Ar/Branches/Hero";
import Layout from "../../Components/Ar/Layout/Layout";
import { useEffect, useRef } from 'react'
import styles from '../../arStyles/Home.module.css'
import BranchesDetail from "../../Components/Ar/Branches/BranchesDetail";

const Branches = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
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
        <title>Branches || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <section ref={blue} className={`relative    ${styles.blueBack}`}>

          <div ref={white} className={`   overflow-hidden   ${styles.ph}    ${styles.whiteCard}`}>
            <BranchesDetail />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Branches;
