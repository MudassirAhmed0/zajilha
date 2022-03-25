import Head from "next/head";
import Blue from "../Components/Blue";
import Hero from "../Components/Home/Hero";
import styles from "../styles/Home.module.css";
import CarouselContainer from "../Components/Home/CarouselContainer";
import Counter from "../Components/Home/Counter";
import Logistics from "../Components/Home/Logistics";
import Map from "../Components/Home/Map";
import RightImage from "../Components/Home/RightImage";
import Shipping from "../Components/Home/Shipping";
import ThreeGridContainer from "../Components/Home/ThreeGridContainer";
import Track from "../Components/Home/Track";
import Layout from "../Components/Layout/Layout";

export default function Home() {
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
            <div className={`${styles.homeCarousel}`} >
              <CarouselContainer />
            </div>
          </div>
        </Blue>
      </Layout>
    </>
  );
}
