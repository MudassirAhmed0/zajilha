import Image from "next/image"
import styles from '../../../arStyles/Home.module.css'
import simp from '../../../assets/NewImages/about/image/about-zajil-exprece-image.jpg'
import yellowCube from '../../../assets/NewImages/svg/box-yellow.svg'
import box from '../../../assets/NewImages/svg/box-size-large-white.svg' 
import { useEffect, useRef } from "react"
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
    const para = textContainer.current.querySelectorAll('p')
    
    tl.from(cube,{opacity:0,x:'-50',duration:.5})
    tl.from(heading,{opacity:0,x:'-50',duration:.5})
    tl.from(para,{opacity:0,x:'-50',stagger:.2,duration:.5})
    tl.from(imgContainer.current,{opacity:0,x:'150',duration:.5})
    },[])
  return (
    <div className=" max-1394 mx-auto overflow-hidden  relative  flex-col-reverse flex  gap-y-8  lg:flex-row md:pl-20 md:pr-20 pl-5 pr-5 pt-14 lg:pt-28 pb-24 relative items-center justify-between gap-x-14">
      
        <div ref={textContainer} className="flex flex-col justify-center items-start gap-y-3 ">
          <div className="box">
            <Image src={yellowCube} alt='Cube Icon'/>

          </div>
            <h4 className="md:text-3xl text-xl medium-font text-grey -mt-2">
            Simplified, Affordable Shipping And Logistics For Any Address In The World.

            </h4>
            <p className="light-font text-grey mb-4">
            The company has expanded into global shipping and logistics, growing from simple express delivery between two locations in KSA to a global e-commerce logistics solution provider. This stable, yet rapid expansion has been— and continues to be— fueled in large part by the entrepreneurship of its founders and the diligence of its people.  </p>
        <p className="light-font text-grey">
        Founded in 1990 with just two locations as the first private delivery service in the Kingdom of Saudi Arabia (KSA), Zajil Express now operates in more than 100 offices with more than 1,000 employees in 4 continents working hard to deliver more than 20,000 packages every day.
        </p>
        </div>

        <div ref={imgContainer} className={`rounded  relative overflow-hidden  ${styles.rightImage} ${styles.rightImage2}`}>
          <span className="w-full h-full img_container">
            <Image  placeholder='blur' blurDataURL='/blur.webp' src={simp} alt='simp' />
          </span>
        <div className={styles.brandIconSimplified}>
            <Image src={box} alt='box'/>
       </div>
        </div>
    </div>
  )
}

export default RightImage