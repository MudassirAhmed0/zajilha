import Head from 'next/head' 
import ManageCard from '../Components/ManageShipments/ManageCard'
import CancelShipment from '../Components/Popups/CancelShipment'
import Invoice from '../Components/Popups/Invoice'
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'

const ManageShipments = () => {
   
  return (
    <>
    <Head>
        <title>Manage Shipments || Zajil</title>
        <meta name="description" content="" />
        
    </Head>    
    <HeroCardLayout>
          <ManageCard/>
    </HeroCardLayout>
    
    <CancelShipment/>
    <Invoice/>
 </>
  )
}

export default ManageShipments