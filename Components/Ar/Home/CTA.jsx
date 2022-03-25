import Link from 'next/link'
import styles from '../../../arStyles/Home.module.css'
import overlays from '../../../arStyles/Overlays.module.css'

const CTA = () => {
  return (
    <div className={`relative overflow-hidden max-1394 mx-auto md:pt-8 md:pb-8 pb-4 pt-6 md:px-11 px-4  bg-yellow relative overflow-hidden  ${styles.cta}	`}>
<span className={` ${overlays.logisticsOverlay} opacity-[0.91]`}></span>
       <h4 className="text-grey lg:text-4xl md:text-3xl text-lg  mb-1 mt-0.5 medium-font relative text-xl">
       Expand Your Business with Zajil   
        </h4> 
        <p className="md:text-lg text-xs text-grey light-font md:mb-12 mb-6 relative ">Talk to a KSA shipping and logistics expert at Zajil today.</p>
        <Link href='/contact' >
            <a  className='md:w-36 md:h-10  h-[55px]  rounded-md  transition-all duration-300      relative medium-font text-grey  shadow-md  hover:shadow-shadaw flex justify-center bg-white items-center hover:text-blue'>
                    Learn More

            </a>
        </Link>
    </div>
  )
}

export default CTA