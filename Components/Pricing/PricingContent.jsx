import {useEffect, useRef, useState} from 'react'
import CardContent from '../Shipment/CardContent'
import ShipmentButton from '../Shipment/ShipmentButton'
import ShipmentDropDown from '../Shipment/ShipmentDropDown'
import Link from 'next/link'

const cities =[
    "Abhā",
    "Abqaiq",
    "Al-Baḥah",
    "Al-Dammām",
    "Al-Hufūf",
    "Al-Jawf",
    "Al-Kharj (oasis)",
    "Al-Khubar",
    "Al-Qaṭīf",
    "Al-Ṭaʾif",
    "ʿArʿar",
    "Buraydah",
    "Dhahran",
    "Ḥāʾil",
    "Jiddah",
    "Jīzān",
    "Khamīs Mushayt",
    "King Khalīd Military City",
    "Mecca",
    "Medina",
    "Najrān",
    "Ras Tanura",
    "Riyadh",
    "Sakākā",
    "Tabūk",
    "Yanbuʿ",
]
const grossWeights =[
    "10 KG",
    "20 KG",
    "30 KG",
    "40 KG",
    "50 KG",
    "60 KG",
    "70 KG",
    "80 KG",
]
const numberOfPacks =[
    "1 Pack",
    "2 Packs",
    "3 Packs",
    "4 Packs",
    "5 Packs",
    "6 Packs",
    "7 Packs",
    "8 Packs",
]

const PricingContent = () => {
    const [gWError,setGWError] = useState(false)
    const [packError,setPackError]=useState(false)
    const [dekho,setDekho]=useState(false)
    const [state,setState] =  useState({
        from:'Jeddah',
        to:'Riyadh',
        shippingPlan:'Documents',
        grossWeight:'',
        numberOfPacks:'',
        shippingType:'Domestic'

    })
    const calculated = useRef()
    const calculate =()=>{
        setGWError(state.grossWeight =='')
        setPackError(state.numberOfPacks =='')
        if(state.grossWeight && state.numberOfPacks){
            setDekho(!dekho)
        let item = calculated.current
        item.classList.add('max-h-80')
        item.classList.remove('max-h-0')
    }
    setTimeout(()=>{
        setGWError(false)
        setPackError(false)
    },5000  )
    }
    const handleClick =(e)=>{
        setState(()=>{
            if(e.target.id !== "shippingType"){
            return {
                ...state,
                shippingPlan:e.target.innerText
            }
        }else{
            return {
                ...state,
                shippingType:e.target.innerText
            }
            }
        })
  }
  const handleDropDownClick =(id,e)=>{
    setState(()=>{
        return {
            ...state,
            [id]:e.target.innerText
        }
    })
  }
  useEffect(()=>{
      setTimeout(()=>{
          const height =  document.getElementById('card').clientHeight - 606
      
          document.getElementById('cardContainer').style.height = height >5 ? height +"px":0

      },300)
    
  },[dekho])
  return (
    <CardContent >
        <div className='justify-center flex gap-x-6' >
        
        <button onClick={handleClick} id='shippingType' className={`w-40 md:h-10 h-[45px] rounded-md    medium-font  text-grey ${state.shippingType ==='Domestic' ? "bg-yellow shadow": "border border-yellow"}`}>
                        Domestic
            </button>
        <button onClick={handleClick} id='shippingType' className={`w-40 md:h-10 h-[45px] rounded-md    medium-font  text-grey ${state.shippingType ==='International' ? "bg-yellow shadow": "border border-yellow"}`} >
                       International
            </button>
        </div>
        <div className="flex flex-wrap md:gap-y-14 gap-y-8 justify-between mt-10">
        <div className="md:w-[46%] w-full   gap-x-16 flex flex-col">
            <span className='medium-font text-grey text-xl mb-3'>
                 From City
            </span>
            <ShipmentDropDown handleClick={handleDropDownClick} id={'from'} options={cities} label={state.from}/> 
        </div>     
        <div className="md:w-[46%] w-full   gap-x-16 flex flex-col">
            <span className='medium-font text-grey text-xl mb-3'>
                 To City
            </span>
            <ShipmentDropDown handleClick={handleDropDownClick} id={'from'} options={cities} label={state.to}/> 
        </div>
        <div className="md:w-[46%] w-full   gap-x-5 flex flex-col gap-y-4">
            <span className='medium-font text-xl text-grey'>What are you planning to Ship?</span>
            <div className='gap-x-5 flex'>
            <ShipmentButton bigBtn handleClick={handleClick} active={state.shippingPlan ==="Documents"} label='Documents'/>
           <ShipmentButton bigBtn handleClick={handleClick} active={state.shippingPlan ==="Packages"} label='Packages'/>
            </div>
        </div>      
        <div className="md:w-[46%] w-full md:flex-row  flex-col  gap-x-16 gap-y-8 flex md:items-end">
        <ShipmentDropDown id='grossWeight'  issue={gWError} handleClick={handleDropDownClick} options={grossWeights} label={state.grossWeight || "Total Gross Weight"}/>
            <ShipmentDropDown id='numberOfPacks' issue={packError} handleClick={handleDropDownClick} options={numberOfPacks} label={state.numberOfPacks || "Number of Packs"}/>
        </div> 
        <div className='w-full flex justify-center'>
            <button onClick={calculate}  className='md:w-48 md:h-10 w-full  h-[60px] rounded-md shadow-lg   mt-5   mx-auto medium-font   text-grey bg-yellow'>
                            Calculate
                </button>

        </div>
        <div className="max-h-0 w-full transition-all duration-300 overflow-hidden" ref={calculated}>
            <div className="w-full  rounded-lg shadow-lg flex flex-col bg-yellow pt-4 pb-8 md:px-11 px-[22px]">
                <span className='text-grey medium-font'>Your Shipment Rate Results</span>
                <div className='flex items-end flex-wrap md:flex-nowrap justify-between'>
                    <div className='flex flex-col mt-4 md:w-1/5 w-1/2' >
                        <span className='text-grey medium-font'>From</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Jeddah</span>  
                    </div>
                    <div className='flex flex-col mt-4 md:w-1/5 w-1/3' >
                        <span className='text-grey medium-font'>To</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Riyadh</span>  
                    </div>
                    <div className='flex flex-col mt-4 md:w-1/5 w-1/2' >
                        <span className='text-grey medium-font'>Status</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>Documents</span>  
                    </div>
                    <div className='flex flex-col mt-4 md:w-1/5 w-1/3' >
                        <span className='text-grey medium-font'>Shipping</span>  
                        <span className='text-grey text-xl -mt-1 medium-font'>98.67 SAR</span>  
                    </div>
                    <Link href="/shipment" >
                        <a className='md:w-40 md:h-11 w-full h-[52px] rounded  mt-5 md:mt-0   flex justify-center items-center medium-font  text-grey bg-white shadow-lg ml-auto'>
                        Create Shipment
                        </a>
                     </Link>
                </div>
            </div> 
        </div>
        </div>
    </CardContent>
  )
}

export default PricingContent