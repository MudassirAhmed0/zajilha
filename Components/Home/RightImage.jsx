import Image from "next/image"
import styles from '../../styles/Home.module.css'
import delivered from '../../assets/NewImages/index/image/delivered.jpg' 
import yellowCube from '../../assets/NewImages/svg/box-yellow.svg'
import { useEffect, useRef, useState } from "react"
import {gsap} from "gsap/dist/gsap"
import{ ScrollTrigger }from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const RightImage = () => {
  const textContainer = useRef()
  const imgContainer = useRef()
 
  useEffect(()=>{
    const tl = gsap.timeline({scrollTrigger:{
      trigger:imgContainer.current, 
    }
  }) 
    const cube = textContainer.current.querySelector('.box')
    const heading = textContainer.current.querySelector('h4')
    const para = textContainer.current.querySelector('p')
    
     tl.from(imgContainer.current,{opacity:0,x:'-150',duration:.5})
     tl.from(cube,{opacity:0,x:'50',duration:.5})
     tl.from(heading,{opacity:0,x:'50',duration:.5})
     tl.from(para,{opacity:0,x:'50',duration:.5})
    },[])

  return (
    
    <div  className="max-1394 mx-auto  overflow-hidden relative flex flex-col lg:flex-row md:pl-20 md:pr-20 pl-5 pr-5 md:pt-44 pt-[200px] items-center justify-between gap-x-16 gap-y-8">
       
        <div ref={imgContainer} className={`rounded-lg img_container  relative overflow-hidden   ${styles.rightImage}`}>
            <Image  placeholder='blur' blurDataURL='/blur.webp' src={delivered} alt='Delivered' />
        </div>
        <div ref={textContainer} className="flex pl-4 md:pl-0 pr-8 flex-col justify-center items-start gap-y-3 ">
            <span className="box">
              <Image  src={yellowCube} alt='Cube Icon'/>
            </span>
            <h4 className="md:text-3xl text-xl medium-font text-grey -mt-3">
            We Are Built To Say, <span className="text-blue medium-font md:bold-font ">“YES DELIVERED”</span> to Your   Business & Logistics Needs
            </h4>
            <p className="light-font text-grey">
            From humble beginnings as the first private Saudi postal company, Zajil Express is now a very large company with global reach and the pride of Saudi entrepreneurship. More than 500 corporate clients count on Zajil to keep their goods – and their businesses – in motion with streamlined shipping services.
            </p>
        </div> 
    </div>
    
   
  )
}

export default RightImage