import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import location from '../../../assets/NewImages/svg/location.svg'
import call from '../../../assets/NewImages/svg/call.svg'
import clocks from '../../../assets/NewImages/svg/clocks.svg'
import feature from '../../../assets/NewImages/svg/feature.svg'
import styles from '../../../arStyles/Branches.module.css'
import ShipmentDropDown from '../../Shipment/ShipmentDropDown';
import Map from './Map';

const country = [
    "Saudia Arabia",
    "UAE",
    "USA",
    "Qatar",
    "China",
    "Pakistan"
]
const city = [
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
]
const workingTimes = [
    "Saudia Arabia",
    "UAE",
    "USA",
    "Qatar",
    "China",
    "Pakistan"
]
const typesServices = [
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
    "Riyadh",
    "Dubai",
]

const BranchesDetail = ({ step, setStep, state, setState, handleDropDownClick }) => {
    const [checked, setChecked] = useState(true);
    const [gWError, setGWError] = useState(false)
    const [packsError, setPacksError] = useState(false)

    const nextStep = () => {
        const { shippingPlan, grossWeight, numberOfPacks, pickUpDate, pickUpTime, goodValues, nameOfItem, description } = state
        setGWError(grossWeight == '')
        setPacksError(numberOfPacks == '')
        setDateError(pickUpDate == '')
        setTimeError(pickUpTime == '')
        setGVError(goodValues == '')
        setNameError(nameOfItem == '')
        setDescriptionError(description == '')

        if (shippingPlan && grossWeight && numberOfPacks && pickUpDate && pickUpTime && goodValues && nameOfItem && description) {
            setStep(step + 1)

        }
        setTimeout(() => {
            setGWError(false)
            setPacksError(false)
            setDateError(false)
            setTimeError(false)
            setGVError(false)
            setNameError(false)
            setDescriptionError(false)
        }, 5000)
    }
    return (
        <div className={`flex ${styles.wrap}`}>
            <div className={`${styles.flterWidth} shadow-mapAr z-10`}>
                <div className={`${styles.filterDetail}`}>
                    <div className='flex justify-between'>
                        <h5 className='text-xl medium-font text-grey'>Filter By</h5>
                        <div className='flex  gap-x-5 items-center'>
                            <p className='text-base regular-font text-grey'>Near By</p>
                            <label className={`${styles.switch}`}>
                                <input className={`${styles.input}`} type="checkbox" onChange={() => setChecked(!checked)} defaultChecked={checked} />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-5  lg:gap-x-16 gap-x-8  flex">
                        <ShipmentDropDown issue={gWError} handleClick={handleDropDownClick} options={country} label="Country" />
                        <ShipmentDropDown issue={packsError} handleClick={handleDropDownClick} options={city} label="City" />
                    </div>
                    <div className="mt-5  lg:gap-x-16 gap-x-8  flex">
                        <ShipmentDropDown issue={gWError} handleClick={handleDropDownClick} options={workingTimes} label="Working Times" />
                        <ShipmentDropDown issue={packsError} handleClick={handleDropDownClick} options={typesServices} label="All Services" />
                    </div>
                </div>
                <div className={`${styles.filetTwo}`}>
                    <div className={styles.maxHeight}>
                        <h6 className={`${styles.font22} text-grey medium-font`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                        <h6 className={`${styles.font22} text-grey medium-font mt-6`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.clocks}`} >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                        <h6 className={`${styles.font22} text-grey medium-font mt-5`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.maph}>
                <Map />
            </div>
            <div className={`${styles.marwaRahaHai}`}>
                <div className={`${styles.filetTwoSecond}`}>
                    <div className={styles.maxHeight}>
                        <h6 className={`${styles.font22} text-grey medium-font`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                        <h6 className={`${styles.font22} text-grey medium-font mt-6`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.clocks}`} >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                        <h6 className={`${styles.font22} text-grey medium-font mt-5`}>Address Title</h6>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconOne}`}>
                                <Image src={location} alt="Location Icon" />
                            </span>
                            <p className={`${styles.font19} text-grey light-font`}>Lorem ipsum, or lipsum as it is print it is or lorem</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={call} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font`}>+966 9200 00 177</p>
                        </div>
                        <div className='flex items-center mt-3 gap-x-3.5'>
                            <span >
                                <Image src={clocks} alt="Location Icon" />
                            </span>
                            <p className={`text-lg text-grey light-font pl-5`}>Sunday - Thursday ( 7AM - 11PM ) Saturday ( 7AM - 10PM )</p>
                        </div>
                        <div className={`${styles.borderBottom} flex items-center mt-3 gap-x-3.5`}>
                            <span className={`${styles.iconTwo}`}>
                                <Image src={feature} alt="Location Icon" />
                            </span>
                            <Link href="#" >
                                <a>
                                    <p className={`text-lg pt-1`}>Show in Google Map</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchesDetail