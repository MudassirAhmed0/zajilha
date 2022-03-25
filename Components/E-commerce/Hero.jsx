import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/ecommerce/banner/E-commerce-Business-banner.jpg'

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
        <section className={`relative ${styles.herosection}`} >
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image  placeholder='blur' blurDataURL='/blur.webp' src={HeroImage} alt="E-Commerce Banner" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div ref={content} className="container  relative text-white">
                <h1 className='md:text-4xl medium-font  mb-2 text-xl uppercase'>
                    E-COMMERCE BUSINESS  <br /> SOLUTIONS
                </h1>
                <p className='text-base light-font xl:block hidden'>A new world of revenue opportunity made possible<br /> with online sales fulfilment from Zajil. </p>
                <p className='text-base light-font xl:hidden lg:block'>A new world of revenue opportunity made <br /> possible with online <br /> sales fulfilment from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero