import Image from 'next/image'
import styles from '../../../arStyles2/TheApp.module.css'
import phones from '../../../assets/NewImages/app-page/image/mobile-application.jpg'
import appstore from '../../../assets/NewImages/png-files/appstore.png'
import playstore from '../../../assets/NewImages/png-files/playstore.png'
import brandIcon from '../../../assets/NewImages/svg/theAppBrand.svg' 
import Link from 'next/link'

const AppDetail = () => {
  return (
    <div className='lg:py-16 max-1394 mx-auto overflow-hidden relative lg:pr-32 lg:pl-16 px-[18px] pt-[46px] pb-[51px]'>
    <span className={`absolute ${styles.appBrandIcon}`}>
        <Image src={brandIcon} alt="Brand Icon" />
    </span>
        <p className='text-grey light-font text-lg text-center lg:px-0 px-4 '>Simplified, affordable shipping and logistics is always at hand</p>
        <div className='mt-10 flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between items-center'>
            <span className={styles.mobimgw}>
                <Image placeholder='blur' blurDataURL='/blur.webp' src={phones} alt="Phone" />
            </span>
            <div className={`z-10 ${styles.textw}`}>
                <h4 className='text-xl medium-font lg:mt-0 mt-[17.5px] text-grey text-xl '>Get Notified</h4>
                <p className='text-lg light-font text-font text-lg pt-2.5'>Stay up-to-date with in-app or SMS notifications based on location, ETAs, proof of delivery, and even proactive delay status reports.</p>
                <h4 className='text-xl medium-font text-grey text-xl lg:mt-20 mt-9'>Manage Payments</h4>  
                <p className='text-lg light-font text-font text-lg pt-2.5'>Pay for shipping without switching apps or creating an account.</p>
            </div>
            <div className={styles.textw}>
                <h4 className='text-xl medium-font text-grey lg:mt-0 mt-9 text-xl'>Track Your Shipments</h4>
                <p className='text-lg light-font text-font text-lg pt-2.5' >Ship without an account, manage delivery options, and get real-time delivery information. Even calculate shipping costs before you ship.</p>
                <h4 className='text-xl medium-font text-grey  text-xl lg:mt-20 mt-9'>Get your App Now!</h4>  
                <div className='flex gap-x-5 pt-6'>
                    <Link href='#'>
                        <a className='img_container h-10 w-28 rounded-mmd relative overflow-hidden'>
                            <Image src={appstore} alt="App Store" />
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className='img_container h-10 w-28 rounded-mmd relative overflow-hidden'>
                            <Image src={playstore} alt="Play Store" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDetail