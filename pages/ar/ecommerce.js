import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import DownloadPdf from "../../Components/Ar/DownloadPdf";
import EcommerceDetail from "../../Components/Ar/E-commerce/EcommerceDetail";
import Hero from "../../Components/Ar/E-commerce/Hero";
import Layout from "../../Components/Ar/Layout/Layout";

const Ecommerce = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])
  return (
    <>
      <Head>
        <title>eCommerce || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <EcommerceDetail />
        </Blue>
        <DownloadPdf />
      </Layout>
    </>
  );
};

export default Ecommerce;
