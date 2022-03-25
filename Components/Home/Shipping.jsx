import yellowBox from '../../assets/images/svg/box-yellow.svg'
import shipment from '../../assets/NewImages/svg/Create-Shipment.svg'
import branch from '../../assets/NewImages/svg/Find-Nearest-Branch.svg'
import calculator from '../../assets/NewImages/svg/Price-Calculator.svg'
import Image from 'next/image'
import CTA from './CTA'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Shipping = () => {

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
    <section ref={content} className=" flex flex-col items-center md:pt-16 pt-14">
      <span className="box">
        <Image src={yellowBox} alt="Yellow Box" />
      </span>
      <h4 className="md:text-3xl text-xl text-blue uppercase medium-font mb-3  ">
        Shipping Simplified
      </h4>
      <p className="text-grey light-font  md:w-3/5 w-4/5  text-center ">
        Zajil is more than just the preferred partner for KSA businesses. <br />
        We are committed to deliver an outstanding experience for personal shipping, too.
      </p>
      <div className="w-4/5 max-1394 flex justify-between text-grey mt-12  gap-y-8 flex-wrap ">

        <Link href="/shipment" >
          <a className="md:w-1/3 w-1/2 flex md:border-r border-borderGrey 	 parent items-center justify-center flex-col pt-2 pb-2 gap-y-3" >
            <span className='hover:scale-[1.2] transition-all duration-300'>
              <Image  src={shipment} alt='Cretae Shipment' />
            </span>
            <span className='parent-hover:text-blue parent-hover:medium-font transition-all'>Create Shipment</span>
          </a>
        </Link>
        <Link href="/branches" >
          <a className="md:w-1/3 w-1/2 flex md:border-r border-borderGrey  parent items-center justify-center flex-col pt-2 pb-2 gap-y-3" >
            <span className='hover:scale-[1.2] transition-all duration-300'>
              <Image  src={branch} alt='Cretae Shipment' />
            </span>
            <span className='parent-hover:text-blue parent-hover:medium-font transition-all '>Find Nearest Branch</span>
          </a>
        </Link>
        <Link href="/get-pricing" >
          <a className="md:w-1/3 w-5/12 flex md:border-none border-t border-borderGrey  mx-auto md:mx-0  	 parent items-center justify-center flex-col pt-6 pb-2 gap-y-3" >
            <span className='hover:scale-[1.2] transition-all duration-300'>
              <Image  src={calculator} alt='Cretae Shipment' />
            </span>
            <span className='parent-hover:text-blue parent-hover:medium-font transition-all'>Price Calculator</span>
          </a>
        </Link>
      </div>
      <div className={` md:mt-20 mt-12 md:-mb-4 mb-[-140px] z-10 relative ${styles.eightyeightpercent}`}>
        <CTA />
      </div>
    </section>
  )
}

export default Shipping