import styles from '../../../arStyles/Chalja.module.css';
import CardHeader from './CardHeader'

const ShipmentHeader = ({shipmentStep}) => {
  return (
    <CardHeader>
        <h4 className="md:text-3xl text-xl medium-font text-blue">
        Create a Shipment
        </h4>
        <div className={`flex gap-x-8 relative ${styles.stepsLine}`}>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`bg-yellow block text-yellow ${styles.hexagon}`}>
                </span>
                <span className={`medium-font md:text-lg text-sm text-white ${styles.shipmentNumber}`}>
                    01
                </span>
            </div>
            <span className=' text-xs md:text-sm medium-font text-grey text-center'>
            Shipment Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 2? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font md:text-lg text-sm text-white ${styles.shipmentNumber}`}>
                    02
                </span>
            </div>
            <span className={`text-xs md:text-sm medium-font transition-all  text-center ${shipmentStep >= 2? "text-grey":"text-darkGrey"}`}>
            Sender Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 3? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font md:text-lg text-sm text-white ${styles.shipmentNumber}`}>
                    03
                </span>
            </div>
            <span className={`text-xs md:text-sm medium-font transition-all  text-center ${shipmentStep >= 3? "text-grey":"text-darkGrey"}`}>
            Receiver Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 4? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font md:text-lg text-sm text-white ${styles.shipmentNumber}`}>
                    04
                </span>
            </div>
            <span className={`text-xs md:text-sm medium-font transition-all  text-center ${shipmentStep >= 4? "text-grey":"text-darkGrey"}`}>
            Checkout
            </span>
        </div>
        
        </div>
     </CardHeader>
  )
}

export default ShipmentHeader