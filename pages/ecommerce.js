import Head from "next/head";
import Blue from "../Components/Blue";
import DownloadPdf from "../Components/DownloadPdf";
import EcommerceDetail from "../Components/E-commerce/EcommerceDetail";
import Hero from "../Components/E-commerce/Hero";
import Layout from "../Components/Layout/Layout";

const Ecommerce = () => {
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
