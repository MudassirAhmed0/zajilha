
import styles from '../../styles/Layout.module.css'
import chatIcon from '../../assets/NewImages/svg/chat.svg'
import Image from 'next/image'

const Chat = () => {
  return (
    <div className={`flex justify-center items-center cursor-pointer z-20 ${styles.chat}`}>
        <Image src={chatIcon} alt="chat"/>
    </div>
  )
}

export default Chat