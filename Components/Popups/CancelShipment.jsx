import Modal from './Modal'

const CancelShipment = () => {
    const cancel =()=>{
        let modal =   document.getElementById("cancelShipment")
        modal.classList.remove('opacity-1')
        modal.classList.add('opacity-0')
        modal.classList.remove('pointer-events-auto')
        modal.classList.add('pointer-events-none')
    }
  return (
    <Modal py='pt-11 pb-12' modalId='cancelShipment'>
    <h4 className="text-3xl text-blue medium-font mb-2">Cancel Your Shipment</h4>
    <div className="md:px-11 w-full md:mb-14 pb-1 my-10 md:mt-14 pt-1">
        <div className='mobileNumberInput'>
            <input type="text" placeholder='reason'/>
            <label htmlFor="Reason">Reason</label>
        </div>
        <div className='cancelConfirmation mt-3.5  flex'>
            <input type="checkbox" id='cancelConfirmation' name='cancelConfirmation' className='peer hidden' />
            <label htmlFor="cancelConfirmation" className='light-font md:text-lg flex gap-x-2.5 items-center peer-checked:after:text-white peer-checked:before:bg-blue peer-checked:after:content-["\2714\0020"] after:absolute after:text-xs after:ml-1 text-grey before:mb-0.5 before:border-grey before:border before:content-["  "] before:block before:h-4 before:w-4 before:bg-yellow before:rounded-sm text-sm '>Send a confirmation of order cancellation via email</label>
        </div>
    </div>
   <div className='flex gap-x-5 md:flex-row flex-col-reverse gap-y-4 w-full justify-end w-full md:px-11'>
        <button  onClick={cancel} className='md:w-32 md:h-10 rounded-md w-full h-[60px]    border border-yellow text-grey '>
                    Cancel
        </button>
        <button  className='md:w-32 md:h-10 rounded-md  w-full h-[60px]   shadow-lg text-grey bg-yellow'>
                    Submit
        </button>
   </div>
</Modal>
  )
}

export default CancelShipment