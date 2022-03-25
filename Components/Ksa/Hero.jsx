import Image from 'next/image'
import styles from '../../styles2/Freight.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/ksa/banner/banner.jpg'

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
            <span className='absolute top-0 left-0 img_container w-full h-full'>
                <Image  placeholder='blur' blurDataURL='/blur.webp' src={HeroImage} alt="KSA Banner" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='md:text-4xl text-xl medium-font mb-2  uppercase'>
                ZAJIL KSA DISTRIBUTION  <br /> FOR BUSINESSES  
                </h1>
                <p className='text-base light-font'>Get the most reliable shipping and receiving logistics within  <br /> the Kingdom of Saudi Arabia from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero