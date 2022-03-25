import React from 'react'
import Card from '../Shipment/Card'
import TrackingContent from './TrackingContent'
import TrackingHeader from './TrackingHeader'

const TrackingCard = () => {
  return (
    <Card>
        <TrackingHeader/>
        <TrackingContent/>
</Card> 
  )
}

export default TrackingCard