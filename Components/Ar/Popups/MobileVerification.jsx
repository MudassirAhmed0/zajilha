import { useState } from 'react'
import Modal from './Modal'

const MobileVerification = ({nextStep}) => {
    const [code,setCode] = useState('')
   const handleChange = (e)=>{
    if (e.target.value.length > e.target.maxLength)  {
        setCode( e.target.value.slice(0, e.target.maxLength))
        e.target.style.caretColor ='transparent'
    }
    else{
        setCode(e.target.value)
        e.target.style.caretColor ='initial'
    }
   }
  return (
    <Modal py='md:pt-11 md:pb-20 pt-[50px] pb-9' modalId='mobileVerification'>
            <h4 className="md:text-3xl text-xl text-blue medium-font mb-2">Verify</h4>
            <span className="text-lg text-grey light-font mb-1">Please enter the verification code sent to +966 123 456 789</span>
            <div className='mb-12 h-20 w-full flex justify-center items-end'>
                <div className="flex w-72 pl-4 pr-4  flex-col  ">
                     <div>
                         <input type="number" className='verifyInput text-grey' maxLength="4" value={code} onChange={handleChange}/>
                     </div>
                    <div className='flex gap-x-3.5'>
                        <div className="grow border-b border-grey">
                        </div>
                        <div className="grow border-b border-grey">
                        </div>
                        <div className="grow border-b border-grey">
                        </div>
                        <div className="grow border-b border-grey">
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={nextStep} className='md:w-48 md:h-10 h-[60px] w-full shadow-lg  rounded  pt-0.5  medium-font  text-grey bg-yellow'>
            Verify
            </button>
        <div className="mb-2.5 hidden md:block"></div>
    </Modal>
        
       
  )
}

export default MobileVerification