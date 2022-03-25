import Image from 'next/image'
import styles from '../../styles2/Freight.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/fulfilment/banner/Zajil-Business-Inventory-Fulfillment-Service-banner.jpg'
import { useEffect, useRef } from 'react'
import {gsap} from 'gsap/dist/gsap'

const Hero = () => {
  const content= useRef()
    useEffect(()=>{
        const tl = gsap.timeline()
        const heading = content.current.querySelector('h1')
        const p = content.current.querySelector('p') 
        tl.from(heading,{opacity:0,x:-100,duration:.6})
          .from(p,{opacity:0,x:-100,duration:.6}) 
    },[])

    return (
        <section ref={content} className={`relative ${styles.herosection}`} >
            <span className='absolute h-full w-full top-0 left-0 img_container'>
                <Image placeholder='blur' blurDataURL='/blur.webp'  src={HeroImage} alt="Zajil Business Inventory" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='md:text-4xl text-xl medium-font mb-2  uppercase'>
                ZAJIL BUSINESS INVENTORY <br /> FULFILLMENT SERVICE
                </h1>
                <p className='text-base light-font'>Take your business to the next level of performance with the distributed <br /> warehousing and logistics technology you need from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero