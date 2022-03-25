import Head from "next/head";
import Blue from "../Components/Blue";
import Developer from "../Components/developers/Developer";
import Hero from "../Components/developers/Hero";
import Layout from "../Components/Layout/Layout";

const DeveloperTools = () => {
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
