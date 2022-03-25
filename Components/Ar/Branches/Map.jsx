import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

const Map = () => {

    const coordinate = { lat:21.4858, lng: 39.1925 }

  return (
    <div className='h-full'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCpU_U9dBKsILBrm4AQ9tYojZGRMWnXbME' }}
            center={coordinate}
            defaultZoom={14}
        >
        <Marker
            lat={21.4858}
            lng={39.1925}
         />
        <Marker
            lat={21.4811}
            lng={39.1873}
         />
        <Marker
            lat={21.4742}
            lng={39.1872}
         />
        <Marker
            lat={21.4815}
            lng={39.2009}
         />
        <Marker
            lat={21.4976}
            lng={39.1813}
         />


        </GoogleMapReact>
    </div>
  )
}

export default Map