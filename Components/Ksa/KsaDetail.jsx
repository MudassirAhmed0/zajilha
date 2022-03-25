import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import topImage from '../../assets/NewImages/ksa/image/First-Private-Postal.jpg'
import deliveryboy from '../../assets/NewImages/ksa/image/Business-to-Business-Services-from-Zajil.jpg'
import Form from '../Form'
import mobFram from '../../assets/images2/svg/mobile-frame.svg'
import Link from 'next/link'
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
gsap.registerPlugin(ScrollTrigger)

const KsaDetail = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
            mainHeading: "B2B",
            heading: "Business to Business Services from Zajil.",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
        },
        {
            id: 2,
            mainHeading: "D2D",
            heading: "Door-to-Door concierge service from Zajil for concierge shipping.",
            paraOne: "Our premier option for connecting warehouse goods to residential addresses. Improve the customer experience while meeting their modern expectation with our managed shipping and delivery service. Talk to a Zajil Door-to-Door Solution Architect today.",
        },
        {
            id: 3,
            mainHeading: "Same Day",
            heading: "Fast-track the way business is delivered. ",
            paraOne: "Receive service along optimized routes or custom capacity optimization to non-standard pick-up and delivery with Same Day Shipping from Zajil. Get started today. Talk to a Zajil Same-day Business Solution Architect.",
        },
        {
            id: 4,
            mainHeading: "Heavy Shipping",
            heading: "Business relies on Zajil for the heavy loads. ",
            paraOne: "Talk to our sales representative about your specialized equipment needs for heavy or bulky shipping. We meet custom needs with standard or over-sized containers and logistics, including dedicated capacity configurations. Talk to a Zajil Heavy Shipping Solution Architect today.",
        },
        {
            id: 5,
            mainHeading: "Drop Shipping",
            heading: "Do business without inventory overhead.",
            paraOne: "The perfect solution for e-commerce companies and others without overhead, Zajil domestic drop shipping offers seamless logistics to connect business opportunity to business customers throughout the KSA. Learn more. Talk to a Zajil Drop Shipping Solution Architect today.",
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

        tl.from(imgContainer.current, { opacity: 0, x: '-150', duration: .5 })
            .from(cube, { opacity: 0, x: '50', duration: .5 })
            .from(heading, { opacity: 0, x: '50', duration: .5 })
            .from(para, { opacity: 0, x: '50', duration: .5 })

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
            <div className=' max-1394 mx-auto overflow-hidden xl:px-20 xl:pt-24 relative px-[18px] pt-[56px]'>
                <div className={`flex xl:flex-nowrap flex-wrap  gap-x-10`}>
                    <div ref={imgContainer} className={`img_container img-border ksa-image ${styles.ksaImage}`}>
                        <Image placeholder='blur' blurDataURL='/blur.webp' src={topImage} alt="First Private postal" />
                    </div>

                    <div ref={textContainer} className='xl:w-4/12 w-full xl:mt-0 mt-[35px]'>
                        <span className='box'>
                            <Image src={yellowBox} alt="Yellow Box" />
                        </span>
                        <h2 className='text-3xl medium-font text-grey mt-2'>The <span className='text-3xl medium-font text-blue'>First Private Postal</span>  company in Saudi Arabia is also ranked highest in service..</h2>
                        <p className='text-base light-font text-grey mt-6'>Zajil is proud to extend a legacy that continues to meet the demands of a growing economic environment. Choose the distribution channel your business needs to grow and adapt to global business opportunities such as Same Day, Heavy Shipping, Drop Shipping, and Door-to-Door concierge service connecting warehousing to delighted residential occupants. Zajil puts new business opportunities within reach. Let’s get started!</p>
                    </div>
                    <span className='absolute top-[22px] lg:hidden block right-[7px]'>
                        <Image src={mobFram} alt="Mobile Frame" />
                    </span>
                </div>
                <div className={`${styles.ksaCarousel} flex justify-between mt-28`}>
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
                            <span ref={carouselImg} className={`img_container ${styles.wareHouseSetting}`}>
                                <Image  placeholder='blur' blurDataURL='/blur.webp' src={deliveryboy} alt="Delivery Boy" />
                            </span>
                            <div ref={carouselContent} className={`${styles.w44} flex justify-center xl:mt-0 mt-[34px] flex-col`}>
                                <h2 className='xl:text-3xl text-[22px] w-full medium-font text-grey xl:w-9/12'>{item.heading}</h2>
                                <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p>
                            </div>
                        </div>

                    )}
                </div>
            </div>
            <Form  heading={"Domestic Distribution"}/>
        </div>
    )
}

export default KsaDetail