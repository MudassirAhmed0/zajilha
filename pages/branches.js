import Head from "next/head";
import Hero from "../Components/Branches/Hero";
import Layout from "../Components/Layout/Layout";
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import BranchesDetail from "../Components/Branches/BranchesDetail";

const Branches = () => {
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
