import Head from "next/head";
import Blue from "../Components/Blue";
import DownloadPdf from "../Components/DownloadPdf";
import FrieghtDetail from "../Components/Freight/FrieghtDetail";
import Hero from "../Components/Freight/Hero";
import Layout from "../Components/Layout/Layout";

const Freight = () => {
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
