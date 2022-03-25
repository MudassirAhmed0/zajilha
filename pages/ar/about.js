import Head from "next/head";
import { useEffect } from "react";
import Counter from "../../Components/Ar/About/Counter";
import Hero from "../../Components/Ar/About/Hero";
import History from "../../Components/Ar/About/History";
import RightImage from "../../Components/Ar/About/RightImage";
import Vision from "../../Components/Ar/About/Vision";
import Blue from "../../Components/Ar/Blue";
import Layout from "../../Components/Ar/Layout/Layout";
import styles from "../../arStyles/About.module.css";

const About = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])
  return (
    <>
      <Head>
        <title>About || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue boxShadowNone={styles.boxShadowNone}>
          <RightImage />
          <Counter />
        </Blue>
        <Vision />
        <Blue about2>
          <History />
        </Blue>
      </Layout>
    </>
  );
};

export default About;
