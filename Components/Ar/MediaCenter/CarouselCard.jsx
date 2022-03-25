import React from 'react'
import styles from '../../../arStyles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import media from '../../../arStyles2/media.module.css'
import arrow from '../../../assets/images/svg/right-arrow.svg'

const CarouselCard = ({content}) => {
    let {para,date,alt,img} = content
  return (
    <div className={`${styles.carouselCard} ${media.heightCard}`}>
        <div className={`${styles.carouselCardImg}`}>
            <Image placeholder='blur' blurDataURL='/blur.webp' src={img} alt={alt}/>
        </div>
        <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
            <span className="text-xs text-grey">
            {date}
            </span>
            <span className="mt-3 text-grey light-text">
               {para}
            </span>
            <Link href="/newsdetail">
            <a className='relative mt-3 flex' >
                Read More
                <span className=' rotate-180 mr-1 mb-2'>
                <Image  src={arrow} alt="Arrow" />

                </span>
            </a>
            </Link>
        </div>
    </div>
  )
}

export default CarouselCard