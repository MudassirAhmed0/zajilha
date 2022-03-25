import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import CareerDetail from "../../Components/Ar/Career/CareerDetail";
import Hero from "../../Components/Ar/Career/Hero";
import Layout from "../../Components/Ar/Layout/Layout";

const Career = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])

  return (
    <>
      <Head>
        <title>Career || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <CareerDetail />
        </Blue>
      </Layout>
    </>
  );
};

export default Career;
