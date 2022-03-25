import Modal from './Modal'
import whiteStar from '../../assets/NewImages/svg/white-star.svg'
import yellowStar from '../../assets/NewImages/svg/golden-star.svg' 
import Image from 'next/image'
import { useState } from 'react' 

const PaymentSuccessful = () => {
  const [stars,setStars] = useState(0)
   
  
  return (
    <Modal py='md:pt-11 md:pb-20 py-10' modalId='paymentSuccessful'>
            <h4 className="text-3xl text-blue medium-font mb-2">Payment Successful!</h4>
            <span className="text-lg text-grey light-font mb-1">Your tracking number is </span>
            <span className='bold-font text-xl text-yellow'>192311532660</span>    
            <div className='flex gap-x-1.5 mt-12'>
                
                <Image onClick={()=> setStars(1)} className='cursor-pointer' alt="Image" src={stars >= 1 ? yellowStar :whiteStar}/>
                <Image onClick={()=> setStars(2)} className='cursor-pointer' alt="Image" src={stars >= 2 ? yellowStar :whiteStar}/>
                <Image onClick={()=> setStars(3)} className='cursor-pointer' alt="Image" src={stars >= 3 ? yellowStar :whiteStar}/>
                <Image onClick={()=> setStars(4)} className='cursor-pointer' alt="Image" src={stars >= 4 ? yellowStar :whiteStar}/>
                <Image onClick={()=> setStars(5)} className='cursor-pointer' alt="Image" src={stars >= 5 ? yellowStar :whiteStar}/>
                
            </div> 
            
            <span className="text-lg text-grey light-font mt-2 mb-12">How would you rate your experience? </span>
            <div className='flex gap-x-4 w-full justify-center flex-wrap-reverse md:flex-nowrap gap-y-4'>
                  
            <button className='md:w-48 md:h-10 rounded-md w-full h-[60px]  pt-0.5  medium-font  text-grey border border-yellow'>
                       Download Invoice
            </button>
            <button className='md:w-48 md:h-10 rounded-md w-full h-[60px]  pt-0.5   shadow-lg medium-font shadow text-grey bg-yellow'>
                        My Shipments
            </button>
            </div> 
        <div className="mb-2.5 hidden md:block"></div>
    </Modal>
        
       
  )
}

export default PaymentSuccessful