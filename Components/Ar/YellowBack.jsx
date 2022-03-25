import styles from '../../arStyles/Home.module.css'
import overlays from '../../arStyles/Overlays.module.css' 

const YellowBack = ({children,classha,roundedBottom,opacity}) => {
 
  return (
    <section  className={`pt-16 pb-24  relative  ${roundedBottom && "rounded-b-xl overflow-hidden"}  ${styles.logistics} ${classha}`}>
        <span className={`${opacity ?opacity: " opacity-[0.93] "} ${overlays.logisticsOverlay}`}></span>
        {children}
    </section>
  )
}

export default YellowBack