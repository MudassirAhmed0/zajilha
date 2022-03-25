import Head from "next/head";
import { useEffect, useRef } from "react";
import Layout from "../../Components/Ar/Layout/Layout";
import Hero from "../../Components/Ar/MediaCenter/Hero";
import MediaDetail from "../../Components/Ar/MediaCenter/MediaDetail";
import styles from "../../arStyles/Home.module.css";

const Mediacenter = () => {
  useEffect (()=>{
    document.querySelector('body').style.direction='rtl'
  },[]) 
  
  const blue = useRef();
  const white = useRef();
  useEffect(() => {
    setTimeout(() => {
      let toBeSubtracted = 248;
      let height = white.current.clientHeight - toBeSubtracted;
      blue.current.style.height = height + "px";
    }, 500);
  }, []);
  return (
    <>
      <Head>
        <title>Media Center || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <section ref={blue} className={`relative    ${styles.blueBack}`}>
          <div
            ref={white}
            className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}
          >
            <MediaDetail />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Mediacenter;
