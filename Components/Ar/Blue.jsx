import React, { useEffect, useRef } from 'react'
import styles from '../../arStyles/Home.module.css'

const Blue = ({children,boxShadowNone,home,about2}) => {
  const blue = useRef()
  const white = useRef()
  useEffect(()=>{
   setTimeout(()=>{
     if(!about2){
    let toBeSubtracted = home ? 69 :132
    let height =white.current.clientHeight - toBeSubtracted 
    console.log(height)
    blue.current.style.height = height+"px"}
   },500)
  },[about2, home])
  return (
    <section ref={blue} className={`relative    ${styles.blueBack}`}>
        
        <div ref={white} className={`   overflow-visible  ${about2? styles.about2 :   home ? styles.home  :styles.about}   ${boxShadowNone} ${styles.whiteCard}`}>
         {children}
        </div> 
    </section>
  )
}

export default Blue