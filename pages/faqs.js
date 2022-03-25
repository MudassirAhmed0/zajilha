import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import FaqsDetails from "../Components/Faqs/FaqsDetails";
import Hero from "../Components/Faqs/Hero";
import Layout from "../Components/Layout/Layout";
import FAQModal from "../Components/Popups/FAQModal";
import styles from "../styles/Home.module.css";


const FAQs = () => {
  const [popupData,setPopupData] = useState({})
  const blue = useRef();
  const white = useRef();
  useEffect(() => {
    setTimeout(() => {
      let toBeSubtracted = 248;
      let height = white.current.clientHeight - toBeSubtracted;
      blue.current.style.height = height + "px";
    }, 500);
  }, []);
  const openModal= ()=>{
    let modal =   document.getElementById('faqModal')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
  }
  return (
    <>
      <Head>
        <title>FAQs || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <section ref={blue} className={`relative    ${styles.blueBack}`}>
          <div
            ref={white}
            className={`overflow-visible   ${styles.ph}    ${styles.whiteCard}`}
          >
            <FaqsDetails setPopupData={setPopupData}  openModal={openModal}/>
          </div>
        </section>
      </Layout>
      <FAQModal content={popupData}/>
    </>
  );
};

export default FAQs;
