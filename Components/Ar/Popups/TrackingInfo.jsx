import Modal from './Modal' 

const TrackingInfo = () => {
    const handleInfoPopup =()=>{ 
        let modal =   document.getElementById('trackingInfo')
        modal.classList.remove('opacity-1')
        modal.classList.add('opacity-0')
        modal.classList.remove('pointer-events-auto')
        modal.classList.add('pointer-events-none')
      }
    return (
      <>
   <Modal py='md:pt-11 md:pb-20 pt-10 pb-10' modalId='trackingInfo'>
            <h4 className="text-3xl text-blue medium-font mb-2">Info Popup</h4> 
           
            <div className="md:w-7/12 w-full flex flex-col md:mt-8 mt-4  mb-8">
              <p className='text-lg text-grey text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci numquam sunt, assumenda nihil alias delectus nisi distinctio in eaque iste deserunt non rerum maiores tempora, nam voluptates aspernatur nobis.
            </p> 
            
                
            </div>
            
            <button onClick={handleInfoPopup} className='md:w-48 md:h-10 w-full h-[60px] rounded-md  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Okay, got it! 
            </button> 
    </Modal>
     
    </>
        
       
  )
}

export default TrackingInfo