import CardContent from "../Shipment/CardContent"
import styles from '../../styles/Chalja.module.css'
import info from '../../assets/NewImages/svg/info.svg'
import Image from 'next/image'
import { useEffect, useState } from "react"
import times from '../../assets/NewImages/svg/times.svg'
import tick from '../../assets/NewImages/svg/pentagonTick.svg'
import loading from '../../assets/NewImages/svg/pentagonLoading.svg' 


const TrackingContent = () => {
    const [trackingResult,setTrackingResult] = useState(false)
    const cancelShipment =()=>{
        const modal = document.getElementById('cancelShipment')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
    useEffect(()=>{
       setTimeout(()=>{
        const height =  document.getElementById('card').clientHeight - 606
       
        document.getElementById('cardContainer').style.height = height >5 ? height +"px":0
         
       },500)
      },[trackingResult])

      const openTrackingInfo =()=>{
        const modal = document.getElementById('trackingInfo')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
      }
  return (
      <>
    <CardContent noPadding>
    <div className='justify-center flex gap-x-6 px-[30px] mt-4 md:mt-0' >
    
    <button className='w-40 md:h-10 rounded  h-[45px] pt-0.5  medium-font shadow text-grey bg-yellow'>
                    Tracking Number
        </button>
    <button className='w-40 md:h-10 h-[45px] rounded  pt-0.5  medium-font  text-grey border border-yellow'>
                   Mobile Number
        </button>
    </div>
    <div className="flex flex-col px-[30px]">
        <div className={`flex mt-7 md:w-9/12 w-full mx-auto `}>
            <div className={`medium-font  text-base ${styles.promocode} ${styles.adjust}`}>
            <input type="text"   placeholder='sds' name='promoCode' id='promoCode'/>
            <label htmlFor="promoCode" className='cursor-pointer'>Tracking Number</label>
            </div> 
            <button onClick={()=> setTrackingResult(true)} className='w-32  hidden md:block bg-white shadow-lg rounded pt-1 text-grey  trackBtn'>
            Track
            </button>
        </div>
        
        <div onClick={openTrackingInfo} className="cursor-pointer md:w-9/12 w-full mx-auto mt-3 gap-x-3 items-center flex cursor-pointer">
            <Image src={info} alt='Info'/>
            <span className="text-grey md:text-lg text-base light-font pt-1 ">
            Where can I find my tracking number?
            </span>
        </div>
        <button onClick={()=> setTrackingResult(true)} className='md:w-32  w-full mt-8 h-[60px]  md:hidden block bg-white shadow-lg rounded pt-1 text-grey  trackBtn'>
            Track
            </button>
    
    <div className={`flex flex-col w-full ${ trackingResult && "md:mt-20 md:mb-20 mt-16"} transition-all duration-500 overflow-hidden ${trackingResult ?" max-h-120 " : " max-h-0 " }`}>
    <span  className="medium-font text-grey text-xl mb-4 text-center">
        Shipment Summary
    </span>  
        <div className="bg-yellow md:pb-14 pb-6 pt-11   lg:px-16 md:px-8 px-5 md:w-9/12 w-full mx-auto rounded-lg shadow-[ 0px 5px 8px #0000002F]">
            <div className="flex justify-between gap-y-4 text-grey flex-wrap md:flex-nowrap medium-font md:text-center" >
                <div className="flex flex-col w-1/2 md:w-auto">
                    <span>Tracking Number</span>
                    <span className=" md:text-xl text-lg">192311532660</span>
                </div>
                <div className="flex flex-col  md:w-auto">
                    <span>Status</span>
                    <span className="md:text-xl text-lg md:px-2 ">In Processing</span>
                    <span className="h-7 mt-1.5 text-xs justify-between flex md:px-3 px-1 shadow cursor-pointer items-center bg-white rounded-xl">
                        <span className="">
                            <Image src={times} alt={times} width='8px' height={'8px'}/>
                        </span>
                        <span className="" onClick={cancelShipment}>

                        Cancel Shipment
                        </span>
                    </span>
                </div>
                <div className="flex flex-col w-1/2 md:w-auto">
                    <span> Request date</span>
                    <span className="md:text-xl text-lg ">June 12th, 2022</span>
                </div>
                <div className="flex flex-col  md:auto -ml-8">
                    <span> From</span>
                    <span className="md:text-xl text-lg ">Riyadh</span>
                </div>
                <div className="flex flex-col w-1/2 md:w-auto">
                    <span>To </span>
                    <span className="md:text-xl text-lg ">Jeddah</span>
                </div>
            </div>
            <div className={`flex justify-between text-grey mt-7 ${styles.shipmentProgressLine}`}>
                <div className="z-10 flex flex-col md:items-center items-start w-1/3  md:w-auto">
                    <Image src={tick } alt='Tick'/>
                    <span className="medium-font text-base md:text-lg mb-1 mt-2">Processing</span>
                    <span className="text-xs md:text-sm opacity-50">June 12th, 2022 </span>
                    <span className="text-xs md:text-sm opacity-50">14:00:00 Local Time</span>
                </div>
                <div className="z-10 flex flex-col items-center w-1/3 md:w-auto">
                    <Image src={loading } alt='loading'/>
                    <span className="medium-font text-base md:text-lg mb-1 mt-2">In Transit</span> 
                </div>
                <div className="z-10 flex flex-col items-end md:items-center w-1/3 md:w-auto">
                    <Image src={loading } alt='loading'/>
                    <span className="medium-font text-base md:text-lg mb-1 mt-2">Delivery</span>
                    <span className="text-xs md:text-sm opacity-50">Estimated </span>
                    <span className="text-xs md:text-sm opacity-50">June 12th, 2022</span>
                </div>
            </div>
        </div>
</div>
    {trackingResult ||   <span className="md:mt-40 mt-12 mb-8 md:text-3xl text-xl medium-font text-center md:mb-24 text-bababa">
        Enter Tracking Number <br /> above to view results
        </span>}
    </div>
    
</CardContent>
</>
  )
}

export default TrackingContent