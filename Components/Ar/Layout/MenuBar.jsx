
import styles from '../../../arStyles/Layout.module.css'
import arrow from '../../../assets/NewImages/svg/arrow.svg'
import Link from 'next/link'
import Image from 'next/image'

const MenuBar = ({manageShipment}) => {
    const handleAccordion =(accordionNumber)=>{
       const accordions =  document.querySelectorAll('.menubarAccordion') 
         accordions.forEach((item,index)=>{
         if(accordionNumber === index){ 
            if(item.classList.contains('max-h-72')){
                item.classList.add('max-h-16')
             item.classList.remove('max-h-72')
             
             item.querySelectorAll('img').forEach(item=> item.classList.remove('rotate-180'))
            }else{ 
                item.classList.add('max-h-72')
                item.classList.remove('max-h-16')
                item.querySelectorAll('img').forEach(item=> item.classList.add('rotate-180'))
            }

            }  
            else{
                item.classList.add('max-h-16')
            item.classList.remove('max-h-72')
            item.querySelectorAll('img').forEach(item=> item.classList.remove('rotate-180'))
        }

       })
    }
  return (
    <div className={`flex flex-col  z-30 relative text-lg justify-between pt-28 text-white px-3.5 pb-[34px] ${styles.menubar}`} id='menubar'>
        <ul className='border-t-2'>
            <li onClick={()=> handleAccordion(0)} className='menubarAccordion max-h-16 overflow-hidden transition-all duration-300 relative'>
                <span className='pb-5 pt-5 flex justify-between w-full'>Ship <Image src={arrow} alt='dropdown'/></span>
                <ul className='flex     pb-5 flex-col gap-y-5'>
                    <li>
                        <Link href="/shipment">
                            <a >Create Shipment</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/manage-shipments">
                            <a >Manage Shipments</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/get-pricing">
                            <a >Get Price Estimate</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/branches">
                            <a >Find Nearest Branch</a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li onClick={()=> handleAccordion(1)} className='menubarAccordion border-t max-h-16 overflow-hidden transition-all duration-300 relative'>
                <span className='pb-5 pt-5 flex justify-between w-full'>Solutions <Image src={arrow} alt='dropdown'/></span>
                <ul className='flex     pb-5 flex-col gap-y-5'>
                    <li>
                        <Link href="/ecommerce">
                            <a >E-commerce</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/freight">
                            <a >Freight</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/fulfilment">
                            <a >Fulfilment</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ksadistribution">
                            <a >Domestic Distribution</a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li onClick={()=> handleAccordion(2)} className='menubarAccordion border-y max-h-16 overflow-hidden transition-all duration-300 relative'>
                <span className='pb-5 pt-5 flex justify-between w-full'>Help & Support <Image src={arrow} alt='dropdown'/></span>
                <ul className='flex     pb-5 flex-col gap-y-5'>
                    <li>
                        <Link href="/faqs">
                            <a >FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a >Contact Us</a>
                        </Link>
                    </li>
                    
                </ul>
            </li>
        </ul>
        <button onClick={manageShipment} className='bg-white text-blue text-xl h-[58px] rounded-md shadow-lg'>
            Manage Shipment
        </button>
    </div>
  )
}

export default MenuBar