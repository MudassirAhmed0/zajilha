import Image from 'next/image'
import Layout from "../styles2/Layout.module.css"
import download from '../assets/NewImages/svg/DOWNLOAD.svg'
import { useEffect, useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DownloadPdf = () => {
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
            breakpoint: { max: 1024, min: 880 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 880, min: 0 },
            items: 1.3
        }
    };

    const container = useRef()
    const layout = useRef()
    useEffect(() => {
        setTimeout(() => {
            container.current.classList.remove('opacity-0')
            layout.current.classList.remove('hidden')
        }, 500)
    }, [])
    return (
        <>
            <section ref={container} className={`${Layout.w86} xl:block lg:hidden md:hidden hidden transition-all opacity-1 w-11/12 mx-auto mt-10 relative`}>
                <h4 className='text-lg text-white medium-font'>Related Downloads</h4>
                <div className='flex justify-between mt-3'>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={container} className={`${Layout.w86} xl:hidden lg:block md:block block transition-all opacity-1 w-11/12 mx-auto mt-10 relative`}>
                <h4 className='text-lg text-white medium-font'>Related Downloads</h4>

                <div className={`${Layout.download} flex justify-between mt-3`}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} renderArrowsWhenDisabled={false} responsive={responsive} >

                        <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                            <div>
                                <span>
                                    <Image src={download} alt='Download' />
                                </span>
                                <p className='text-xs text-yellow light-font'>PDF</p>
                            </div>
                            <div>
                                <h5 className='text-lg text-white '>Document Title</h5>
                                <p className='text-sm text-white'>23.8mb</p>
                            </div>
                        </div>
                        <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                            <div>
                                <span>
                                    <Image src={download} alt='Download' />
                                </span>
                                <p className='text-xs text-yellow light-font'>PDF</p>
                            </div>
                            <div>
                                <h5 className='text-lg text-white '>Document Title</h5>
                                <p className='text-sm text-white'>23.8mb</p>
                            </div>
                        </div>
                        <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                            <div>
                                <span>
                                    <Image src={download} alt='Download' />
                                </span>
                                <p className='text-xs text-yellow light-font'>PDF</p>
                            </div>
                            <div>
                                <h5 className='text-lg text-white '>Document Title</h5>
                                <p className='text-sm text-white'>23.8mb</p>
                            </div>
                        </div>
                        <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                            <div>
                                <span>
                                    <Image src={download} alt='Download' />
                                </span>
                                <p className='text-xs text-yellow light-font'>PDF</p>
                            </div>
                            <div>
                                <h5 className='text-lg text-white '>Document Title</h5>
                                <p className='text-sm text-white'>23.8mb</p>
                            </div>
                        </div>
                        <div className={`flex items-center cursor-pointer justify-center gap-x-3 transition-all duration-300  hover:bg-[rgba(255,255,255,0.20)] ${Layout.DownloadPdf}`}>
                            <div>
                                <span>
                                    <Image src={download} alt='Download' />
                                </span>
                                <p className='text-xs text-yellow light-font'>PDF</p>
                            </div>
                            <div>
                                <h5 className='text-lg text-white '>Document Title</h5>
                                <p className='text-sm text-white'>23.8mb</p>
                            </div>
                        </div>
                    </Carousel>

                </div>
            </section>
            <div ref={layout} className={`hidden mx-auto ${Layout.borderPdf}`}>

            </div>
        </>
    )
}

export default DownloadPdf