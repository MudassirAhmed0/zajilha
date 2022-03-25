import Head from "next/head";
import { useEffect } from "react";
import Blue from "../../Components/Ar/Blue";
import Developer from "../../Components/Ar/developers/Developer";
import Hero from "../../Components/Ar/developers/Hero";
import Layout from "../../Components/Ar/Layout/Layout";

const DeveloperTools = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])

  return (
    <>
      <Head>
        <title> Developer Tools || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Blue>
          <Developer />
        </Blue>
      </Layout>
    </>
  );
};

export default DeveloperTools;
