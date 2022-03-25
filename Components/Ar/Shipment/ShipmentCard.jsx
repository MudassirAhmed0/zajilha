import Info from '../Popups/Info'
import Invoice from '../Popups/Invoice'
import MobileVerification from '../Popups/MobileVerification'
import Card from './Card'
import ShipmentContent from './ShipmentContent'
import ShipmentHeader from './ShipmentHeader'

const ShipmentCard = ({step,setStep,state,setState,handleChange,handleDropDownClick}) => {
  const nextStep =()=>{
    setStep((step)=>  step +1)
    let modal =   document.getElementById("mobileVerification")
    modal.classList.remove('opacity-1')
    modal.classList.add('opacity-0')
    modal.classList.remove('pointer-events-auto')
    modal.classList.add('pointer-events-none')
} 
  return (
    <>
    <Card>
      <ShipmentHeader shipmentStep={step}/>
      <ShipmentContent shipmentStep={step} setShipmentStep={setStep} state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange}/>
  </Card>
  <MobileVerification nextStep={nextStep}/>  
  <Invoice/>
  <Info/>
    </>
  )
}

export default ShipmentCard