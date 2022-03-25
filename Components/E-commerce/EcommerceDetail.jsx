import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import titanic from '../../assets/NewImages/ecommerce/image/ecomerce-file.jpg'
import mobFram from '../../assets/images2/svg/mobile-frame.svg'
import ch from '../../assets/NewImages/ecommerce/image/reliable-Performance-From-a-Trusted-Brand.jpg'
import HomeCarousel from './Carousel'
import Form from '../Form'
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import Link from 'next/link'

const EcommerceDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "SME Solutions",
            heading: "Reliable performance from a trusted brand.",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success. ",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-on-delivery services to reduce costs and streamline performance. Zajil’s solutions for Small- to Medium Enterprises can expand more than your reach—they enhance your customer experience! Talk to a Business Logistics Solution Architect at Zajil today"
        },
        {
            id: 2,
            mainHeading: "Return Services",
            heading: "Reduce cost of product the returns.",
            paraOne: "Zajil offers the most attractive rates for return programs in need of inventory management, pick-up and delivery, and even COD services. Discover how Zajil can reduce your costs by improving your level of service. Talk to a Zajil E-commerce Solution Architect today."
        },
        {
            id: 3,
            mainHeading: "Door-to-Door",
            heading: "Door-to-door “white glove” shipping and delivery for the premier customer experience.",
            paraOne: "Manage your customer experience from a single pane of glass with Zajil. Bring a higher level of service, well-managed and at affordable rates. Learn how. Talk to a Zajil E-commerce solution architect today."
        },
        {
            id: 4,
            mainHeading: "Fulfillment",
            heading: "Improve margins and customer experience.",
            paraOne: "Improve your business margins through flexible billing with Zajil’s affordable e-commerce fulfillment services. Our distributed warehousing and inventory solutions are the perfect solutions for a growing business with an eye on global markets. Talk to a Zajil Fulfillment expert today."
        },
        {
            id: 5,
            mainHeading: "B2C",
            heading: "Expand your consumer business with business-grade shipping & logistics.",
            paraOne: "Consumer-facing work requires the extra attention to detail that Zajil is uniquely qualified to deliver. Discover how affordable a superior customer experience can be. Talk to a Zajil Business Solution Architect today."
        },
        {
            id: 6,
            mainHeading: "Co Packing",
            heading: "Consolidate goods for single-item delivery.",
            paraOne: "Get the shrink-wrapping, re-labeling, or re-packing services you need for a great buying experience. Zajil Co-packing is a great option for e-commerce businesses selling discounted fast-moving consumer goods (FMCG) who need to protect their margins. Learn more. Talk to a Zajil Co-packing expert today."
        },
        {
            id: 7,
            mainHeading: "Cross Border Delivery",
            heading: "E-commerce markets without borders.",
            paraOne: "Sell to a global market with confidence. Zajil helps you avoid customs and border roadblocks before you ship—and avoid surprise freight and shipping costs—in advance, for a great customer buying experience. Learn why cross-border delivery services are an important part of a global e-commerce selling operation. Talk to a Zajil E-commerce expert today."
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
                <div className=' '>
                    <div className={`max-1394 mx-auto overflow-hidden flex xl:flex-nowrap relative lg:flex-nowrap flex-wrap-reverse justify-between xl:px-20 xl:pt-24 pt-[57px] px-[18px]`}>
                        <div ref={textContainer} className='xl:w-4/12 w-full xl:mt-0 mt-[35px]'>
                            <span className='box'>
                                <Image src={yellowBox} alt="Yellow Box" />
                            </span>
                            <h2 className='xl:text-3xl text-xl medium-font text-grey mt-2 pr-2 xl:pr-0 pr-[78px]'>Meet Global Demand With Confidence Powered By Zajil <span className='xl:text-3xl text-xl medium-font text-blue'>E-commerce</span> Solutions</h2>
                            <p className='text-base light-font text-grey mt-6'>Backed by the experience and resources of Saudi Arabia’s first privately operated postal service, Zajil customers receive the benefit of our extensive and affordable network</p>
                        </div>
                        <span ref={imgContainer} className={`img_container rounded-lg overflow-hidden ${styles.ecommerceImg}`}>
                            <Image placeholder='blur' blurDataURL='/blur.webp' src={titanic} alt="Titanic" />
                        </span>
                        <span className='absolute top-[22px] lg:hidden block right-[7px]'>
                            <Image src={mobFram} alt="Mobile Frame" />
                        </span>
                    </div>
                    <HomeCarousel  content={content} setVisibleTab={setVisibleTab} visibleTab={visibleTab} />
                </div>
                <div className={`h-auto ${styles.bottomContent}`}>
                    <div className='xl:px-20 xl:py-16 px-[18px] py-[54px] '>
                        {content.map(item =>
                            <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='max-1394 mx-auto flex xl:flex-nowrap lg:flex-nowrap flex-wrap justify-between'>
                                <span ref={carouselImg} className={`rounded-mmd overflow-hidden relative img_container  ${styles.wareHouseSetting} ${styles.ecomImg}`}>
                                    <Image  placeholder='blur' blurDataURL='/blur.webp' src={ch} alt="Delivery Boy" />
                                </span>
                                <div ref={carouselContent} className={`${styles.w44} flex justify-center flex-col xl:mt-0 mt-[34px]`}>
                                    <h2 className='xl:text-3xl text-[22px] medium-font text-grey xl:w-2/3 pr-4 '>{item.heading}</h2>
                                    <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p>
                                    <p className='text-base light-font text-grey mt-8'> {item.paraTwo}</p>
                                    {/* <Link href='#'>
                                        <a className='text-base medium-font text-grey mt-6 underline cursor-pointer'>
                                            {item.link}
                                        </a>
                                    </Link> */}
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                <Form  heading={"Ecommerce"}/>
            </div>
        </>
    )
}

export default EcommerceDetail