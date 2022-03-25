import Head from "next/head";
import Hero from "../../Components/Ar/Contact/Hero";
import Layout from "../../Components/Ar/Layout/Layout";
import ContactDetail from "../../Components/Ar/Contact/ContactDetail";
import { useEffect, useRef } from "react";
import styles from "../../arStyles/Home.module.css";

const Contact = () => {

  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])

  const blue = useRef();
  const white = useRef();
  useEffect(() => {
    setTimeout(() => {
      let toBeSubtracted = 248;
      let height = white.current.clientHeight - toBeSubtracted;
      blue.current.style.height = height + "px";
    }, 500);
  }, []);
  return (
    <>
      <Head>
        <title>Contact || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <section ref={blue} className={`relative    ${styles.blueBack}`}>
          <div
            ref={white}
            className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}
          >
            <ContactDetail />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
