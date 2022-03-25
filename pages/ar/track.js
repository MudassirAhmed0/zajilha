import Head from 'next/head'
import CancelShipment from '../../Components/Ar/Popups/CancelShipment'
import TrackingInfo from '../../Components/Ar/Popups/TrackingInfo'
import HeroCardLayout from '../../Components/Ar/Shipment/HeroCardLayout'
import TrackingCard from '../../Components/Ar/Track/TrackingCard'

const Track = () => {

  return (
    <>
      <Head>
        <title>Tracking || Zajil</title>
        <meta name="description" content="" />

      </Head>
      <HeroCardLayout>
        <TrackingCard />
      </HeroCardLayout> 
      <CancelShipment />
      <TrackingInfo />
    </>
  )
}

export default Track