import Footer from "./Footer"
import Header from "./Header"
import Chat from "./Chat"


const Layout = ({children,noShipment}) => {
  return (
      <>
        <Header noShipment={noShipment}/>
        {children}
        <Chat/>
        <Footer/> 
      </>
  )
}

export default Layout