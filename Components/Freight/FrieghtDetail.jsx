import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import mobFram from '../../assets/images2/svg/mobile-frame.svg'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import aeroplane from '../../assets/NewImages/freight/image/global-market.jpg'
import warehouse from '../../assets/NewImages/freight/image/global-partner.jpg'
import Form from '../Form'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const FrieghtDetail = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 880 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 880, min: 0 },
            items: 2.3
        }
    };

    const content = [
        {
            id: 1,
            mainHeading: "Air Freight",
            heading: "Ship to more than 100 countries with time-sensitive materials.",
            paraOne: "Discover affordable and flexible air freight solutions that accommodate dynamic and time-sensitive materials. Talk to Zajil about LTL options and lock-in your rates. Start today!",
        },
        {
            id: 2,
            mainHeading: "Sea Freight",
            heading: "Expand to global markets with Zajil affordability and scale",
            paraOne: "Gain entry to global markets with Sea Freight solutions from Zajil. Discover how Zajil distribution centers at major ports and terminals present valuable opportunities for your shipping and logistics. Talk to a Zajil Business Freight Solution architect today.",
        },
        {
            id: 3,
            mainHeading: "Land Freight",
            heading: "Affordable expansion into surrounding markets",
            paraOne: "KSA-based Zajil is uniquely qualified to deliver freight to GCC businesses and consumers. Get started with a custom network with scalable capacity for business freight within the GCC region. Or discover how Zajil can help configure a multi-modal solution no matter the country of origin or destination. Get started today."
        },
        {
            id: 4,
            mainHeading: "Custom Clearance",
            heading: "Clear customs with Zajil Quality Checks and Documentation Services.",
            paraOne: "Keep your business in motion by avoiding delays at country borders with Zajil Clearance. We ensure complete and accurate documentation to streamline cross-border shipping and delivery. We will even advance duties and tariffs if required. And with Zajil Factoring, you can even get important access to funds to take advantage of new opportunity without slowing down your lines of supply. Learn more about how Zajil Clearance can improve your global business expansion plan. Talk to a Zajil Business Freight Solution Architect today.",
        }
    ]

    const [visibleTab, setVisibleTab] = useState(content[0].id)

    const textContainer = useRef()
    const imgContainer = useRef()
    const carouselImg = useRef()
    const carouselContent = useRef()

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imgContainer.current,
            }
        })
        const carouselTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: carouselImg.current,
            }
        })
        const cube = textContainer.current.querySelector('.box')
        const heading = textContainer.current.querySelector('h2')
        const para = textContainer.current.querySelector('p')

        tl.from(cube, { opacity: 0, x: '-50', duration: .5 })
            .from(heading, { opacity: 0, x: '-50', duration: .5 })
            .from(para, { opacity: 0, x: '-50', duration: .5 })
            .from(imgContainer.current, { opacity: 0, x: '150', duration: .5 })

        const carouselHeading = carouselContent.current.querySelector('h2')
        const carouselPara = carouselContent.current.querySelectorAll('p')
        const carouselAnchor = carouselContent.current.querySelector('a')
        console.log(carouselImg.current)
        carouselTimeline.from(carouselImg.current, { opacity: 0, x: '-150', duration: 1 })
            .from(carouselHeading, { opacity: 0, x: '50', duration: .5 })
            .from(carouselPara, { opacity: 0, x: '50', stagger: 0.2, duration: .5 })
            .from(carouselAnchor, { opacity: 0, x: '50', duration: .5 })


    }, [])
    return (
        <div className={`${styles.BlueSection}`}>
            <div className=' max-1394 mx-auto overflow-hidden xl:px-20 xl:pt-24 px-[18px] pt-[56px] relative'>
                <div className={`flex lg:flex-nowrap flex-wrap-reverse justify-between items-center gap-x-16`}>
                    <div ref={textContainer} className=' xl:mt-0 mt-[35px] '>
                        <span className='box'>
                            <Image src={yellowBox} alt="Yellow Box" />
                        </span>
                        <h2 className='text-3xl   medium-font text-grey mt-2'>Tap into the experience and capacity of a  <span className='text-3xl medium-font text-blue'>global <br /> logistics partner</span>.</h2>
                        <p className='text-base light-font text-grey mt-5 pr-5'>Learn how to get the most value from available bulk item shipping and freight with Zajil. From traditional domestic Drayage to intermodal and multi-configuration container transport anywhere on Earth, Zajil has the technology and the expertise to optimize a shipping and receiving network that suits your business needs.</p>
                        <p className='text-base light-font text-grey mt-5 pr-5 pb-5'> Our growing footprint includes distribution centers and customs experts in major economic hubs on every continent. Discover how Zajil can expand your capacity to meet demand and acquire new opportunity in a global market. Talk to a Zajil Business Freight Solution Architect today.</p>
                    </div>

                    <div ref={imgContainer} className={`img_container img-border rounded-lg overflow-hidden relative ${styles.freightImage}`}>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={warehouse} alt="Global Market" />
                    </div>
                    <span className='absolute top-[22px] lg:hidden block right-[7px]'>
                        <Image src={mobFram} alt="Mobile Frame" />
                    </span>
                </div>
                <div className={`${styles.freightCarousel} flex justify-between mt-28 freightCarousel`}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} renderArrowsWhenDisabled={false} responsive={responsive} >
                        {content.map(item =>
                            <p key={item?.id}  onClick={() => setVisibleTab(item.id)} className={`cursor-pointer text-center text-lg text-grey medium-font  w-full	${visibleTab === item.id ? styles.active : styles.noborder}`}>{item.mainHeading}</p>
                        )}
                    </Carousel>
                </div>
            </div>
            <div className={`h-auto ${styles.bottomContent}`}>
                <div className='xl:px-20 max-1394 mx-auto xl:py-16 py-[55px] px-[18px]'>
                    {content.map(item =>
                        <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex lg:flex-nowrap flex-wrap justify-between gap-x-12'>
                            <span ref={carouselImg} className={`img_container  img-border ${styles.slickImage}`}>
                                <Image placeholder='blur' blurDataURL='/blur.webp' src={aeroplane} alt="Aeroplane" />
                            </span>
                            <div ref={carouselContent} className={`flex justify-center xl:mt-0 mt-[34px] flex-col`}>
                                <h2 className='xl:text-3xl text-[22px] w-full medium-font text-grey xl:w-9/12 '>{item.heading}</h2>
                                <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p>
                            </div>
                        </div>

                    )}
                </div>
            </div>
            <Form  heading={"Frieght"}/>
        </div>
    )
}

export default FrieghtDetail