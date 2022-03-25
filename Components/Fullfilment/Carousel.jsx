import Carousel from "react-multi-carousel";
import styles from '../../styles2/Ecommerce.module.css'
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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const HomeCarousel = ({ content, setVisibleTab, visibleTab,fullfill }) => {


    return (

        <>
            <div className={` parent parentfull ${fullfill && "parentfulll"} mt-28`}>

                <Carousel removeArrowOnDeviceType={["tablet", "mobile"]}  renderArrowsWhenDisabled={true} responsive={responsive}>
                    {content.map((item, index) =>
                        <p onClick={() => setVisibleTab(item.id)} className={`${visibleTab === item.id ? styles.active : styles.noborder} xl:mx-4 mx-0 cursor-pointer text-lg medium-font text-grey text-center`} key={index}>{item.mainHeading}</p>
                    )}
                </Carousel>
            </div> 
        </>

    )
}

export default HomeCarousel
