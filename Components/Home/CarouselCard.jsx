import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../assets/images/svg/right-arrow.svg'

const CarouselCard = ({content}) => {
    console.log(content)
    let {para,date,alt,img} = content
  return (
    <div className={`${styles.carouselCard}`}>
        <div className={`${styles.carouselCardImg}`}>
            <Image  placeholder='blur' blurDataURL='/blur.webp' src={img} alt={alt}/>
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
                <span className=' ml-1'>
                <Image src={arrow} alt="Image" />

                </span>
            </a>
            </Link>
        </div>
    </div>
  )
}

export default CarouselCard