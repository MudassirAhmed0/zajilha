 
import styles from '../../../arStyles/Chalja.module.css';

const CardContent = ({children,noPadding }) => { 
  return (
    <div className={`pt-6 pb-10  ${noPadding || styles.shipmentContent}`}>
      <div className='max-1394 mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default CardContent