import Carousel from "react-multi-carousel";
import styles from '../../../arStyles2/Ecommerce.module.css'
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};


const HomeCarousel = ({ content, setVisibleTab, visibleTab }) => {


    return (

        <>
            <div className={`parent  mx-auto max-1394 xl:mt-28 mt-[49px] ${styles.ecoCarousel}`}>

                <Carousel infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}  renderArrowsWhenDisabled={false} responsive={responsive}  >
                    {content.map((item, index) =>
                        <p onClick={() => setVisibleTab(item.id)} className={`${visibleTab === item.id ? styles.active : styles.noborder} cursor-pointer xl:mx-4 mx-0 text-lg medium-font text-grey text-center`} key={index}>{item.mainHeading}</p>
                    )}
                </Carousel>
            </div> 
        </>

    )
}

export default HomeCarousel
