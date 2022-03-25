
import PricingCard from '../Components/Pricing/PricingCard'
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'
import Head from 'next/head'

const GetPricing = () => {
  
  return (
    <>
    <Head>
     <title>Get Pricing || Zajil</title>
     <meta name="description" content="" />
     
 </Head> 
<HeroCardLayout>
    <PricingCard/>
</HeroCardLayout>
  </>

  )
}

export default GetPricing