import Image from 'next/image' 
import arrow from '../../../assets/NewImages/svg/right-arrow.svg'
import styles from '../../../arStyles2/media.module.css'
import YellowBox from '../../../assets/NewImages/svg/box-yellow.svg'
import chacha from '../../../assets/NewImages/media-center/image/Featured-News.jpg' 
import Carousel from './Carousel'

import { useEffect, useRef } from "react"
import {gsap} from "gsap/dist/gsap"
import{ ScrollTrigger }from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const MediaDetail = () => {
    const textContainer = useRef()
  const imgContainer = useRef()
    const box = useRef()
    const heading = useRef()
  useEffect(()=>{
    const tl = gsap.timeline({scrollTrigger:{
      trigger:imgContainer.current, 
    }
  })  
    const para = textContainer.current.querySelectorAll('p')
    
    tl.from(box.current,{opacity:0,x:'50',duration:.5})
    tl.from(heading.current,{opacity:0,x:'50',duration:.5})
    tl.from(imgContainer.current,{opacity:0,x:'150',duration:.5})
    tl.from(para,{opacity:0,x:'-50',stagger:.2,duration:.5})
    
    },[])
    return (
        <div className='max-1394 overflow-hidden relative mx-auto xl:pt-16 xl:px-20 xl:pb-24 py-14 pl-[18px] pr-[18px]'>
            <div>
                <span ref={box}>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 ref={heading} className='text-blue medium-font text-3xl'>Featured News</h2>
            </div>
            <div className='flex lg:flex-nowrap flex-wrap gap-x-10 items-center mt-3'>

                <span ref={imgContainer} className={`rounded-lg relative overflow-hidden img_container ${styles.chachaStyles}`}>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={chacha} alt="Business Commitment" />
                </span>

                <div ref={textContainer} className={styles.contentew}>
                    <p className='text-xs text-grey medium-font lg:mt-0 mt-[34.5px]'>8 June 2020</p>
                    <p className='text-base text-grey light-font mt-2'>eport of the classification index of postal and logistics companies issued by CITC which monitors the number of raised complaints in the second quarter of 2020 , Zajil Company comes as the best company in the international shipments sector.</p>
                    <p className='text-base text-grey light-font mt-4'>Zajil CARE, a commitment to business values that highlight KSA competitive…</p>
                    <div className='flex items-center cursor-pointer  mt-4'>
                        <p className='text-base text-grey pt-1.5 pl-2'>Read More</p>
                        <span className={`${styles.rotateIcon}`}>
                            <Image src={arrow} alt="arrow" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <span>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-blue medium-font text-3xl'>Latest Updates</h2>
            </div>
            <div className={styles.mediaCarousel} >
                <Carousel />
            </div> 
        </div>
    )
}

export default MediaDetail