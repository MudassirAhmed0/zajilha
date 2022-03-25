import React from 'react'
import box from '../../assets/NewImages/svg/box-white.svg'
import Image from 'next/image'
import { useEffect, useRef} from "react"
import {gsap} from "gsap/dist/gsap"
import{ ScrollTrigger }from "gsap/dist/ScrollTrigger"
import styles from '../../styles/About.module.css'
gsap.registerPlugin(ScrollTrigger)

const Vision = () => {
  const vision = useRef()
    const mission = useRef()
   
    useEffect(()=>{
      const tl = gsap.timeline({scrollTrigger:{
        trigger:vision.current, 
      }
    }) 
      const cube = vision.current.querySelector('.box')
      const heading = vision.current.querySelectorAll('span')
      const cube2 = mission.current.querySelector('.box')
      const heading2 = mission.current.querySelectorAll('span')
      
      tl.from(cube,{opacity:0,x:'-150',duration:.5}) 
      .from(heading,{opacity:0,x:'-150',stagger:0.2,duration:.5}) 
      .from(cube2,{opacity:0,x:'150',duration:.5}) 
      .from(heading2,{opacity:0,x:'150',stagger:0.2,duration:.5}) 
      },[])
  return (
    <section className=' relative  bg-blue ' >
       
        <div className={`max-1394 mx-auto  overflow-hidden relative pt-32 md:p-0 px-8 pb-12 flex md:flex-row flex-col   ml-auto mr-auto  justify-center ${styles.visionBorder}`}>
            
            <div ref={vision} className='flex  flex-col items-center  md:items-end text-right  center  md:pt-12 md:pb-12 mb-12 md:w-2/6 w-full md:pr-10 md:border-r border-white40Opa'>

            <Image src={box} alt='box'/>
            <span className="text-yellow medium-font md:text-3xl text-xl mt-2 mb-2">
            Vision
            </span>
            <span className='text-lg light-font text-white text-center md:text-right'> 
            Zajil will become an important part of the KSA economic super-structure and a sustainable wealth-generator for Saudi citizens by becoming the solution provider of choice for shipping services to and from the Kingdom of Saudi Arabia.

            </span>
        </div>
        <div  ref={mission} className='flex  flex-col items-center  md:items-start md:pt-12 md:w-2/6 w-full md:ml-10 ml:0 '>
            <Image src={box} alt='box'/>
            <span className="text-yellow medium-font md:text-3xl text-xl mt-2 mb-2">
            Mission
            </span>
            <span className='text-lg light-font text-white text-center md:text-left'> 
            Zajil aspires to be a Saudi Arabia champion and the logistics partner of choice in the region by facilitating trade globally, and locally for startups and small- to medium-sized enterprises through cutting edge technologies, industry best practices, and a customer centric culture.
            </span>
        </div>
        </div>
        
    </section>
  )
}

export default Vision