import styles from '../../../arStyles/About.module.css'
import aboutBanner from '../../../assets/NewImages/about/banner/banner.jpg'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {gsap} from 'gsap/dist/gsap' 
import overlays from '../../../arStyles/Overlays.module.css'

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
    <section className={styles.about}>
        
        <span className={`absolute   ${styles.overlay1}`}> 
        <Image placeholder='blur' blurDataURL='/blur.webp' src={aboutBanner} alt='aboutbanner'/>
        </span>
        <span className={styles.overlay2}>
        </span>
        <span className={`absolute   ${overlays.heroTop} `}>
                
                </span>
                <span className={`absolute   ${overlays.heroTop2} ${overlays.aboutHero2}  `}>
                    
                </span>
        <span className="bottomOverlay"></span>
        <div ref={content} className="container  relative text-white uppercase">
            <h1 className='lg:text-4xl md:text-3xl text-xl medium-font mb-2'>About <br />
                Zajil Express
            </h1>
            <p className='light-font hidden md:block w-1/2'>
            Meet Zajil, connecting global business and opportunity and Saudi <br /> Arabia’s  first privately operated postal company.
            </p>
            <p className='light-font block md:hidden w-10/12 '>
            Meet Zajil, connecting global business and opportunity and Saudi  Arabia’s  first privately operated postal company.
            </p>
        </div>

    </section>
  )
}

export default Hero