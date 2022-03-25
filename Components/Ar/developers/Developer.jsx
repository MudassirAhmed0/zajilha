import Image from 'next/image'
import styles from '../../../arStyles2/developer.module.css'
import yelllowBox from '../../../assets/NewImages/svg/box-yellow.svg'
import frame from '../../../assets/NewImages/svg/developer-frame.svg'
import dot from '../../../assets/NewImages/svg/developer-dot.svg'

const Developer = () => {
    return (
        <div className={` ${styles.hDevelopers} relative`}>
            <span className='absolute bottom-0'>
                <Image src={frame} alt="Frame" />
            </span>
            <div className={styles.topSection}>
                <div className='pt-12 max-1394 mx-auto lg:px-20 px-[18px] pb-24 '>
                    <span className=' flex justify-center'>
                        <Image src={yelllowBox} alt="Yellow cube" />
                    </span>
                    <h2 className='lg:text-3xl mt-4 medium-font text-xl text-grey text-center'>Simplified Shipping Manage for Streamlined <br /> <span className='text-blue'>Pre-</span> and <span className='text-blue'>Post-Sale</span> Processing</h2>
                    <p className={`text-center mt-8 lg:text-lg text-base text-grey light-font m-auto ${styles.w62}`}>The Zajil API offers streamlined integration to standard shopping cart applications such as Shopify and other ERP environments. Once connected, your site (or application) can create shipments to provide reference and tracking numbers, even specify COD at time of order. You can also manage post-order activities such as label printing, cancel shipments, or create pickup orders.</p>
                </div>
            </div>
            <div className='pt-12  lg:px-20 px-[18px] pb-24 realtive'>
                <div className={`absolute  max-1394 mx- flex flex-wrap xl:gap-y-0 gap-y-[48px] justify-between ${styles.cards}`}>
                    <div className={`${styles.cardWidth} px-8 pr-7 pt-9  pb-8 relative`}>
                        <h2 className='text-[45px] text-yellow absolute  top-[-29px] '>01</h2>
                        <h3 className='text-3xl text-grey'>Shipping</h3>
                        <div className='flex gap-x-2 mt-1.5 items-start'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>Create a shipment by pushing information to Zajil to obtain shipping reference and tracking numbers.</p>
                        </div>
                        <div className='flex gap-x-2 mt-1.5 items-start'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>Print AWB label to spec.</p>
                        </div>
                        <div className='flex gap-x-2 mt-1.5 items-start'>
                            <span className='xl:w-4 img_container'>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>Cancel an unprocessed shipment and attach reason for cancellation to record.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardWidth} px-8 pr-7 pt-9  pb-8 relative`}>
                        <h2 className='text-[45px] text-yellow absolute  top-[-29px] '>02</h2>
                        <h3 className='text-3xl text-grey'>Tracking</h3>
                        <div className='flex gap-x-2 mt-4'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>Get details about shipmentmlocation.</p>
                        </div>
                        <div className='flex gap-x-2 mt-9'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}> Get details for notifications based on events such as released for shipment, in-transit status, out- for delivery, delivery, and end-of- day status.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardWidth} px-8 pr-7 pt-9  pb-8 relative`}>
                        <h2 className='text-[45px] text-yellow absolute  top-[-29px] '>03</h2>
                        <h3 className='text-3xl text-grey'>Location</h3>
                        <div className='flex gap-x-2 mt-4'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>Create pickup request for specific day and time.</p>
                        </div>
                        <div className='flex gap-x-2 mt-9'>
                            <span className={styles.dotL}>
                                <Image src={dot} alt="Dot" />
                            </span>
                            <p className={`text-lg text-grey light-font`}> Specify exact location using Google map location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer