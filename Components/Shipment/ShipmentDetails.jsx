 
import { useState } from 'react'
import ShipmentButton from './ShipmentButton'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const grossWeights =[
    "10 KG",
    "20 KG",
    "30 KG",
    "40 KG",
    "50 KG",
    "60 KG",
    "70 KG",
    "80 KG",
]
const numberOfPacks =[
    "1 Pack",
    "2 Packs",
    "3 Packs",
    "4 Packs",
    "5 Packs",
    "6 Packs",
    "7 Packs",
    "8 Packs",
]
const dates =[
    "1 Jan",
    "2 Jan",
    "3 Jan",
    "4 Jan",
    "5 Jan",
    "6 Jan",
    "7 Jan",
    "8 Jan",
]
const times =[
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
]

const ShipmentDetails = ({step,setStep,state,setState,handleDropDownClick,handleChange}) => {
    const [gWError,setGWError] =useState(false)
    const [packsError,setPacksError] =useState(false)
    const [dateError,setDateError] =useState(false)
    const [timeError,setTimeError] =useState(false)
    const [gVError,setGVError] =useState(false)
    const [nameError,setNameError] =useState(false)
    const [descriptionError,setDescriptionError] =useState(false)
 
  const nextStep =()=>{
      const {shippingPlan,grossWeight,numberOfPacks,pickUpDate,pickUpTime,goodValues,nameOfItem,description} = state
      setGWError(grossWeight == '')
      setPacksError(numberOfPacks == '')
      setDateError(pickUpDate == '')
      setTimeError(pickUpTime == '')
      setGVError(goodValues == '')
      setNameError(nameOfItem == '')
      setDescriptionError(description == '')

      if(shippingPlan && grossWeight && numberOfPacks && pickUpDate && pickUpTime && goodValues && nameOfItem && description){
        setStep(step +1)

    } 
    setTimeout(()=>{
        setGWError(false)
      setPacksError(false)
      setDateError(false)
      setTimeError(false)
      setGVError(false)
      setNameError(false)
      setDescriptionError(false)
    },5000)
  }
  const handleClick =(e)=>{
        setState(()=>{
            return {
                ...state,
                shippingPlan:e.target.innerText
            }
        })
  }
 
  const handleInfoPopup =()=>{ 
    let modal =   document.getElementById('info')
    modal.classList.remove('opacity-0')
    modal.classList.add('opacity-1')
    modal.classList.remove('pointer-events-none')
    modal.classList.add('pointer-events-initial')
  }
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            What are you planning to Ship?
        </h5>
        <div className="flex flex-wrap md:gap-y-14 gap-y-8 justify-between mt-6">
        <div className="md:w-[46%] w-full   gap-x-5 flex">
           <ShipmentButton handleClick={handleClick} active={state.shippingPlan ==="Documents"} label='Documents'/>
           <ShipmentButton handleClick={handleClick} active={state.shippingPlan ==="Packages"} label='Packages'/>
        </div> 
        <div className="md:w-[46%] md:flex-row  w-full flex-col gap-y-8  gap-x-16 flex">
            <ShipmentDropDown id='grossWeight'  issue={gWError} handleClick={handleDropDownClick} options={grossWeights} label={state.grossWeight || "Total Gross Weight"}/>
            <ShipmentDropDown id='numberOfPacks' issue={packsError} handleClick={handleDropDownClick} options={numberOfPacks} label={state.numberOfPacks || "Number of Packs"}/>
        </div> 
        <div className="md:w-[46%]  w-full  gap-x-16 flex">
            <ShipmentDropDown id='pickUpDate' issue={dateError}  handleClick={handleDropDownClick} options={dates} label={state.pickUpDate || "Pickup date"}/> 
        </div> 
        <div className="md:w-[46%]  w-full  gap-x-16 flex">
            <ShipmentDropDown id='pickUpTime'  issue={timeError} handleClick={handleDropDownClick} options={times} label={state.pickUpTime || "Pickup time"}/> 
        </div> 
        <div className="md:w-[46%]  w-full  gap-x-16 flex"> 
            <ShipmentTextInput type='number'  issue={gVError} handleChange={handleChange} value={state.goodValues} id='goodValues' label={'Declared Goods Value'} info handleClick={handleInfoPopup}/>
        </div>
        <div className="md:w-[46%]  w-full  gap-x-16 flex"> 
            <ShipmentTextInput issue={nameError} handleChange={handleChange} value={state.nameOfItem} id='nameOfItem' label={'Name of item'} />
        </div>
        <div className="w-full gap-x-16 flex"> 
            <ShipmentTextInput issue={descriptionError} handleChange={handleChange} value={state.description} id='description' label={'Description'} />
        </div>
        <div className="flex justify-end w-full">
            <button onClick={nextStep} className='md:w-48 md:h-10 w-full h-[60px] shadow-md rounded  bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            </>
  )
}

export default ShipmentDetails