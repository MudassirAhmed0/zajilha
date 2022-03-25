import Modal from './Modal' 

const FAQModal = ({content}) => {
    const handleInfoPopup =()=>{ 
        let modal =   document.getElementById('faqModal')
        modal.classList.remove('opacity-1')
        modal.classList.add('opacity-0')
        modal.classList.remove('pointer-events-auto')
        modal.classList.add('pointer-events-none')
      }
    return (
      <>
    <Modal py='pt-11 pb-20' modalId='faqModal'>
            <h4 className="text-3xl text-blue medium-font mb-2">{content.question}</h4> 
           
            <div className="w-full flex flex-col mt-8 mb-8">
              <p className='text-lg text-grey text-center'>
                 {content.answer}  
                   </p> 
            
                
            </div>
            
            <button onClick={handleInfoPopup} className='w-48 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Okay, got it! 
            </button> 
    </Modal>
     
    </>
        
       
  )
}

export default FAQModal