import React from 'react'
import YellowBack from '../YellowBack'
import styles from '../../styles/About.module.css'
import mdImage from '../../assets/NewImages/about/image/md-message.jpg' 
import Image from 'next/image'
import brandIcon from '../../assets/NewImages/about/image/md-brand.svg'
import CountUp from 'react-countup'; 
import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useRef, useState } from "react"
import {gsap} from "gsap/dist/gsap"
import{ ScrollTrigger }from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Counter = () => {
    const textContainer = useRef()
    const imgContainer = useRef()
   
    useEffect(()=>{
      const tl = gsap.timeline({scrollTrigger:{
        trigger:imgContainer.current, 
      }
    }) 
      const cube = textContainer.current.querySelector('.box')
      const heading = textContainer.current.querySelector('h5')
      const para = textContainer.current.querySelectorAll('p')
      
      tl.from(imgContainer.current,{opacity:0,x:'-150',duration:.5})
      tl.from(cube,{opacity:0,x:'50',duration:.5})
      tl.from(heading,{opacity:0,x:'50',duration:.5})
      tl.from(para,{opacity:0,x:'50',stagger:.2,duration:.5})
      },[])
  const [startCounter,setStartCounter] = useState(false)
  return (
    <YellowBack roundedBottom classha={styles.bgYellow}  opacity={"opacity-[0.95]"} > 
        <span className={`left-0 ${styles.counterBrandIcon}`}>
            <Image src={brandIcon} alt="brand icon"/>
        </span>
        <div className="pt-1 pb-1 flex items-center flex-col  max-1394 mx-auto  overflow-hidden relative" >
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
        {({isVisible})=>{ 
          if(isVisible){
            setStartCounter(true)
          }
          return(
            <div className="flex  md:px-10 lg:px-0 relative lg:w-3/6 md:1/2 w-full gap-y-8 flex-wrap justify-between text-center ">
                <div className='flex flex-col text-grey  md:w-auto w-1/2 '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={20}/>}{startCounter && "K+"}</span>
             <span className="light-font">
             Deliveries per day
                </span>
                </div>
                <div className='flex  md:order-2 flex-col order-3 text-grey md:w-auto w-full '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={500}/>}{startCounter && "+"}</span>
             <span className="light-font">
             eCommerce & Corporate Clients

                </span>
                </div>
                <div className='flex flex-col text-grey order-2 md:order-3   md:w-auto w-1/2 '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={7}/>}{startCounter && "M+"}</span>
             <span className="light-font">
             Active Clients
                </span>
                </div>
            </div>)

}}
            </VisibilitySensor>
            <div className="lg:w-2/3   w-full flex-col lg:flex-row  gap-y-[19px] flex gap-x-8 relative lg:mt-28 md:mt-20 mt-10  items-center">
                <div ref={imgContainer} className={`img_container ${styles.mdImg}`}>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={mdImage} alt="MD"/>    
                </div> 
                <div ref={textContainer} className='text-grey lg:px-0 md:px-10 px-[18px] '>
                    <h5 className="lg:text-3xl md medium-font uppercase mb-3 text-center text-xl lg:text-left">
                        Md message
                    </h5>
                    <p className='light-font mb-3'>
                    Thank you for considering Zajil Express as your business partner for shipping and logistics. We are committed to your success and prove that every day with a more than just capital investments in technology and infrastructure. Our people are eager to earn your business by delivering superior service to exceed your expectations.
                    </p>
                    <p className='light-font mb-3'>
                    We are very proud of what we have been able to achieve in terms of customer satisfaction through a good synthesis of service and dynamic growth in capabilities and scope. We remain committed to expanding our abilities to meet the needs of increased economic demand for shipping and logistics, but we will never sacrifice customer satisfaction for growth opportunity.
                        </p>
                    <p className='light-font'>
                    The Zajil family looks forward to meeting your needs for success! 
                        </p>
                    <p className='light-font'>
                    Yasser AlKadi
                        </p>
                </div>   
            </div>
        </div>
    </YellowBack>
  )
}

export default Counter