import styles from '../../styles/Home.module.css'
import HomeCarousel from "./Carousel"
import Image from 'next/image'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import Link from 'next/link'
import overlays from '../../styles/Overlays.module.css'
import brandIcon from '../../assets/NewImages/index/image/brandIcon3.svg'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const CarouselContainer = () => {


  const content = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content.current,
      }
    })
    const cube = content.current.querySelector('.box')
    const heading = content.current.querySelector('h4')
    const para = content.current.querySelector('p')
    tl.from(cube, { opacity: 0, y: '50', duration: .5 })
      .from(heading, { opacity: 0, y: '50', duration: .5 })
      .from(para, { opacity: 0, y: '50', duration: .5 })
  }, [])


  return (
    <div ref={content} className={`flex flex-col items-center rounded-b-xl md:pt-24 pt-48 ${styles.carouselContainer}`}>
      <span className="box">
        <Image src={yellowBox} alt="yellow box" />
      </span>
      <h4 className={`md:text-3xl text-xl relative w-full text-center  text-blue uppercase medium-font mb-10  ${overlays.carouselOverlay2} `} >
        <span className={styles.brandIcon3}>
          <Image src={brandIcon} alt='brandIcon' />
        </span>
        <span className={` ${overlays.carouselOverlay}`}></span>
        Latest News
      </h4>
      <HomeCarousel />
      <div className='md:p-0 px-[23px] w-full flex justify-center'>
        <Link href='/mediacenter' >
          <a className='md:w-36 md:h-10 h-[50px] w-full transition-all duration-300 mb-12 mt-10  rounded-md border-2 border-yellow medium-font text-grey  hover:shadow-md  hover:shadow-shadaw flex justify-center items-center hover:bg-yellow'>
            View More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CarouselContainer