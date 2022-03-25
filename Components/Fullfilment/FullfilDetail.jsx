import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import FullFillsyles from '../../styles2/Fullfil.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import mobFram from '../../assets/images2/svg/mobile-frame.svg'
import titanic from '../../assets/NewImages/fulfilment/image/The-capacit-and-expertise-to-fuel-business-expansion.jpg'
import warehousing from '../../assets/NewImages/fulfilment/image/two-employees-checking-inventory-beside-racks-of-b-2021-08-28-17-37-40-utc.jpg'
import HomeCarousel from './Carousel'
import Form from '../Form'
import Link from 'next/link'
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const FullfilDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "Inventory",
            heading: "Sell inventory without the overhead.",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today."
        },
        {
            id: 2,
            mainHeading: "Warehousing",
            heading: "Reduce overhead with flexible leasing space from Zajil.",
            paraOne: "Manage costs with flexible warehousing and billing. Zajil's extensive on-demand or reserved warehousing capacity is available in KSA as well as major economic hubs on the major continents. Learn more. Talk to a Warehousing Solution Architect today."
        },
        {
            id: 3,
            mainHeading: "Last-mile Delivery",
            heading: "Bridge the gap between distribution center and your destination.",
            paraOne: "Tap into the extensive logistics network and capacity of Zajil for Last-mile Delivery (LMD). Our technology and infrastructure bring safety and reliability to final destination deliveries and complete the critical last stage of your supply chain. Talk to a Zajil LMD expert today."
        },
        {
            id: 4,
            mainHeading: "Bundle Shipping",
            heading: "Optimize inventory distribution and fulfillment of multi-order customers.",
            paraOne: "Zajil Bundling Service allows you to combine multiple orders into one optimized delivery, saving money while extending greater customer value. Protect your margins and expand your level of service to high-volume customers. Discover how to optimize your inventory distribution. Talk to a Zajil Bundling Expert today."
        },
        {
            id: 5,
            mainHeading: "Out of Delivery Area",
            heading: "Yes, Delivered – to the remotest parts of Earth.",
            paraOne: "While some shipping companies mark areas “off the grid,” inaccessible via their delivery routes, Zajil is committed to “Yes, Delivered.” We are committed to delivering your goods on-time, no matter where their destination may be. Accept orders with confidence from anywhere on Earth. Talk to a Zajil ODA expert today."
        },
        {
            id: 6,
            mainHeading: "Distribution",
            heading: "Optimize your sales channel with professional distribution. ",
            paraOne: "Get the help you need to exceed customer expectations and increase business with professional distribution network performance from Zajil. Talk to a Distribution Solution architect today."
        },
        {
            id: 7,
            mainHeading: "Pick-n-pack ",
            heading: "The ultimate in order fulfilment flexibility. ",
            paraOne: "Improve your balance sheet performance with flexible pick-and-pack solutions from Zajil. From dynamic staffing to remote inventory management, Zajil is ready to help you manage your business and a superior customer experience. Talk to Zajil today and get started."
        },
        {
            id: 8,
            mainHeading: "COD",
            heading: "Reduce risk with attractive COD services from Zajil.",
            paraOne: "Zajil helps Saudi businesses reduce risk inherent to some products and markets by collecting payment for goods at the time of delivery. Discover how this affordable service can add value to your business. Talk to Zajil today."
        },
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
        <>
            <div className={`${styles.BlueSection}`}>
                <div className='max-1394 mx-auto overflow-hidden xl:px-20 relative xl:pt-24 px-[18px] pt-[56px]'>
                    <div className={` flex lg:flex-nowrap flex-wrap-reverse items-center justify-between items-end gap-x-16`}>
                        <div ref={textContainer} className=' xl:mt-0 mt-[35px] '>
                            <span className='box'>
                                <Image src={yellowBox} alt="Yellow Box" />
                            </span>
                            <h2 className='text-3xl medium-font text-grey mt-2'>The capacity and expertise to fuel  <span className='text-3xl medium-font text-blue'>business expansion </span></h2>
                            <p className='text-base light-font text-grey mt-4 pb-4'>Zajil’s modern facilities, network, and technology are designed to help KSA businesses compete in a global economy. Get the scalability you need from a Saudi-based company who understands how to exceed your customers’ expectations. Let’s talk about how our Inventory, Warehousing, and Distribution network can expand your business, and even enhance your customer experience. Discover the value from our motto, “Yes, Delivered.”</p>
                        </div>

                        <div ref={imgContainer} className={`${FullFillsyles.fullfilsetimg} img_container rounded-lg overflow-hidden`}>
                            <Image placeholder='blur' blurDataURL='/blur.webp' src={titanic} alt="Capacity Expertise" />
                        </div>
                        <span className='absolute top-[22px] lg:hidden block right-[7px]'>
                            <Image src={mobFram} alt="Mobile Frame" />
                        </span>
                    </div>
                    <HomeCarousel fullfill content={content} setVisibleTab={setVisibleTab} visibleTab={visibleTab} />
                </div>
                <div className={`h-auto  ${styles.bottomContent}`}>
                    <div className='xl:px-20 xl:py-16 max-1394 mx-auto px-[18px] py-[53px]'>
                        {content.map(item =>
                            <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex lg:flex-nowrap flex-wrap justify-between gap-x-12'>
                                <span ref={carouselImg} className={`img_container ${styles.wareHouseSetting}`}>
                                    <Image placeholder='blur' blurDataURL='/blur.webp' src={warehousing} alt="Ware house" />
                                </span>
                                <div ref={carouselContent} className={` flex justify-center flex-col xl:mt-0 mt-[34px]`}>
                                    <h2 className='text-3xl medium-font text-grey '>{item.heading}</h2>
                                    <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                <Form  heading={"Fulfilment"}/>
            </div>
        </>
    )
}

export default FullfilDetail