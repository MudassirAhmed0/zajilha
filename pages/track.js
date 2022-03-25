import Head from 'next/head' 
import CancelShipment from '../Components/Popups/CancelShipment'
import TrackingInfo from '../Components/Popups/TrackingInfo'
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'
import TrackingCard from '../Components/Track/TrackingCard'

const Track = () => {
 
  return (
    <>
    <Head>
     <title>Tracking || Zajil</title>
     <meta name="description" content="" />
     
 </Head> 
<HeroCardLayout>
    <TrackingCard/>
</HeroCardLayout>

<CancelShipment/>
<TrackingInfo/>
  </>
  )
}

export default Track