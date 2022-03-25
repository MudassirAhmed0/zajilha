import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles2/faqs.module.css'
import layoutStyles from '../../styles2/Layout.module.css'
import search from '../../assets/NewImages/svg/search.svg'
import topFrame from '../../assets/NewImages/svg/faqs-top-frame.svg'
import bottomFrame from '../../assets/NewImages/svg/frame.png'
import Select from 'react-select';

const options = [
    { list:1, value: 'leftParaOne', label: 'Where can I drop off my package for pick-up?' },
    { list:1, value: 'leftParaTwo', label: 'What is your pricing?' },
    { list:1, value: 'leftParaThree', label: 'What does a Zajil tracking number look like?' },
    { list:1, value: 'leftParaFour', label: 'How do I create a COD shipment?' },
    { list:1, value: 'leftParaFive', label: 'What’s the difference between Door-to-door service (D2D) and Last-mile Delivery (LMD) service?' }, 
    { list:1, value: 'RightParaOne', label: 'I’m a normal person. Do I need to create an account before I can ship with Zajil?' },
    { list:1, value: 'RightParaTwo', label: 'How do I start a return?' },
    { list:1, value: 'RightParaThree', label: 'How can I contact a person to help me?' },
    { list:1, value: 'RightParaFour', label: 'How can I file a claim?' },
    { list:1, value: 'RightParaFive', label: 'Do you ship to all countries?' },
    { list:1, value: 'RightParaSix', label: 'What are the requirements for shipping, such as size, shape, or weight of my package?' }, 
    { list:2, value: 'leftParaOne', label: 'How can I contact a person to help me?' }, 
    { list:2, value: 'leftParaTwo', label: 'How can I file a claim?' }, 
    { list:2, value: 'leftParaThree', label: 'Do you ship to all countries?' }, 
    { list:2, value: 'leftParaFour', label: 'How can I order supplies?' }, 
    { list:2, value: 'leftParaFive', label: 'I have a particular need for a custom shipping solution. Who do I talk to?' }, 
    { list:2, value: 'RightParaOne', label: 'My package is delayed, and the tracking report is incorrect. What should I do?' }, 
    { list:2, value: 'RightParaTwo', label: 'I want to ship to international customers. How can I do this without a hassle?' }, 
    { list:2, value: 'RightParaThree', label: 'How do I connect my e-commerce sales system to Zajil?' }, 
];

const FaqsDetails = ({ setPopupData, openModal }) => {

    const data = [
        {
            id: "1",
            listnaem: "For Individuals",
            leftHeadingOne: "- Where can I drop off my package for pick-up?",
            leftHeadingTwo: "- What is your pricing?",
            leftHeadingThree: "- What does a Zajil tracking number look like?",
            leftHeadingFour: "- How do I create a COD shipment?",
            leftHeadingFive: "- What’s the difference between Door-to-door service (D2D) and Last-mile Delivery (LMD) service?", 
            leftParaOne: "You can drop your package at one of Zajil’s branch office or centers. Click here for the most current list.",
            leftParaTwo: "Zajil is committed to the most affordable rate for business and personal shipping services. Use our web site’s shipping calculator or the Zajil app to get a pricing estimate before you ship.",
            leftParaThree: "The Zajil Express shipping number will be different for business customers and consumers. Consumer tracking numbers are <insert pattern and major identifiers here.> Business tracking numbers <insert pattern and major identifiers here.>",
            leftParaFour: "Zajil offers convenient options for e-commerce sites and shippers to collect payment at the time of delivery, with essentially no limit. Once delivery is made, Zajil submits the collected funds back to the seller, less the shipping cost and a small fee agreed to in advance. Credit terms apply.To learn how to set up a COD shipment, talk to a Zajil account representative today.",
            leftParaFive: "Last-mile Delivery is where Zajil takes responsibility to complete the final stage of shipment.This is a common term in business shipping that arises when goods are shipped from long-distances and through various modes of transport such as Air, Sea, or Overland (including rail androadway). Very often such large-volume modes require smaller transport fleet to cover the “lastmile,” a term describing the distance between a warehouse or distribution center and the final destination such as a home or office. It is usually much more than a mile. Door-to-door service is offered to take responsibility for the entire shipping route, from the point of origin (where the shipment or package is to be picked up) to the destination, the final delivery point. Door-to-door service is typical of small packages such as overnight express packages. Some businesses have very complex supply chains with multiple shipping carrier involvement. For these customers Zajil is the single-point of contact responsible for managing every stage ofthe pick-up and delivery process.",
            RightHeadingOne: "- I’m a normal person. Do I need to create an account before I can ship with Zajil?",
            RightHeadingTwo: "- How do I start a return?",
            RightHeadingThree: "- How can I contact a person to help me?",
            RightHeadingFour: "- How can I file a claim?",
            RightHeadingFive: "- Do you ship to all countries?",
            RightHeadingSix: "- What are the requirements for shipping, such as size, shape, or weight of my package?",
            RightParaOne: "No! Zajil has simplified the process for individual shippers and business shippers alike. Simply download our app or create a shipment using our website. All you need is a mobile number and adevice that can receive text message verification. It’s that easy! Businesses with much more complex needs, and with higher risks, will want the security of a business account that includes ourexpanded service level agreement.",
            RightParaTwo: "Zajil makes returns easy. Individuals should manage returns using our app or web site. Businesses should contact a Zajil Business Solutions expert about inventory management, pick-n-pack, COD, and other services designed to optimize your costs and enhance your customer relationship.",
            RightParaThree: "Zajil is a customer-focused company. A human is always available to help. Click here to connectwith a representative.",
            RightParaFour: "Claims are easy at Zajil Express. Click here to contact a support representative. ",
            RightParaFive: "Zajil Express delivers more than 20,000 packages a day to destinations all over the world, not just Saudi Arabia. Our list of destinations is constantly growing. Call us to get the most up-to-date list.",
            RightParaSix: "Zajil is happy to accept most any kind of package and assume responsibility for its safe delivery.We do not deliver to all countries, and we have some limits based on the amount of weight we are allowed to carry in certain types of vehicles. Our app is built to help you determine if your package can be shipped as well helpful information about the types of materials we can accept. Learn more about our Terms and Conditions here.",

        },
        {
            id: "2",
            listnaem: "For Businesses",
            leftHeadingOne: "- How can I contact a person to help me?",
            leftHeadingTwo: "- How can I file a claim?",
            leftHeadingThree: "- Do you ship to all countries?",
            leftHeadingFour: "- How can I order supplies?",
            leftHeadingFive: "- I have a particular need for a custom shipping solution. Who do I talk to? ",
            leftParaOne: "Zajil is a customer-focused company. A human is always available to help. Click here to connect with a representative.",
            leftParaTwo: "Claims are easy at Zajil Express. Click here to contact a support representative.",
            leftParaThree: "Zajil Express delivers more than 20,000 packages a day to destinations all over the world, not just Saudi Arabia. Our list of destinations is constantly growing. Call us to get the most up-to-date list.",
            leftParaFour: "Use our app to have supplies shipped directly to your location or stop by a convenient branch location to get what you need. A list of our branches and their phone number is here.",
            leftParaFive: "Zajil is the preferred business partner for entrepreneurs seeking a simplified logistics network. Talk to a solution architect today about our Fulfillment, Dedicated route, Domestic, and Global services customized to your budget and capacity.",
            RightHeadingOne: "- My package is delayed, and the tracking report is incorrect. What should I do?",
            RightHeadingTwo: "- I want to ship to international customers. How can I do this without a hassle?",
            RightHeadingThree: "- How do I connect my e-commerce sales system to Zajil?",
            RightParaOne: "We regret that your package has not arrived on time as expected. Sometimes natural events around the world affect deliveries in ways we can neither predict nor control. Usually tracking information reported on our site is as up-to-date as our support team, but sometimes they may have more information. Contact a Zajil support representative to learn when your package is expected to get back on track.",
            RightParaTwo: "Zajil Express is here to help. We make it easy to ship anywhere in the world. Many countries have strict requirements for packages entering their borders. Zajil can help you organize the paperwork to streamline this process to make your business more agile in the global marketplace. Talk to a Zajil solution architect about your needs today.",
            RightParaThree: "Zajil has devoted significant resources to make integrating sales order and fulfillment systems to a global shipping and logistics network simple, and affordable. Talk to a Zaji Transportation Management System (TMS) expert today.",

        },
        // {
        //     id: "3",
        //     listnaem: "Business FAQ's",
        //     leftHeadingOne: "- Business FAQ's",
        //     leftHeadingTwo: "- How do I create a COD shipment?",
        //     leftHeadingThree: "- What is your pricing?",
        //     leftParaOne: "You can drop your package at one of Zajil’s branch office or centers. Click here for the most current list.",
        //     leftParaTwo: "Zajil offers convenient options for e-commerce sites and shippers to collect payment at the time of delivery, with essentially no limit. Once delivery is made, Zajil submits the collected funds back to the seller, less the shipping cost and a small fee agreed to in advance. Credit terms apply. To learn how to set up a COD shipment, talk to a Zajil account representative today.",
        //     leftParaThree: "Zajil is committed to the most affordable rate for business and personal shipping services. Use our web site’s shipping calculator or the Zajil app to get a pricing estimate before you ship",
        //     RightHeadingOne: "- What does a Zajil tracking number look like?",
        //     RightHeadingTwo: "- How do I start a return?",
        //     RightHeadingThree: "- How can I contact a person to help me?",
        //     RightParaOne: "The Zajil Express shipping number will be different for business customers and consumers.",
        //     RightParaTwo: "Zajil makes returns easy. Individuals should manage returns using our app or web site. Businesses should contact a Zajil Business Solutions expert about inventory management, pick-n-pack, COD, and other services designed to optimize your costs and enhance your customer relationship.",
        //     RightParaThree: "Zajil is a customer-focused company. A human is always available to help. Click here to connect with a representative.",

        // } 
    ]
    // const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (newValue) => {
        let answer = data[newValue.list][newValue.value]

        setPopupData({ question: newValue.label, answer: answer })
        openModal()
    }
    const [visibleTab, setVisibleTab] = useState(data[0].id)
    return (
        <div className={`relative overflow-hidden  ${styles.hFaqs}`} >
            <span className={`absolute bottom-0 left-0 img_container w-[307px] h-[267px]  ${styles.brandIconFaq}`}>
                <Image src={bottomFrame} alt="top frame" />
            </span>
            <div className={styles.topSection} >
                <div className='flex justify-center  max-1394  mx-auto  pt-8 px-[18px]'>
                    <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                        {/* <input type="text" placeholder='Search Questions' name='SearchQuestions' id='SearchQuestions' className='relative' /> */}
                        <div className='select border-b border-grey'>

                            <Select
                                defaultValue="Search Questions"
                                className='bg-transparent'
                                onChange={handleChange}
                                options={options}
                            />

                        </div>
                        {/* <label htmlFor="SearchQuestions">Search Questions</label> */}
                        <span className='absolute right-1 top-3'>
                            <Image src={search} alt="Search" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='relative '>
                <span className='absolute top-0 right-0'>
                    <Image src={topFrame} alt="top frame" />
                </span>
                <div className='absolute -top-5 w-full'>
                    <div className='max-1394 mx-auto flex justify-center lg:gap-8 gap-4'>
                        {data?.map(item => (
                            <div key={item?.id} onClick={() => setVisibleTab(item.id)} className={`${visibleTab === item.id ? `${styles.active}` : `${styles.tabList}`}  text-grey flex rounded-md text-xl justify-center items-center cursor-pointer`} >
                                {item?.listnaem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {data?.map(item => (
                <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className={`${styles.px19} mt-28 relative`}>

                    <div className='flex max-1394 mx-auto flex-wrap justify-between'>
                        <div className={`${styles.faqscontentw} pb-12`}>
                            <div>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingOne}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaOne}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingTwo}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaTwo}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingThree}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaThree}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingFour}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaFour}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingFive}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaFive}
                                </p>
                            </div> 
                        </div>
                        <div className={styles.faqsLine}></div>
                        <div className={`${styles.faqscontentw} pb-12`}>
                            <div>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingOne}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaOne}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingTwo}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaTwo}
                                </p>
                            </div>
                            <div className='mt-20'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingThree}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaThree}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingFour}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaFour}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingFive}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaFive}
                                </p>
                            </div>
                            <div className='mt-20'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingSix}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaSix}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="#" className={`${styles.hidden} mx-auto`} >
                        <a className={`${styles.hidden} mx-auto w-36 h-10 flex justify-center rounded items-center border-2  border-yellow medium-font  hover:bg-yellow hover:text-grey`}>
                            View More
                        </a>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default FaqsDetails