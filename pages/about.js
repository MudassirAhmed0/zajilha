import Head from "next/head";
import Counter from "../Components/About/Counter";
import Hero from "../Components/About/Hero";
import History from "../Components/About/History";
import RightImage from "../Components/About/RightImage";
import Vision from "../Components/About/Vision";
import Blue from "../Components/Blue";
import Layout from "../Components/Layout/Layout";
import styles from "../styles/About.module.css";

const About = () => {
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
