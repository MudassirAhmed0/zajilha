import { useState } from 'react' 
import MobileInput from './MobileInput'
import MobileVerification2 from './MobileVerification2'
import Modal from './Modal'

const MobileNumber = () => {
  const [i,setI] = useState(false)
  const sendVerification =()=>{
    setI(true)
    let modal =   document.getElementById("mobileNumber")
    modal.classList.remove('opacity-1')
    modal.classList.add('opacity-0')
    modal.classList.remove('pointer-events-auto')
    modal.classList.add('pointer-events-none')
    let modal2 =   document.getElementById("mobileVerification2")
    modal2.classList.remove('opacity-0')
    modal2.classList.add('opacity-1')
    modal2.classList.remove('pointer-events-none')
    modal2.classList.add('pointer-events-initial')
  }
  const closeVerification =()=>{

    let modal2 =   document.getElementById("mobileVerification2")
    modal2.classList.remove('opacity-1')
    modal2.classList.add('opacity-0')
    modal2.classList.remove('pointer-events-initial')
    modal2.classList.add('pointer-events-none')
  }

  return (
    <>
    
    <Modal py='md:pt-12 md:pb-16 py-10 px-[22px]' modalId='mobileNumber'>
            <h4 className="text-3xl text-blue medium-font mb-2">Enter Your Mobile Number</h4>
            <span className="text-lg text-grey light-font mb-1">Please provide your mobile number to retrieve your current shipment</span>
            <div className="md:px-11 w-full mb-14 pb-1 mt-14 pt-1">
                <div className='mobileNumberInput'>
                    {/* <input type="text" placeholder='+966 xxx xxx xxx'/> */}
                    <MobileInput classes={"text-lg text-blue"} placeholder='+(966) xxx xxx xxx'/>
                    <label htmlFor="Mobile Number">Mobie Number</label>
                </div>
            </div>
            <button  onClick={sendVerification} className='md:w-48 md:h-10 w-full h-[60px] rounded-md shadow-lg  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Send The Code
            </button>
        <div className="mb-2.5 hidden md:block"></div>
    </Modal>
  <MobileVerification2 nextStep={closeVerification} />
    </>
  )
}

export default MobileNumber