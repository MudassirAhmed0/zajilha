import styles from '../../../arStyles/Home.module.css'
import overlay from '../../../arStyles/Overlays.module.css'
import Image from 'next/image'
import cube from '../../../assets/NewImages/svg/box-white.svg'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';
import videoBrandIcon from '../../../assets/NewImages/index/image/videoBrandIcon.png'
import { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Counter = () => {
  const [startCounter,setStartCounter] = useState(false) 
  const textContent = useRef()
 
  useEffect(()=>{
    const tl = gsap.timeline({scrollTrigger:{
      trigger:textContent.current, 
    }
  }) 
    const cube = textContent.current.querySelector('.box')
    const heading = textContent.current.querySelector('h4')
    
     tl.from(cube,{opacity:0,y:'50',duration:.5})
     .from(heading,{opacity:0,y:'50',duration:.5})
    },[])
  return ( 
    <section className={`  relative  ${styles.videoSection}  mt-24`}>
     
    
        <span className={`bg-cardTopYellow ${styles.yellowTop}`}></span>
        <span className={`bg-cardTopYellow ${styles.yellowBottom}`}></span>
      <div className={`relative  flex justify-between flex-col md:pt-16 md:pb-16 pt-12 pb-12 ${styles.videoContinaer}`}>
      <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video src="/video.mp4" autoPlay loop muted  className='md:object-[0px] object-[-5px] block w-full h-full object-cover'></video>  
      </span>
        <span className={overlay.videoTopOverlay}></span>
        <span className={overlay.videoTopOverlay2}></span>
        <span className={overlay.videoBottomOverlay}></span> 
        <span className={`absolute  w-full h0 full ${styles.videoBrandIcon}`}>
        <Image src={videoBrandIcon} alt='brandIcon'/>
      </span>
          <div ref={textContent} className="flex justify-center relative gap-y-3 flex-col items-center">
            <span className="box">
            <Image  src={cube} alt='cube'/>  
            </span>
            <h4 className="md:text-3xl text-xl text-yellow medium-font -mt-3">
              YES DELIVERED  
            </h4> 
          </div> 
        <VisibilitySensor partialVisibility offset={{ bottom: 0 }} >
        {({isVisible})=>{
          if(isVisible){
            setStartCounter(true)
          }
        return(
        <div className={` overflow-hidden max-1394 mx-auto  flex justify-between text-white flex-wrap relative gap-y-16 ${styles.counter}` }>
          <div className={`flex flex-col  md:w-1/3 lg:w-[110px] w-1/2 ${styles.counterItem}`}>
            <span className="md:text-5xl text-4xl  bold-font">
            {startCounter &&  <CountUp duration={3} end={7}/>}
            {startCounter && "M+"}
            </span>
            <span className="text-offWhite text-center md:mt-0 -mt-2">
              Active Clients
            </span>            
          </div>
          <div className={`flex flex-col md:w-1/3 lg:w-[110px]  w-1/2  ${styles.counterItem}`}>
            <span className="md:text-5xl text-4xl  bold-font">
         {startCounter &&   <CountUp duration={3} end={396}/>}
            </span>
            <span className="text-offWhite text-center md:mt-0 -mt-2">
            Courier Vans
            </span>            
          </div>
          <div className={`flex flex-col  md:w-1/3 lg:w-[110px]  w-1/2 ${styles.counterItem}`}>
            <span className="md:text-5xl text-4xl  bold-font">
          {startCounter &&  <CountUp duration={3} end={500}/>}{startCounter && "+"}
            </span>
            <span className="text-offWhite text-center md:mt-0 -mt-2">
            Corporate Clients
            </span>            
          </div>
          <div className={`flex flex-col md:w-1/3 md:ml-auto lg:w-[110px]  lg:ml-0 w-1/2 ${styles.counterItem}`}>
            <span className="md:text-5xl text-4xl  bold-font">
        {startCounter &&    <CountUp duration={3} end={1055}/>}
            </span>
            <span className="text-offWhite text-center md:mt-0 -mt-2">
            Employees
            </span>            
          </div>
          <div className={`flex flex-col md:w-1/3 lg:w-[110px]  md:mr-auto lg:mr-0 w-full  ${styles.counterItem}`}>
            <span className="md:text-5xl text-4xl  bold-font">
              117
            </span>
            <span className="text-offWhite text-center md:mt-0 -mt-2">
            KSA Branches
            </span>            
          </div>
        </div>)}}
        </VisibilitySensor>
      </div>
    </section>
  )
}

export default Counter