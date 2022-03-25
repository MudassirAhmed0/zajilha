import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../arStyles2/Career.module.css'
import overlays from '../../../arStyles2/Overlays.module.css'
import yellowBox from '../../../assets/NewImages/svg/box-yellow.svg'
import whiteBox from '../../../assets/NewImages/svg/box-white.svg'
import chevron from '../../../assets/NewImages/svg/chevron.svg'
import brandIcon from '../../../assets/NewImages/svg/career-brand.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

const CareerDetail = () => {
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
            items: 2
        },
        mobile: {
            breakpoint: { max: 880, min: 0 },
            items: 1.1
        }
    };

    const handleAccordion = (itemNumber) => {

        const headings = document.querySelectorAll("." + styles.accordianH)

        headings.forEach((heading, index) => {


            if (index === itemNumber) {
                heading.classList.contains(styles.active) ?
                    heading.classList.remove(styles.active) :
                    heading.classList.add(styles.active)
            } else {
                heading.classList.remove(styles.active)

            }
        })
    }

    return (
        <div className={`${styles.BlueHeight} overflow-hidden rounded-b-xl`}>
            <div className={`${styles.topSection} relative lg:pt-20 pb-28 lg:px-20 px-[18px] pb-[299px] pt-[56px] md:px-[18px] md:pb-[299px] md:pt-[56px]`}>

                <span className='flex justify-center'>
                    <Image src={yellowBox} alt="Yellow Box" />
                </span>
                <h2 className='lg:text-3xl text-xl medium-font text-grey text-center mt-2'>Add Your Name to a <span className='text-blue medium-font lg:text-3xl text-xl'>Legacy of Innovation</span> and <span className='text-blue medium-font lg:text-3xl text-xl'>Growth</span></h2>
                <p className='text-center light-font xl:block lg:hidden hidden text-grey lg:text-lg mt-2'>Zajil is looking for smart, hard-working people to become a cornerstone of global commerce. The first privately owned postal service <br /> in Saudi Arabia, Zajil is now on track to become a leading provider of shipping Services for businesses and consumers.</p>
                <p className='text-center light-font xl:hidden lg:blick text-grey lg:text-lg mt-2'>Zajil is looking for smart, hard-working people to become a cornerstone of global commerce. The first privately owned postal service in Saudi Arabia, Zajil is now on track to become a leading provider of shipping Services for businesses and consumers.</p>

                <div className={`absolute z-10 flex  max-1394 justify-between ${styles.cards}`}>
                    <div className={`${styles.cardWidth} xl:pl-7 xl:pr-6 xl:py-8 lg:p-4 md:p-4 relative`}>
                        <h3 className='text-3xl md:text-xl medium-font text-grey'>Room To Grow</h3>
                        <div className='flex gap-x-2 mt-4'>
                            <p className={`xl:text-lg  lg:text-[15px] leading-7 text-grey light-font`}>Zajil is on a fast trajectory toward massive expansion. Find your place in our historic growth stage. From front-line delivery opportunities to warehouse positions, excellent benefits and career opportunities are within your reach.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardWidth} xl:pl-7 xl:pr-6 xl:py-8 lg:p-4 md:p-4 relative`}>
                        <h3 className='text-3xl md:text-xl medium-font text-grey'>Training & Development</h3>
                        <div className='flex gap-x-2 mt-4'>
                            <p className={`xl:text-lg  lg:text-[15px] leading-7 text-grey light-font`}>Maximize your potential with Zajil’s best-in-case shipping and logistics training program. Learn how to design & deliver solutions that add value to customer supply chains and increase your value in the global economy.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardWidth} xl:pl-7 xl:pr-6 xl:py-8 lg:p-4 md:p-4 relative`}>
                        <h3 className='text-3xl md:text-xl medium-font text-grey'>Owner Engagement</h3>
                        <div className='flex gap-x-2 mt-4'>
                            <p className={`xl:text-lg  lg:text-[15px] leading-7 text-grey light-font`}>When you work for Zajil, you work for a family-based organization of decision-makers who treat you like family. Unlike other companies, Zajil enjoys a warm atmosphere of collaboration and hard work to bring customer delight.</p>
                        </div>
                    </div>
                </div>
                <div className={`absolute z-10 flex justify-between cursor-pointer ${styles.cardsMobs}`}>
                    <Carousel infinite={true} removeArrowOnDeviceType={['mobile']} renderArrowsWhenDisabled={false} responsive={responsive} >
                        <div className={`${styles.cardWidth} lg:pl-7 lg:pr-6 lg:py-8 p-4 relative`}>
                            <h3 className='lg:text-3xl text-xl medium-font text-grey'>Room To Grow</h3>
                            <div className='flex gap-x-2 mt-4'>
                                <p className={`lg:text-lg text-[15px] leading-7 text-grey light-font`}>Zajil is on a fast trajectory toward massive expansion. Find your place in our historic growth stage. From front-line delivery opportunities to warehouse positions, excellent benefits and career opportunities are within your reach.</p>
                            </div>
                        </div>
                        <div className={`${styles.cardWidth} lg:pl-7 lg:pr-6 lg:py-8 p-4 relative`}>
                            <h3 className='lg:text-3xl text-xl medium-font text-grey'>Training & Development</h3>
                            <div className='flex gap-x-2 mt-4'>
                                <p className={`lg:text-lg text-[15px] leading-7 text-grey light-font`}>Maximize your potential with Zajil’s best-in-case shipping and logistics training program. Learn how to design & deliver solutions that add value to customer supply chains and increase your value in the global economy.</p>
                            </div>
                        </div>
                        <div className={`${styles.cardWidth} lg:pl-7 lg:pr-6 lg:py-8 p-4 relative`}>
                            <h3 className='lg:text-3xl text-xl medium-font text-grey'>Owner Engagement</h3>
                            <div className='flex gap-x-2 mt-4'>
                                <p className={`lg:text-lg text-[15px] leading-7 text-grey light-font`}>When you work for Zajil, you work for a family-based organization of decision-makers who treat you like family. Unlike other companies, Zajil enjoys a warm atmosphere of collaboration and hard work to bring customer delight.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={`h-full relative ${styles.yellowSection}`}>
                <span className={styles.brandIcon}>
                    <Image src={brandIcon} alt="Frame" />
                </span>
                <span className={`${overlays.logisticsOverlay}  opacity-[0.97]`}></span>
                <div className='flex flex-col justify-center items-center'>
                    <span className='lg:mt-32 md:mt-32 mt-[211px]'>
                        <Image src={whiteBox} alt="White Box" />
                    </span>
                    <h3 className='text-grey text-3xl medium-font mt-2 z-10'>Available Jobs</h3>
                    <p className='text-lg text-grey text-center medium-font mt-2 z-10'>Zajil is always on the lookout for great talent. Browse current positions We look forward to growing together.</p>
                </div>
                <div className={`relative mx-auto mt-24 max-1394 ${styles.accordianW}`}>
                    <div>
                        <div className={`${styles.accordianH}   cursor-pointer`} >
                            <div className={` ${styles.chevron} pb-5 flex justify-between `} onClick={() => handleAccordion(0)}>
                                <h4 className='text-2xl text-grey cursor-pointer'>Quality Auditor</h4>
                                <span className='flex itmes-center cursor-pointer'>
                                    <Image src={chevron} alt="chevron" />
                                </span>
                            </div>
                            <p className='light-font text-xl text-grey'>A Graphic Designer is an artist who creates visual text and imagery. They design creative content for online campaigns, print ads, websites, and even videos. responsible for developing various types of creative content for advertisements, brochures, or magazines. They do this with multiple tools depending on the medium and goals of the final project.</p>
                            <Link href="#" className="mr-auto mt-3" >
                                <a className='mr-auto mt-3 bg-white w-36 h-12 flex justify-center rounded-md items-center border-2  border-yellow medium-font  hover:text-blue hover:text-grey'>
                                    View More
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-11'>
                        <div className={`${styles.accordianH} cursor-pointer `}>
                            <div className={` ${styles.chevron} pb-5 flex justify-between `} onClick={() => handleAccordion(1)}>
                                <h4 className='text-2xl text-grey cursor-pointer'>Industrial Engineer</h4>
                                <span className='flex itmes-center  cursor-pointer'>
                                    <Image src={chevron} alt="chevron" />
                                </span>
                            </div>
                            <p className='light-font text-xl text-grey'>A Graphic Designer is an artist who creates visual text and imagery. They design creative content for online campaigns, print ads, websites, and even videos. responsible for developing various types of creative content for advertisements, brochures, or magazines. They do this with multiple tools depending on the medium and goals of the final project.</p>
                            <Link href="#" className="mr-auto mt-3" >
                                <a className='mr-auto mt-3 bg-white w-36 h-12 flex justify-center rounded-md items-center border-2  border-yellow medium-font  hover:text-blue hover:text-grey'>
                                    View More
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-11'>
                        <div className={`${styles.accordianH}  cursor-pointer z-20`} >
                            <div className='pb-5 flex justify-between ' onClick={() => handleAccordion(2)}>
                                <h4 className='text-2xl text-grey cursor-pointer'>Graphic Designer</h4>
                                <span className='flex itmes-center  cursor-pointer'>
                                    <Image src={chevron} alt="chevron" />
                                </span>
                            </div>
                            <p className='light-font text-xl text-grey'>A Graphic Designer is an artist who creates visual text and imagery. They design creative content for online campaigns, print ads, websites, and even videos. responsible for developing various types of creative content for advertisements, brochures, or magazines. They do this with multiple tools depending on the medium and goals of the final project.</p>
                            <Link href="#" className="mr-auto mt-3" >
                                <a className='mr-auto mt-3 bg-white w-36 h-12 flex justify-center rounded-md items-center border-2  border-yellow medium-font  hover:text-blue hover:text-grey'>
                                    View More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerDetail