import React from 'react'
import Image from 'next/image'
import yellowBox from '../assets/images/svg/box-yellow.svg' 

const Heading = ({heading,para}) => {
  return (
    <>
    <span className="box">
        <Image src={yellowBox} alt="Yellow Box" />
    </span>
            <h4 className="md:text-3xl text-xl text-blue uppercase medium-font mb-3 ">
                {heading}
            </h4>
           {para && <p className="text-grey light-font   text-center ">
           {para[0]} <br />
           {para[1]}
            </p>}
    </>
  )
}

export default Heading