import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import DownloadPdf from "../../Components/Ar/DownloadPdf";
import Hero from "../../Components/Ar/Ksa/Hero";
import KsaDetail from "../../Components/Ar/Ksa/KsaDetail";
import Layout from "../../Components/Ar/Layout/Layout";

const KSADistribution = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])
  return (
    <>
      <Head>
        <title>KSA Distribution || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <KsaDetail />
        </Blue>
        <DownloadPdf />
      </Layout>
    </>
  );
};

export default KSADistribution;
