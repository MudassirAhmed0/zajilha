import yellowBox from '../../../assets/images/svg/box.jpg'
import Image from 'next/image'
import styles from '../../../arStyles/Chalja.module.css';
import creditcardIcon1 from '../../../assets/NewImages/png-files/mastercode.png'
import creditcardIcon2 from '../../../assets/NewImages/png-files/visa.png'
import madaIcon from '../../../assets/NewImages/png-files/mada.png'
import applePayIcon from '../../../assets/NewImages/png-files/apple-pay.png'
import Invoice from '../Popups/Invoice'
import { useState } from 'react';

const CheckOut = ({ step, setStep, state, setState, handleChange }) => {
    const [issue, setIssue] = useState(false)
    const handlePayment = () => {
        setIssue(state.paymentOption == '')
        if (state.paymentOption) {
            const modal = document.getElementById('invoiceModal')
            modal.classList.remove('opacity-0')
            modal.classList.add('opacity-1')
            modal.classList.remove('pointer-events-none')
            modal.classList.add('pointer-events-auto')
        }
        setTimeout(() => {
            setIssue(false)
        }, 5000)
    }
    const previousStep = () => {
        setStep(step - 1)
    }
    const handlePaymentOption = (e) => {
        setState(() => {
            return {
                ...state,
                paymentOption: e.target.value
            }
        })
    }
    return (
        <>

            <div className="flex flex-wrap gap-y-14 gap-x-5 justify-between mt-6">
                <div className="md:w-1/2  w-full ">
                    <span className="text-xl medium-font text-grey ">
                        Order Summary
                    </span>
                    <div className='bg-offWhite2 md:pt-12 md:pb-10 pb-8 pt-6 rounded mt-2 rounded-lg'>
                        <div className=' md:mx-7 mx-4 pb-9 border-b border-dividerColor '>
                            <div className='flex justify-between mb-8 flex-wrap gap-y-5'>
                                <div className=' flex flex-col md:w-auto w-1/2 '>
                                    <span className="medium-font text-grey">Type of Package</span>
                                    <span className="md:text-xl text-lg light-font">Documents</span>
                                </div>
                                <div className=' flex flex-col md:w-auto w-1/2 '>
                                    <span className="medium-font text-grey">Number of packs</span>
                                    <span className="md:text-xl text-lg light-font">01</span>
                                </div>
                                <div className=' flex flex-col  md:w-auto w-1/2'>
                                    <span className="medium-font text-grey">Service charges</span>
                                    <span className="md:text-xl text-lg light-font">50.00 SAR</span>
                                </div>
                                <div className=' w-1/2   flex-col md:hidden flex  '>
                                    <span className="medium-font text-grey">Additional Fees</span>
                                    <span className="md:text-xl text-lg light-font">5.00 SAR</span>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' w-2/5  flex-col md:flex hidden  '>
                                    <span className="medium-font text-grey">Additional Fees</span>
                                    <span className="md:text-xl text-lg light-font">5.00 SAR</span>
                                </div>
                                <div className=' flex flex-col '>
                                    <span className="medium-font text-grey">Item Name</span>
                                    <span className="md:text-xl text-lg light-font"> Legal Documents</span>
                                </div>
                            </div>
                        </div>
                        <div className={`md:mx-7 mx-4 mt-8 relative ${styles.boxesBetweenLine} `}>
                            <div className='flex   mb-10 flex-wrap  md:flex-nowrap gap-y-2'>
                                <div className=' md:w-2/5 w-full  flex gap-x-4  items-end'>
                                    <div className='relative -bottom-1'>
                                        <Image src={yellowBox} alt="Yellow Box" />
                                    </div>
                                    <div className=' flex flex-col  '>
                                        <span className="medium-font text-grey">Sender</span>
                                        <span className="md:text-xl text-lg light-font"> Ahmed Ali</span>
                                    </div>
                                </div>
                                <div className=' flex flex-col  md:w-2/5 w-9/12 pl-9 md:pl-0'>
                                    <span className="medium-font text-grey">Mobile number</span>
                                    <span className="md:text-xl text-lg light-font">+966 55 555 5555</span>
                                </div>
                                <div className=' flex flex-col '>
                                    <span className="medium-font text-grey">Address</span>
                                    <span className="md:text-xl text-lg light-font">Riyadh</span>
                                </div>
                            </div>
                            <div className='flex     flex-wrap  md:flex-nowrap gap-y-2  '>
                                <div className='md:w-2/5 w-full  flex gap-x-4  items-end'>
                                    <div className='relative -bottom-1'>
                                        <Image src={yellowBox} alt="Yellow Box" />
                                    </div>
                                    <div className=' flex flex-col'>
                                        <span className="medium-font text-grey">Receiver</span>
                                        <span className="md:text-xl text-lg light-font"> Ahmed Ali</span>
                                    </div>
                                </div>
                                <div className=' flex flex-col  md:w-2/5 w-9/12 pl-9 md:pl-0'>
                                    <span className="medium-font text-grey">Mobile number</span>
                                    <span className="md:text-xl text-lg light-font">+966 55 555 5555</span>
                                </div>
                                <div className=' flex flex-col '>
                                    <span className="medium-font text-grey">Address</span>
                                    <span className="md:text-xl text-lg light-font">Jeddah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow flex flex-col justify-between">
                    <div className='mb-5'>
                        <span className="text-xl medium-font text-grey ">
                            Payment Options
                        </span>
                        <div className="bg-offWhite2 pt-4 pb-6 px-5 text-lg font-light text-grey  rounded mt-2 rounded-lg">
                            <ul className='relative'>
                                <li className={`${styles.radioItem} mb-3 cursor-pointer`}>
                                    <input onChange={handlePaymentOption} value='Credit Card' type="radio" id='creditcard' name='paymentOption' />
                                    <label className='flex items-center ' htmlFor="creditcard">Credit Card <span className="mr-auto flex items-center"> <Image width={28} height={18} src={creditcardIcon1} alt='Credit Card' /> <span className="mr-2 ml-1 flex items-center"><Image width={39} height={26} src={creditcardIcon2} alt='Credit Card' /></span></span></label>
                                </li>
                                <li className={`${styles.radioItem} mb-3 cursor-pointer`}>
                                    <input onChange={handlePaymentOption} value='Mada' type="radio" id='mada' name='paymentOption' />
                                    <label className='flex items-center ' htmlFor="mada">Mada <span className='mr-auto flex items-center'> <Image width={46} height={16} src={madaIcon} alt='Mada' /></span></label>
                                </li>
                                <li className={`${styles.radioItem} mb-3 cursor-pointer`}>
                                    <input onChange={handlePaymentOption} value='Apple Pay' type="radio" id='applepay' name='paymentOption' />
                                    <label className='flex items-center ' htmlFor="applepay">Apple Pay <span className='mr-auto flex items-center'> <Image width={26} height={26} src={applePayIcon} alt='Apple Pay' /></span></label>
                                </li>
                                {issue && <span className='text-red-500 absolute -bottom-7'>Please Select Payment Option.</span>}
                            </ul>
                            <div className={`flex mt-7`}>
                                <div className={`medium-font  text-base ${styles.promocode}`}>
                                    <input type="text" placeholder='sds' name='promoCode' value={state.promoCode} onChange={handleChange} id='promoCode' />
                                    <label htmlFor="promoCode" className='cursor-pointer'>Promo Code</label>
                                </div>
                                <button className='w-32 border  border-grey rounded pt-1 text-grey medium-font '>
                                    Apply
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <span className="text-xl medium-font text-grey ">
                            Payment Summary
                        </span>
                        <div className="bg-offWhite2 pt-6 pb-3  px-6 rounded mt-2 rounded-lg">
                            <div className='flex justify-between text-grey'>
                                <span className=" medium-font">
                                    Sub Total
                                </span>
                                <span className="md:text-xl text-lg light-font">
                                    100.00 SAR
                                </span>
                            </div>
                            <div className='flex justify-between text-grey mt-2 pb-3 mb-3 border-b border-dividerColor2'>
                                <span className=" medium-font">
                                    VAT @5%
                                </span>
                                <span className="md:text-xl text-lg light-font">
                                    5.00 SAR
                                </span>
                            </div>
                            <div className='flex justify-between text-grey pt-2' >
                                <span className=" medium-font">
                                    Grand Total
                                </span>
                                <span className="text-xl medium-font">
                                    105.00 SAR
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-between md:flex-row flex-col-reverse gap-y-4 w-full ">
                    <button onClick={previousStep} className='md:w-48 md:h-10 w-full h-[60px]  rounded pt-1 border border-yellow'>
                        Go Back
                    </button>
                    <button onClick={handlePayment} className='md:w-48 md:h-10 w-full h-[60px] rounded shadow-lg pt-1 bg-yellow'>
                        Proceed to Payment
                    </button>
                </div>
            </div>

        </>
    )
}

export default CheckOut