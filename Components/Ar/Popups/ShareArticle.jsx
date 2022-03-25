import Modal from './Modal' 
import facebook from '../../assets/NewImages/svg/facebook.svg'
import twitter from '../../assets/NewImages/svg/twitter.svg'
import linkedin from '../../assets/NewImages/svg/linkedin.svg'
import email from '../../assets/NewImages/svg/email.svg'
import Image from 'next/image'

const ShareArticle = () => {
    const handleShareArticlePopup =()=>{ 
        let modal =   document.getElementById('shareArticle')
        modal.classList.remove('opacity-1')
        modal.classList.add('opacity-0')
        modal.classList.remove('pointer-events-auto')
        modal.classList.add('pointer-events-none')
      }
    return (
      <>
    <Modal py='pt-11 pb-20' modalId='shareArticle'>
            <h4 className="text-3xl text-blue medium-font mb-2">Share Article</h4> 
           
            <div className="w-7/12 flex justify-between mt-12 mb-12 text-grey"> 
             <a href="https://www.linkedin.com/shareArticle?mini=true&url=url" className="w-3-12 flex hover:scale-110 transition-all duration-300 flex-col gap-y-4" target='_blank' rel="noreferrer"  >
                <Image width={40} height={40} alt="Image" src={linkedin}/>
                <span className=''>  Share On Linkedin</span>
             </a> 
             <a href="https://twitter.com/share?text=text&url=url" target='_blank' rel="noreferrer"  className="w-3-12 flex hover:scale-110 transition-all duration-300 flex-col gap-y-4">
                <Image width={40} height={40} alt="Image" src={twitter}/>
                <span className=''>  Share On Twitter</span>
             </a>
             <a href="https://www.facebook.com/sharer.php?u=url" target='_blank' rel="noreferrer"  className="w-3-12 flex hover:scale-110 transition-all duration-300 flex-col gap-y-4">
                <Image width={40} height={40} alt="Image" src={facebook}/>
                <span className=''>  Share On Facebook</span>
             </a>
             <a href="mailto:?&subject=&cc=&bcc=&body=url" target='_blank' rel="noreferrer" className="w-3-12 flex hover:scale-110 transition-all duration-300 flex-col gap-y-4">
                <Image width={40} height={40} alt="Image" src={email}/>
                <span className=''>  Share On Email</span>
             </a>

            
                
            </div>
            
            <button onClick={handleShareArticlePopup} className='w-48 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Close Popup! 
            </button> 
    </Modal>
     
    </>
        
       
  )
}

export default ShareArticle