import Image from 'next/image'
import banner from '../../assets/NewImages/index/banner/banner.jpg'
import homebrandIcon from '../../assets/NewImages/index/banner/homebrandIcon.png'
import styles from '../../styles/Home.module.css'
import overlays from '../../styles/Overlays.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import {gsap} from 'gsap/dist/gsap'


const Hero = () => {
    const content= useRef()
    useEffect(()=>{
        const tl = gsap.timeline()
        const heading = content.current.querySelector('h1')
        const p = content.current.querySelector('p')
        const anchor = content.current.querySelector('a')
        tl.from(heading,{opacity:0,x:-100,duration:.6})
          .from(p,{opacity:0,x:-100,duration:.6})
          .from(anchor,{opacity:0,y:50,duration:.1})
    },[])
  return (
        <section className={`flex items-center    justify-start ${styles.heroSection}`}>
            <span className={`img_container ${styles.heroImg}`}>
                <Image placeholder='blur' blurDataURL='/blur.webp' src={banner} layout='responsive' alt='Delivered'/>
            </span>
            <span className={`absolute   ${overlays.heroTop} `}>
                
            </span>
            <span className={`absolute   ${overlays.heroTop2} `}>
                
            </span>
            <span className={`absolute   ${overlays.heroBottomBlue} `}>
                
            </span>
            <span className='absolute md:block hidden top-0 right-0 w-52 '>
                <Image src={homebrandIcon} alt="Brand Icon"/> 
            </span>
           <div ref={content} className="container text-white relative ">
                <h1 className='md:text-3xl xl:text-4xl  text-xl medium-font lg:w-2/5 md:w-3/5 w-2/3'>
                AFFORDABLE, SIMPLIFIED SHIPPING AND LOGISTICS
                </h1>
                <p className='light-font lg:w-1/3 md:w-6/12  mt-2 md:mb-8  mb-6 w-full pr-6'>
                Discover what our Saudi integrity and global capacity can do for your bottom line
                </p>
                <Link href="#" >
                    <a className='w-36 h-10 flex justify-center rounded items-center border-2  transition-all duration-300 border-yellow medium-font  hover:bg-yellow hover:text-grey'>
                      Learn More
                    </a>
                </Link>
            </div>
        </section>
  )
}

export default Hero