import Image from 'next/image'
import styles from '../../styles2/media.module.css'
import overlays from '../../styles2/Overlays.module.css'
import banner from '../../assets/NewImages/faqs/banner/frequently-asked-questions-banner.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.heroSection}`} >
            <span className='absolute top-0 left-0 h-full w-full img_container'>
                <Image  placeholder='blur' blurDataURL='/blur.webp' src={banner} alt="FAQs Banner" />
            </span>
            <span className={`${overlays.faqsfirst}`}></span>
            <span className={`${overlays.faqssecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white uppercase">
                <h1 className='md:text-4xl medium-font lg:mb-2 text-xl'>
                    FREQUENTLY ASKED QUESTIONS
                </h1>
            </div>
        </section>
    )
}

export default Hero