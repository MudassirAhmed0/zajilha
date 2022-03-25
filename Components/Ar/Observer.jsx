import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';

const Observer = ({setState,children}) => {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
    {({isVisible})=>{
          if (isVisible){
              setState(true) 
          } 
     return (children)
    }}
    </VisibilitySensor>
  )
}

export default Observer