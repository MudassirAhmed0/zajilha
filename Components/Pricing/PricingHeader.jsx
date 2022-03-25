import CardHeader from '../Shipment/CardHeader'
import styles from '../../styles/Chalja.module.css'
const PricingHeader = () => {
  return (
    <CardHeader pricingHeader={styles.pricingHeader}>
         <h4 className="md:text-3xl text-xl medium-font text-blue mx-auto">
         Get Pricing and Transit estimates
        </h4>
    </CardHeader>
  )
}

export default PricingHeader