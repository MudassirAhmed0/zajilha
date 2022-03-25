import Head from 'next/head' 
import { useEffect } from 'react'
import ManageCard from '../../Components/Ar/ManageShipments/ManageCard'
import CancelShipment from '../../Components/Ar/Popups/CancelShipment'
import HeroCardLayout from '../../Components/Ar/Shipment/HeroCardLayout'
import Invoice from '../../Components/Ar/Popups/Invoice'

const ManageShipments = () => {
  useEffect(()=>{
    document.querySelector('html').dir = 'rtl'
  },[])
   
  return (
    <>
    <Head>
        <title>Manage Shipments || Zajil</title>
        <meta name="description" content="" />
        
    </Head>    
    <HeroCardLayout>
          <ManageCard/>
    </HeroCardLayout>
    <Invoice/>
    <CancelShipment/>

 </>
  )
}

export default ManageShipments