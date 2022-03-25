import masterCard from '../../assets/NewImages/png-files/master.png'
import visaCard from '../../assets/NewImages/png-files/visa.png'
import Image from 'next/image'
import ShipmentTextInput from '../Shipment/ShipmentTextInput' 
import Modal from './Modal'
import PaymentSuccessful from './PaymentSuccessful'

const Invoice = () => {
    const handlePay =()=>{
        const invoiceModal = document.getElementById('invoiceModal')
        invoiceModal.classList.remove('opacity-1') 
        invoiceModal.classList.remove('pointer-events-auto')
        invoiceModal.classList.add('opacity-0') 
        invoiceModal.classList.add('pointer-events-none')
        
        const modal = document.getElementById('paymentSuccessful')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    } 
    return (
      <>
    <Modal py='md:pt-11 md:pb-20 py-10' modalId='invoiceModal'>
            <h4 className="text-3xl text-blue medium-font mb-2">Pay Invoice</h4>
            <span className="text-lg text-grey light-font mb-1">Credit Card Information</span>
            <div className='flex gap-x-1'>
                <Image width={38} height={18} src={masterCard} alt='Master Card'/>
                <Image width={39} height={26} src={visaCard} alt='Visa Card'/>
            </div>
            <div className="md:w-7/12 w-full flex flex-col mt-12 mb-12">
                <div>
                    <ShipmentTextInput label='Card Holder Name' fontMedium/>
                </div>
                <div className='flex gap-x-6 mt-7 flex-wrap md:flex-nowrap'>
                    <div className='md:w-5/12 w-full mb-8 md:mb-0'>
                        <ShipmentTextInput label='Card Number' fontMedium/>
                    </div>
                    <div className='md:w-4/12 w-6/12'>
                        <ShipmentTextInput label='Expiry' fontMedium/>
                    </div>
                    <div className='md:w-3/12 w-4/12 ml-auto md:ml-0'>
                        <ShipmentTextInput label='CVC' fontMedium/>
                    </div>
                </div>
                
            </div>
            <button onClick={handlePay} className='md:w-48 md:h-10 rounded-md h-[60px] w-full  shadow-lg pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Pay Now 
            </button>
        <div className="mb-2.5 hidden md:block"></div>
    </Modal>
    
    <PaymentSuccessful/>
    </>
        
       
  )
}

export default Invoice