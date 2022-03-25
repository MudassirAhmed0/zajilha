 

import arrow from '../../../assets/images/svg/arrow-fill.svg'
import Image from 'next/image'
import { useState } from 'react'

const ShipmentDropDown = ({label,options,handleClick,id,issue,borderGrey}) => {
  const [showDropDown,setShowDropDown] = useState(false)
  const openDropDown =()=>{
    setShowDropDown(!showDropDown)
  }
 
  return (
    <div className='h-11 relative grow flex items-center cursor-pointer'>
                <span onClick={openDropDown} className={`text-darkGrey relative border-b  ${ issue?   "border-red-500": borderGrey ?"border-grey" :"border-grey50Opa" } h-full w-full flex justify-between`}>
                    {label}
                    <spam className={`mr-2  relative  ${showDropDown && 'rotate-180 -top-5'}`}>
                        <Image src={arrow} alt="Arrow" />

                    </spam>

                    <ul   className={`absolute w-full bg-offWhite2 z-10 top-full shadow-lg  ${!showDropDown? "max-h-0 opacity-0": "max-h-60 opacity-1"} transition-all duration-500 overflow-auto  `}>
                         
                        {
                          options?.map((option,index)=> <li onClick={(e)=>handleClick(id,e)} key={option + index} className={`${ index == options.lenght -1 || "border-b border-grey50Opa"} py-4 px-6  hover:text-blue tansition-all`}>{option}</li>)
                        }
                         
                    </ul>
                </span>    
            { issue &&   <span  className='absolute -bottom-7 text-red-500'>
                        This Field is Required.
                </span>}
            </div>
  )
}

export default ShipmentDropDown