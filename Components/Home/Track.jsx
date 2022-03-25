import styles from '../../styles/Home.module.css'
import layoutStyles from '../../styles/Layout.module.css' 

const Track = () => {
  return (
    <div className={` overflow-hidden max-1394 mx-auto ${styles.track}`}>
       <div className="grow flex flex-col justify-center">
               <div className={`flex md:flex-row flex-col gap-y-[18px]`}>
                 <div className={` ${layoutStyles.newsletter} ${layoutStyles.track}`}>
                  <input type="text"   placeholder='sa' name='track' id='track'/>
                  <label htmlFor="track">Tracking Number</label>
                 </div> 
                 <button className='md:w-32  md:h-auto h-[50px] border border-white rounded-md text-grey bg-white  hover:tracking-wider transition-all transition-all duration-300 medium-font  shadow-md hover:bg-white hover:text-blue'>
                  Track
                 </button>
                </div>
            </div>
    </div>
  )
}

export default Track