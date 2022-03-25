import Head from "next/head";
import { useEffect, useRef } from "react";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/MediaCenter/Hero";
import MediaDetail from "../Components/MediaCenter/MediaDetail";
import styles from "../styles/Home.module.css";

const Mediacenter = () => {
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
