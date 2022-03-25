import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import DownloadPdf from "../../Components/Ar/DownloadPdf";
import FullfilDetail from "../../Components/Ar/Fullfilment/FullfilDetail";
import Hero from "../../Components/Ar/Fullfilment/Hero";
import Layout from "../../Components/Ar/Layout/Layout";

const Fulfilment = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])
  return (
    <>
      <Head>
        <title>Fulfilment || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <FullfilDetail />
        </Blue>
        <DownloadPdf />
      </Layout>
    </>
  );
};

export default Fulfilment;
