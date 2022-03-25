import CardContent from '../Shipment/CardContent'
import times from '../../../assets/NewImages/svg/times.svg'
import tick from '../../../assets/NewImages/svg/pentagonTick.svg'
import loading from '../../../assets/NewImages/svg/pentagonLoading.svg' 
import search from '../../../assets/NewImages/svg/search.svg'
import blueSearch from '../../../assets/NewImages/svg/blueSearch.svg'
import styles from '../../../arStyles/Chalja.module.css'
import Image from 'next/image'
import { useEffect,useState } from 'react'

const ManageContent = ({showTrack,setShowTrack}) => {
    const [searchIcon,setSearchIcon] = useState(search)

    useEffect(()=>{
        const height =  document.getElementById('card').clientHeight - 606
    
        document.getElementById('cardContainer').style.height = height >5 ? height +"px":0
        
      },[showTrack])
    const track=()=>{
        setShowTrack(true)
    }
    const cancelShipment =()=>{
        const modal = document.getElementById('cancelShipment')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
    const dekho =()=>{
        setSearchIcon(blueSearch)
    }
    const dekhlia =()=>{
        setSearchIcon(search)
    }
    const handlePay =()=>{
        const modal = document.getElementById('invoiceModal')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
  return (
    <CardContent noPadding>
    {   !showTrack ?  <div className={`overflow-hidden relative ${styles.shipmentContent}`}>
    <div className='mobileNumberInput relative w-72 block md:hidden mx-auto mb-6'>
        <input type="text" onFocus={dekho} onBlur={dekhlia} placeholder='dsda' className='peer bg-transparent' id='search' />
        <label htmlFor="search" className='peer-focus:text-blue'>Enter Keywords</label>
        <span className='absolute top-1 w-4 left-0.5'>
            <Image src={searchIcon} alt='search'/>
        </span>
    </div> 
    <div className='flex gap-x-6 w-full overflow-x-auto  no-scrollbar'>
                <button className='min-w-[10rem] w-40 h-10  pt-0.5 bg-yellow shadow-md  rounded'>
                        All Shipments
                </button>
                <button className='min-w-[13rem] w-52 h-10  pt-0.5 border border-yellow rounded'>
                         Shipments In Progress
                </button>
                <button className='min-w-[13rem] w-52 h-10  pt-0.5 border border-yellow rounded'>
                        Shipments Delivered
                </button>
                <button className='min-w-[13rem] w-52 h-10  pt-0.5 border border-yellow rounded'>
                        Cancelled Shipments
                </button>
        </div>
        <div className="mt-11 flex flex-col  mb-5  gap-y-4 text-grey medium-font" >
            <div className="md:px-10 px-5 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between flex-wrap md:flex-nowrap gap-y-4'>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>From</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>To</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Status</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Request Date</span>
                        <span className='md:text-xl  text-base md:-mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font flex md:flex-row flex-col-reverse gap-y-4 w-full md:w-auto  '>
                        <button onClick={handlePay} className='md:w-32 pt-0.5 md:h-10 h-[60px] border border-grey w-full  rounded-md'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-0.5 md:w-32 md:h-10 h-[60px] w-full bg-white shadow-md rounded-md md:mr-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            
        </div>
        <div className="mt-11 flex flex-col  mb-5  gap-y-4 text-grey medium-font" >
            <div className="md:px-10 px-5 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between flex-wrap md:flex-nowrap gap-y-4'>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>From</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>To</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Status</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Request Date</span>
                        <span className='md:text-xl  text-base md:-mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font flex md:flex-row flex-col-reverse gap-y-4 w-full md:w-auto  '>
                        <button className='md:w-32 pt-0.5 opacity-20 md:h-10 h-[60px] border border-grey w-full  rounded-md'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-0.5 md:w-32 md:h-10 h-[60px] w-full bg-white shadow-md rounded-md md:mr-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            
        </div>
        <div className="mt-11 flex flex-col  mb-5  gap-y-4 text-grey medium-font" >
            <div className="md:px-10 px-5 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between flex-wrap md:flex-nowrap gap-y-4'>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>From</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>To</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Status</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Request Date</span>
                        <span className='md:text-xl  text-base md:-mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font flex md:flex-row flex-col-reverse gap-y-4 w-full md:w-auto  '>
                        <button className='md:w-32 pt-0.5 opacity-20 md:h-10 h-[60px] border border-grey w-full  rounded-md'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-0.5 md:w-32 md:h-10 h-[60px] w-full bg-white shadow-md rounded-md md:mr-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            
        </div>
        <div className="mt-11 flex flex-col  mb-5  gap-y-4 text-grey medium-font" >
            <div className="md:px-10 px-5 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between flex-wrap md:flex-nowrap gap-y-4'>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>From</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>To</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Status</span>
                        <span className='md:text-xl  text-base md:-mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col w-1/2 md:w-auto'>
                        <span className='text-[15px] md:text-base'>Request Date</span>
                        <span className='md:text-xl  text-base md:-mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font flex md:flex-row flex-col-reverse gap-y-4 w-full md:w-auto  '>
                        <button className='md:w-32 pt-0.5 opacity-20 md:h-10 h-[60px] border border-grey w-full  rounded-md'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-0.5 md:w-32 md:h-10 h-[60px] w-full bg-white shadow-md rounded-md md:mr-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            
        </div>
        </div>:<>
         <div className="flex flex-col w-full  mb-32 px-[22px] md:px-[0]">
         <span  className="medium-font text-grey text-xl mb-4 text-center">
             Shipment Summary
         </span>  
         <div className="bg-yellow md:pb-14 pb-6 pt-11  lg:px-16 md:px-8 px-5 md:w-9/12 w-full mx-auto rounded-lg shadow-lg">
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
                <div className="flex flex-col w-2/6 md:w-auto -ml-8">
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
     </>
        }
    </CardContent>
  )
}

export default ManageContent