import box from '../../assets/NewImages/svg/specialBox.svg'
import brandIcon from '../../assets/NewImages/about/image/history-brand.svg' 
import Image from 'next/image'
import styles from '../../styles/About.module.css' 
import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useRef, useState } from "react"
import {gsap} from "gsap/dist/gsap"
import{ ScrollTrigger }from "gsap/dist/ScrollTrigger" 
import yellowBox from '../../assets/images/svg/box-yellow.svg' 
gsap.registerPlugin(ScrollTrigger)

const History = () => {
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [show4,setShow4] = useState(false)
    const [show5,setShow5] = useState(false)
    const content = useRef() 
   
    useEffect(()=>{
      const tl = gsap.timeline({scrollTrigger:{
        trigger:content.current, 
      }
    }) 
      const cube = content.current.querySelector('.box')
      const heading = content.current.querySelector('h4')
      const para = content.current.querySelector('p')
       
      tl.from(cube,{opacity:0,y:'50',duration:.5})
      .from(heading,{opacity:0,y:'50',duration:.5})
      .from(para,{opacity:0,y:'50',duration:.5})
      },[])

  return (
    <section className={` flex flex-col relative items-center  pb-28 ${styles.historyContainer}`}>
        <span className={`hidden md:block ${styles.kamalDekho}`}>

        </span>
        <span className={`hidden md:block ${styles.historyYellowTop}`}>

        </span>
        <span className='absolute md:top-0 md:left-0 top-[-26px] left-[-44px]'>
            <Image src={brandIcon} alt='brandIcon'/>
        </span>
        <div ref={content} className='text-center  md:pt-0 pt-16'>
 
                 <span className="box">
        <Image src={yellowBox} alt="Yellow Box" />
    </span>
            <h4 className="md:text-3xl text-xl text-blue uppercase medium-font mb-3 ">
                History
            </h4>
             <p className="text-grey light-font   text-center ">
           Founded in 1999, Zajil has grown through professional management, expansive <br />
           capital investment, and corporate acquisitions.
            </p> 
        </div>
            <div className={`mt-14   w-69 max-1394 mx-auto  md:overflow-visible  relative ${styles.historyItems}`}>
             <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
             {({isVisible})=>{
          if(isVisible){
              setShow1(true)
              
            } 
            
                    if(show1 ){return (    <div className={`md:w-1/2 w-full flex flex-col md:pl-10 pb-6 transition-all duration-300 relative fadeLeftt ${styles.firstHistoryItem}`}>
                        <span className="text-blue bold-font relative pb-2 md:pl-0 pl-4 mb-4 v  border-b border-yellow text-4xl">
                        1999    
                        <span className={`z-10 ${styles.rightBox}`}>
                            <Image width={20} height={20} src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font text-grey fadeLeftt md:pl-0 pl-4 ">
                    Zajil begins as a store-to-store express company with 2 locations in KSA. New locations are continually added.
                    </span>
                </div>)}else{ return <div className='min-h-40 w-100 opacity-0'>dre</div>}
                    
                }}
                </VisibilitySensor>
             <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
             {({isVisible})=>{
          if(isVisible){
              setShow2(true)
            
          }
            
                    if(show2 ){return (    <div className='md:w-1/2 w-full flex flex-col  ml-auto pr-6 fadeRightt'>
                    <span className="text-blue bold-font pl-6  relative pb-2 mb-4 fadeRightt  border-b border-yellow text-4xl ">
                        2015    
                        <span className={styles.leftBox}>
                            <Image width={20} height={20} src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font  pl-6 text-grey pb-4 fadeRightt">
                    Now with more than 10 locations, Zajil becomes the first privately-owned company to be licensed for postal delivery service in KSA. Acquires Hat International (HATEX) and expands into line hauling and heavy shipping, and other B2B services.
                     </span>
                     <ul className=' flex flex-col gap-y-2 pl-4  pb-4 md:pb-0'>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Line Haul / Fleet Shipping
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Heavy Shipping
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         B2B Delivery 
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Cold delivery (temperature controlled)
                         </li>
                     </ul>
                     
                </div>)}else{ return <div className='min-h-40 w-100 opacity-0'>dre</div>}
                    
                }}
                </VisibilitySensor>
             <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
             {({isVisible})=>{
          if(isVisible){
              setShow3(true)
            
          }
            
                    if(show3 ){return (  <div className='md:w-1/2 w-full flex flex-col md:pl-10 pb-6 fadeLeftt'>
                    <span className="text-blue bold-font relative md:pl-0 pl-4 pb-2 mb-4  fadeLeftt  border-b border-yellow text-4xl">
                    2018    
                        <span className={styles.rightBox}>
                            <Image width={20} height={20} src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font fadeLeftt text-grey  md:pl-0 pl-4">
                    Now with more than 100 locations, new milestones of 115k shipments per month with fleet of 126 and 80 destinations. <br /> New capabilities added: </span>
                    <ul className=' flex flex-col gap-y-2 mt-3 fadeLeftt md:pl-0 pl-4'>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Last-mile Delivery (LMD) for B2C customers
                         </li>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Door-to-door service (from warehouse to residential)
                         </li> 
                     </ul>
                </div>)}else{ return <div className='min-h-40 w-100 opacity-0'>dre</div>}
                    
                }}
                </VisibilitySensor>
             <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
             {({isVisible})=>{
          if(isVisible){
              setShow4(true)
            
          }
            
                    if(show4 ){return (    <div className='md:w-1/2 w-full flex flex-col  ml-auto pr-6  fadeRightt'>
                    <span className="text-blue bold-font pl-6  relative pb-2 mb-4 fadeRightt  border-b border-yellow text-4xl ">
                    2020    
                        <span className={styles.leftBox}>
                            <Image width={20} height={20} src={box} alt='box'/>
                        </span>
                    </span>
                    <span className="medium-font  pl-6 text-grey pb-4 fadeRightt">
                    Zajil delivers 416k shipments per month on average to 279 destinations.
                     </span>
                     <ul className=' flex flex-col gap-y-2 pl-4 fadeRightt pb-4 md:pb-0'>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Fulfillment operation (optimized for E-commerce customers)
                         </li>
                         <li className={`medium-font  pl-6 text-grey ${styles.historyListItem}`}>
                         Expanded to China, UAE, Bahrain, Kuwait, USA.
                         </li>
                         
                     </ul>
                     
                </div>)}else{ return <div className='min-h-40 w-100 opacity-0'>dre</div>}
                    
                }}
                </VisibilitySensor>
             <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
             {({isVisible})=>{
          if(isVisible){
              setShow5(true)
            
          }
            
                    if(show5 ){return (    <div className={`md:w-1/2 w-full flex flex-col md:pl-10 pb-6 relative  fadeLeftt ${styles.lastHistoryItem}`}>
                    <span className="text-blue bold-font md:pl-0 pl-4 relative pb-2 mb-4   fadeLeftt border-b border-yellow text-4xl">
                    2021    
                        <span className={`z-10 ${styles.rightBox}`}>
                            <Image width={20} height={20} src={box} alt='box'/>
                        </span>
                    </span>
                    <span className={`medium-font text-grey fadeLeftt md:pl-0 pl-4 `}>
                    Rapid expansion continues despite Covid-19 pandemic. 20k deliveries per day (600k+/mo), for more than 7M customers.  <br /> New shipping and logistics services added: 
                     </span>
                    <ul className=' flex flex-col gap-y-2 mt-3 fadeLeftt md:pl-0 pl-4'>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Fulfillment
                         </li>
                         <li className={`medium-font  pl-4 text-grey ${styles.historyListItem}`}>
                         Freight Forwarding (Air)
                         </li> 
                     </ul>
                </div>)}else{ return <div className='min-h-40 w-100 opacity-0'>dre</div>}
                    
                }}
                </VisibilitySensor>
                
                
               
               
            </div>
    </section>
  )
}

export default History