import styles from '../../styles/Chalja.module.css';

const CardHeader = ({children,pricingHeader}) => {
  return (
    <div className={`${pricingHeader && styles.pricingHeader} ${styles.shipmentHeader}`}> 
    <div className={`flex flex-col md:flex-row md:flex-center md:items-center md:justify-between h-full max-1394 mx-auto `}>
      {children}
    </div>
  </div>
  )
}

export default CardHeader