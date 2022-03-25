import styles from '../../../arStyles/Home.module.css'
import overlays from '../../../arStyles/Overlays.module.css'
import boxWhite from '../../../assets/NewImages/svg/box-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import brandIcon from '../../../assets/NewImages/index/image/brandIcon2.svg'
import brandIconSmall from '../../../assets/NewImages/index/image/brandIcon.svg'
import YellowBack from '../YellowBack'
import accordionImage from '../../../assets/NewImages/index/image/customize-ur-business.jpg'
import accordionImage2 from '../../../assets/NewImages/index/image/ecommerce.jpg'
import accordionImage3 from '../../../assets/NewImages/index/image/fulfilment.jpg'
import accordionImage4 from '../../../assets/NewImages/index/image/domestic-distribution.jpg'
import { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Logistics = () => {

    const [showImage, setShowImage] = useState(true)
    const [showImage2, setShowImage2] = useState(false)
    const [showImage3, setShowImage3] = useState(false)
    const [showImage4, setShowImage4] = useState(false)


    const handleAccordion = (itemNumber) => {
        const headings = document.querySelectorAll("." + styles.accordionHeading)

        headings.forEach((heading, index) => {
            if (index === itemNumber) {
                heading.parentElement.classList.contains(styles.active)?
                heading.parentElement.classList.remove(styles.active):
                heading.parentElement.classList.add(styles.active)
                setShowImage(() => index === 0 && true)
                setShowImage2(() => index === 1 && true)
                setShowImage3(() => index === 2 && true)
                setShowImage4(() => index === 3 && true)
            } else {

                heading.parentElement.classList.remove(styles.active)
            }
        })
    }

    const content = useRef(null)
    useEffect(()=>{ 
        const tl = gsap.timeline({scrollTrigger:{
            trigger:content.current, 
          }
        }) 
        const cube = content.current.querySelector('.box')
        const heading = content.current.querySelector('h4') 
        tl.from(cube,{opacity:0,y:'50',duration:.5})
        .from(heading,{opacity:0,y:'50',duration:.5}) 
    },[])

    return (
        <YellowBack opacity={"opacity-[0.95]"}>

            <span className={`absolute -bottom-20 `}>
                <Image src={brandIcon} alt="brand-icon" />
            </span>
            <span className={`${styles.accordionBrandIcon}`}>
                <Image src={brandIconSmall} alt="brand-small-icon" />
            </span>
            <div ref={content} className='flex flex-col items-center gap-y-2 '>
                <span className="box">
                    <Image src={boxWhite} alt='cube' />
                </span>
                <h4 className="relative md:text-3xl text-xl w-2/3 text-center -mt-2 text-grey uppercase medium-font">Customize Your Business Logistics</h4>
            </div>
            <div className={`max-1394 mx-auto flex gap-y-9 text-white relative overflow-hidden hidden md:flex flex-col bg-yellow ${styles.accordion}`}>
                <span className={overlays.accordionOverlayAr}>
                </span>
                <span className={overlays.accordionOverlayAr2}>
                </span>
                {showImage && <span className='fade absolute top-0 img_container w-full h-full'>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage2} alt={accordionImage} />
                </span>}
                {showImage2 && <span className='fade absolute top-0 img_container w-full h-full'>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage} alt={accordionImage} />
                </span>}
                
                {showImage3 && <span className='fade absolute top-0 img_container w-full h-full'>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage3} alt={accordionImage} />
                </span>}
                {showImage4 && <span className='fade absolute top-0 img_container w-full h-full'>
                    <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage4} alt={accordionImage} />
                </span>} 
                <div className={` flex flex-col gap-y-2  ${styles.accordionItem} ${styles.active}`}>
                    <span className={`text-2xl relative  medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={() => handleAccordion(0)}>eCommerce</span>
                    <span className=" light-font relative z-10  md:w-6/12 lg:w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                    <Link href="/ecommerce">
                        <a className='text-sm relative tracking-wide  z-10  mt-4 medium-font underline '>
                            Learn More
                        </a>
                    </Link>
                    <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
                </div> 
                <div  className={` flex flex-col gap-y-2  ${styles.accordionItem} `}>
                    <span className={`text-2xl  medium-font relative cursor-pointer z-10  ${styles.accordionHeading}`} onClick={() => handleAccordion(1)}>Freight Services</span>
                    <span className=" light-font relative z-10  md:w-6/12 lg:w-1/3">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                    <Link href="/freight">
                        <a className='text-sm relative tracking-wide  z-10 mt-2 medium-font underline '>
                            Learn More
                        </a>
                    </Link>
                    <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
                </div>
                <div className={` flex flex-col gap-y-2  ${styles.accordionItem}`}>
                    <span className={`text-2xl  relative medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={() => handleAccordion(2)}>Fulfilment</span>
                    <span className=" light-font relative z-10  md:w-6/12 lg:w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                    <Link href="/fulfilment">
                        <a className='text-sm relative tracking-wide  z-10  mt-4 medium-font underline '>
                            Learn More
                        </a>
                    </Link>
                    <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
                </div>
                <div className={` flex flex-col gap-y-2  ${styles.accordionItem}`}>
                    <span className={`text-2xl  relative medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={() => handleAccordion(3)}>Domestic Distribution</span>
                    <span className=" light-font relative  z-10  md:w-6/12 lg:w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                    <Link href="/ksadistribution">
                        <a className='text-sm relative tracking-wide   z-10 mt-4 medium-font underline '>
                            Learn More
                        </a>
                    </Link>
                    <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
                </div>


            </div>
            <div className='flex md:hidden  mt-7 flex-col gap-y-[22px]'>
              
                <div className='flex  text-white relative overflow-hidden h-[258px] z-10'>
                <span className={overlays.accordionOverlayAr}>
                    </span>
                    <span className={overlays.accordionOverlayAr2}>
                    </span>
                    <span className='fade absolute top-0 img_container w-full h-full'>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage2} alt={accordionImage2} />
                    </span>
                    <div className={` flex justify-center pl-5 pr-6 flex-col gap-y-2  `}>
                        <span className={`text-2xl relative  medium-font cursor-pointer z-10  `}>eCommerce</span>
                        <span className=" light-font relative z-10   ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                        <Link href="/ecommerce">
                            <a className='text-sm relative tracking-wide  z-10  mt-4 h-[34px] flex justify-center items-center w-[127px] border-yellow border rounded-md medium-font  '>
                                Learn More
                            </a>
                        </Link> 
                    </div>
                </div>
                <div className='flex text-white relative overflow-hidden h-[258px] z-10'>
                <span className={overlays.accordionOverlayAr}>
                    </span>
                    <span className={overlays.accordionOverlayAr2}>
                    </span>
                    <span className='fade absolute top-0 img_container w-full h-full'>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage} alt={accordionImage} />
                    </span>
                    <div className={` flex justify-center pl-5 pr-6 flex-col gap-y-2  `}>
                        <span className={`text-2xl relative  medium-font cursor-pointer z-10  `}>Freight Services</span>
                        <span className=" light-font relative z-10   ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy. </span>
                        <Link href="/freight">
                            <a className='text-sm relative tracking-wide  z-10  mt-4 h-[34px] flex justify-center items-center w-[127px] border-yellow border rounded-md medium-font  '>
                                Learn More
                            </a>
                        </Link> 
                    </div>
                </div>
                <div className='flex  text-white relative overflow-hidden h-[258px] z-10'>
                <span className={overlays.accordionOverlayAr}>
                    </span>
                    <span className={overlays.accordionOverlayAr2}>
                    </span>
                    <span className='fade absolute top-0 img_container w-full h-full'>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage3} alt={accordionImage3} />
                    </span>
                    <div className={` flex justify-center pl-5 pr-6 flex-col gap-y-2  `}>
                        <span className={`text-2xl relative  medium-font cursor-pointer z-10  `}>Fulfilment</span>
                        <span className=" light-font relative z-10   ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                        <Link href="/fulfilment">
                            <a className='text-sm relative tracking-wide  z-10  mt-4 h-[34px] flex justify-center items-center w-[127px] border-yellow border rounded-md medium-font  '>
                                Learn More
                            </a>
                        </Link> 
                    </div>
                </div>
                <div className='flex  text-white relative overflow-hidden h-[258px] z-10'>
                <span className={overlays.accordionOverlayAr}>
                    </span>
                    <span className={overlays.accordionOverlayAr2}>
                    </span>
                    <span className='fade absolute top-0 img_container w-full h-full'>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={accordionImage4} alt={accordionImage4} />
                    </span>
                    <div className={` flex justify-center pl-5 pr-6 flex-col gap-y-2  `}>
                        <span className={`text-2xl relative  medium-font cursor-pointer z-10  `}>Domestic Distribution</span>
                        <span className=" light-font relative z-10   ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                        <Link href="/ksadistribution">
                            <a className='text-sm relative tracking-wide  z-10  mt-4 h-[34px] flex justify-center items-center w-[127px] border-yellow border rounded-md medium-font  '>
                                Learn More
                            </a>
                        </Link> 
                    </div>
                </div>
            </div>

        </YellowBack>
    )
}

export default Logistics