import React from 'react'
import Image from 'next/image'
import contactHero from '../../../assets/NewImages/contact/banner/contact-hero.jpg'
import styles from '../../../arStyles2/contact.module.css'
import overlays from '../../../arStyles2/Overlays.module.css'
import styles2 from '../../../arStyles2/media.module.css'

const Hero = () => {
    return (
        <section className={styles2.heroSection}>
              <span className={`absolute ${styles.heroimg} top-0 left-0 h-full w-full img_container`}>
                <Image placeholder='blur' blurDataURL='/blur.webp' src={contactHero} alt="Contact Hero" />
            </span>
              <span className={`${overlays.contactOverlay} absolute top-0 left-0 w-full h-full`}></span>
            <span className={`${overlays.careerOverlayTwo} absolute top-0 left-0 w-full h-full`}></span>
            <span className='bottomOverlay'>
      </span>
          
            <div className="container  relative text-white uppercase">
                <h1 className='md:text-4xl medium-font lg:mb-2 text-xl'>
                    CONTACT US
                </h1>
            </div>
        </section>
    )
}

export default Hero