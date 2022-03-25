import React from 'react'
import PricingContent from './PricingContent'
import PricingHeader from './PricingHeader'
import Card from '../Shipment/Card'

const PricingCard = () => {
  return (
    <Card>
        <PricingHeader/>
        <PricingContent/>
    </Card>
  )
}

export default PricingCard