import { useState } from 'react'
import MobileVerification from '../Popups/MobileVerification'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const cities =[
    "Abhā",
    "Abqaiq",
    "Al-Baḥah",
    "Al-Dammām",
    "Al-Hufūf",
    "Al-Jawf",
    "Al-Kharj (oasis)",
    "Al-Khubar",
    "Al-Qaṭīf",
    "Al-Ṭaʾif",
    "ʿArʿar",
    "Buraydah",
    "Dhahran",
    "Ḥāʾil",
    "Jiddah",
    "Jīzān",
    "Khamīs Mushayt",
    "King Khalīd Military City",
    "Mecca",
    "Medina",
    "Najrān",
    "Ras Tanura",
    "Riyadh",
    "Sakākā",
    "Tabūk",
    "Yanbuʿ",
]

const SenderDetails = ({step,setStep,state,handleChange,handleDropDownClick}) => {

    const [fNError,setFNError] = useState(false)
    const [lNError,setLNError] = useState(false)
    const [numError,setNumError] = useState(false)
    const [cityError,setCityError] = useState(false)
    const [a1Error,setA1Error] = useState(false)
    const [a2Error,setA2Error] = useState(false)
    const verify =()=>{
        const {senderFirstName,senderLastName,senderMobileNumber,senderCity,senderAddressLine1,senderAddressLine2} = state
        setFNError(senderFirstName == '') 
        setLNError(senderLastName == '') 
        setNumError(senderMobileNumber == '') 
        setCityError(senderCity == '') 
        setA1Error(senderAddressLine1 == '') 
        setA2Error(senderAddressLine2 == '') 
  
        if(senderFirstName && senderLastName && senderMobileNumber && senderCity && senderAddressLine1 && senderAddressLine2){
            const modal = document.getElementById('mobileVerification')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
  
    setTimeout(()=>{ 
      setFNError(false) 
      setLNError(false)
      setNumError(false) 
      setCityError(false) 
      setA1Error(false) 
      setA2Error(false) 
    },5000)
      } 
  
     
    const  previousStep =()=>{
        setStep(step -1)
    }
  
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            Please enter your information
        </h5>
        <div className="flex flex-wrap md:gap-y-14 gap-y-8 justify-between mt-9">
        <div className=" md:w-[46%]  w-full  gap-x-5 flex">
            <ShipmentTextInput id='senderFirstName' handleChange={handleChange} value={state.senderFirstName} issue={fNError} label={'First Name'}/>
           
        </div> 
        <div className=" md:w-[46%]  w-full  gap-x-16 flex">
            <ShipmentTextInput id='senderLastName' handleChange={handleChange} value={state.senderLastName} issue={lNError} label={'Last Name'}/>
            
        </div> 
        <div className=" md:w-[46%]  w-full  gap-x-16 flex">
            <ShipmentTextInput masked id='senderMobileNumber' handleChange={handleChange} value={state.senderMobileNumber} issue={numError} label={'Mobile Number'}/>
             
        </div> 
        <div className=" md:w-[46%]  w-full  gap-x-16 flex">
            <ShipmentDropDown handleClick={handleDropDownClick} id={'senderCity'} options={cities} issue={cityError} label={ state.senderCity ? state.senderCity :'City'}/> 
        </div> 
        <div className=" md:w-[46%]  w-full  gap-x-16 flex"> 
            <ShipmentTextInput id='senderAddressLine1' handleChange={handleChange} value={state.senderAddressLine1} issue={a1Error} label={'Address Line 1'}/>
        </div>
        <div className=" md:w-[46%]  w-full  gap-x-16 flex"> 
            <ShipmentTextInput id='senderAddressLine2' handleChange={handleChange} value={state.senderAddressLine2} issue={a2Error} label={'Address Line 2'} />
        </div> 
        <div className="flex justify-between md:flex-row flex-col-reverse gap-y-4 w-full mt-6">
            <button onClick={previousStep} className='md:w-48 md:h-10 w-full h-[60px]  rounded pt-1 border border-yellow'>
                Go Back
            </button>
            <button onClick={verify} className='md:w-48 md:h-10 w-full h-[60px] rounded shadow-lg pt-1 bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            
            </>
  )
}

export default SenderDetails