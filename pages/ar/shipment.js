import ShipmentCard from '../../Components/Ar/Shipment/ShipmentCard' 
import { useEffect, useState } from 'react' 
import HeroCardLayout from '../../Components/Ar/Shipment/HeroCardLayout'
import Head from 'next/head'

const Shipment = () => {
  const [shipmentStep,setShipmentStep] = useState(1)
  const [state,setState] = useState({
    shippingPlan:"Documents",
    grossWeight:'',
    numberOfPacks:'',
    pickUpDate:'',
    pickUpTime:'',
    goodValues:'',
    nameOfItem:'',
    description:'',
    senderFirstName:'',
    senderLastName:'',
    senderMobileNumber:'',
    senderCity:'',
    senderAddressLine1:'',
    senderAddressLine2:'',
    receiverFirstName:'',
    receiverLastName:'',
    receiverMobileNumber:'',
    receiverCity:'',
    receiverAddressLine1:'',
    receiverAddressLine2:'',
    paymentOption:'',
    promoCode:''
})
const handleDropDownClick =(id,e)=>{
  setState(()=>{
      return {
          ...state,
          [id]:e.target.innerText
      }
  })
}
const handleChange =(e)=>{
  setState(()=>{
      return {
          ...state,
          [e.target.id]:e.target.value
      }
  })
}
useEffect(()=>{
  document.querySelector('html').dir = 'rtl'
},[])

useEffect(()=>{
  const height =  document.getElementById('card').clientHeight - 606
  
  document.getElementById('cardContainer').style.height = height >5 ? height +"px":0
  
  

},[shipmentStep])
  return (
    <>
       <Head>
        <title>Create Shipment || Zajil</title>
        <meta name="description" content="" />
        
    </Head> 
  <HeroCardLayout>
     <ShipmentCard step={shipmentStep} setStep={setShipmentStep} state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange}/>
  </HeroCardLayout>
 
    </>
  )
}

export default  Shipment