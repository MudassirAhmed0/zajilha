import  { useEffect, useState } from 'react'
import Card from '../Shipment/Card'
import ManageContent from './ManageContent'
import ManageHeader from './ManageHeader'

const ManageCard = () => {
    const [showTrack,setShowTrack]= useState(false)
    const [heading,setHeading] = useState('Track your shipment by')
    useEffect(()=>{
        setHeading(showTrack ?"Manage your Shipments":"Track your shipment by")
    },[showTrack])
  return (
    <Card>
        <ManageHeader heading={heading}/>
        <ManageContent showTrack={showTrack} setShowTrack={setShowTrack}/>
    </Card> 
  )
}

export default ManageCard