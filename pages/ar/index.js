import Head from "next/head";
import Blue from "../../Components/Ar/Blue";
import Hero from "../../Components/Ar/Home/Hero";
import styles from "../../arStyles/Home.module.css";
import CarouselContainer from "../../Components/Ar/Home/CarouselContainer";
import Counter from "../../Components/Ar/Home/Counter";
import Logistics from "../../Components/Ar/Home/Logistics";
import Map from "../../Components/Ar/Home/Map";
import RightImage from "../../Components/Ar/Home/RightImage";
import Shipping from "../../Components/Ar/Home/Shipping";
import ThreeGridContainer from "../../Components/Ar/Home/ThreeGridContainer";
import Track from "../../Components/Ar/Home/Track";
import Layout from "../../Components/Ar/Layout/Layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector('html').dir = 'rtl'
  }, [])
  return (
    <>
      <Head>
        <title>Home || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout noShipment>
        <Hero />
        <Blue home about2={null} boxShadowNone={styles.boxShadowNone}>
          <Track />
          <RightImage />
          <ThreeGridContainer />
          <Counter />
          <Map />
          <Logistics />
          <div className="relative overflow-hidden">
            <Shipping />
            <div className={`${styles.homeCarousel}`}>
              <CarouselContainer />
            </div>
          </div>
        </Blue>
      </Layout>
    </>
  );
}
