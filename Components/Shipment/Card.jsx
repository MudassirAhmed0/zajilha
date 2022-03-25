 
import styles from '../../styles/Chalja.module.css';

const Card = ({children}) => {

  
  return (
    <div id='cardContainer' className='bg-blue'>
      <div id='card' className={styles.shipmentCard}>
          {children}
      </div>
    </div>
  )
}

export default Card