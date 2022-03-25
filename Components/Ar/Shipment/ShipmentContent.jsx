
import CardContent from './CardContent'
import CheckOut from './Checkout'
import ReceiverDetails from './ReceiverDetails'
import SenderDetails from './SenderDetails'
import ShipmentDetails from './ShipmentDetails'

const ShipmentContent = ({shipmentStep,setShipmentStep,state,setState,handleDropDownClick,handleChange}) => {
   
        switch (shipmentStep) {
            case 1:
                return   (
                     <CardContent>
                         <ShipmentDetails state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange} step={shipmentStep} setStep={setShipmentStep}/>
                     </CardContent>
                        )
            case 2:
                return   (
                        <CardContent>
                            <SenderDetails state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange} step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
            case 3:
                return   (
                        <CardContent>
                            <ReceiverDetails state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange} step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
            case 4:
                return   (
                        <CardContent>
                            <CheckOut state={state} setState={setState}  handleChange={handleChange} step={shipmentStep} setStep={setShipmentStep}/>
                        </CardContent>
                        )
        } 
   
}

export default ShipmentContent