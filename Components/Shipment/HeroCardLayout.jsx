 
import styles from '../../styles/Chalja.module.css';
import Layout from '../Layout/Layout'
import banner from '../../assets/NewImages/get-pricing/banner/banner.jpg'
import Image from 'next/image' 


const HeroCardLayout = ({children}) => {

 
  return (
    <Layout>
    <section className={styles.shipmentHero}>
    <span className={`img_container absolute top-0 w-full  overflow-hidden h-full ${styles.shipmentHeroImg}`}>
                <Image  placeholder='blur' blurDataURL='/blur.webp' src={banner} alt="Building Banner"/>
      </span>
      <span className={styles.shipmentOverlay}>
      </span>
      <span className={styles.shipmentOverlay2}>
      </span>
      <span className={styles.shipmentBottomOverlay}>
      </span>
     
      
      

     
      </section>
      {children}
    </Layout>
  )
}

export default HeroCardLayout