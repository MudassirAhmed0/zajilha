import Head from "next/head";
import Card from "../Components/Shipment/Card";
import DetailPage from "../Components/DetailPage/DetailPage";
import Hero from "../Components/DetailPage/Hero";
import Layout from "../Components/Layout/Layout";
import { useEffect } from "react";
import ShareArticle from "../Components/Popups/ShareArticle";

const NewsDetail = () => {
  useEffect(() => {
    const height = document.getElementById("card").clientHeight - 560;

    document.getElementById("cardContainer").style.height =
      height > 5 ? height + "px" : 0;
  }, []);
  return (
    <>
      <Head>
        <title>News Detail || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <Card>
          <DetailPage />
        </Card>
      </Layout>
      <ShareArticle />
    </>
  );
};

export default NewsDetail;
