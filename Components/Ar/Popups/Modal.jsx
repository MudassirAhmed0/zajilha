import  { useEffect } from 'react'

const Modal = ({modalId,children,py}) => {
    useEffect(()=>{
        
        const handleClick =(e)=>{
          if ( e.target.classList.contains("popup") ){
 
            let modal =   document.getElementById(modalId)
            modal.classList.remove('opacity-1')
            modal.classList.add('opacity-0')
            modal.classList.remove('pointer-events-auto')
            modal.classList.add('pointer-events-none')
        }
        }
        
        window.addEventListener("click", handleClick);
        
        return () => window.removeEventListener("click", handleClick);
    },[modalId])
  return (
    <div id={modalId} className="fixed w-full z-20 popup min-h-full transition-all duration-300 opacity-0 pointer-events-none  popup bg-overlayBackground top-0  left-0 flex justify-center items-center">
    <div className={`max-w-screen-lg  overflow-hidden md:w-9/12  w-[390px] px-[30px] text-center rounded-lg bg-white ${py} flex flex-col items-center`}>
        {children}
    </div>
    </div>
  )
}

export default Modal