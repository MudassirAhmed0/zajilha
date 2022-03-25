import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import DownloadPdf from "../../Components/Ar/DownloadPdf";
import FrieghtDetail from "../../Components/Ar/Freight/FrieghtDetail";
import Hero from "../../Components/Ar/Freight/Hero";
import Layout from "../../Components/Ar/Layout/Layout";

const Freight = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])

  return (
    <>
      <Head>
        <title>Freight || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <FrieghtDetail />
        </Blue>
        <DownloadPdf />
      </Layout>
    </>
  );
};

export default Freight;
