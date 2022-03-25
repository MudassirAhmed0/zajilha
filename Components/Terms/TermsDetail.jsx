import Image from 'next/image'
import styles from '../../styles2/Terms.module.css'
import YellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import TopBrand from '../../assets/NewImages/svg/brand-terms.svg'
import  brandIcon from '../../assets/NewImages/privacy-policy/image/frame.png'

const TermsDetail = () => {
    return (
        <>
            <div className={`${styles.bgColor} relative rounded-t-xl`}>
                <span className='absolute right-0 top-0'>
                    <Image src={TopBrand} alt="Top Brand" />
                </span>
                <div className='lg:pb-7 lg:pt-10 lg:px-20 px-[18px] pt-[54px] pb-[25px]'>
                <div className='max-1394 mx-auto'>
                    <div className='lg:w-10/12 w-full pr-2.5'>
                        <span>
                            <Image src={YellowBox} alt="Yellow Box" />
                        </span>
                        <h2 className='text-3xl text-grey medium'>Heading here</h2>
                        <p className='text-lg text-grey light-font mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dolor tellus. Maecenas vitae tortor ac tellus semper efficitur vitae non erat. Sed dolor ligula, porttitor et lectus a, suscipit sollicitudin quam. Integer rhoncus feugiat sapien sit amet molestie. Nulla lectus dolor, commodo ut facilisis in, luctus ut purus. Praesent placerat velit et tincidunt condimentum. Sed eget massa nec augue auctor interdum non eu ante. In varius nisl sed tortor fermentum, non finibus enim facilisis. </p>
                        <p className='text-lg text-grey light-font mt-4'> Sed dignissim, magna non sollicitudin imperdiet, mi magna luctus metus, et tempor sem dui condimentum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eros leo, feugiat ut auctor id, semper varius magna. Nullam vel nibh diam. In aliquet euismod lobortis. Suspendisse quis nisl non est porttitor rutrum ut id leo. Cras pellentesque erat quis dignissim congue. Donec condimentum imperdiet ligula ut scelerisque. Suspendisse ultricies rhoncus ornare. Nullam viverra, ipsum ut pretium gravida, justo nulla consequat magna, nec vestibulum eros sem nec tellus.</p>
                        <p className='text-lg text-grey light-font mt-4'>Donec interdum, neque at vulputate convallis, lectus libero placerat diam, vulputate elementum nisl magna a lorem. Aliquam laoreet eros ut enim maximus molestie. Morbi tempus neque eget lobortis suscipit. Proin tempor orci magna, et accumsan enim posuere id. Pellentesque sagittis at augue et hendrerit. Fusce eu enim vel sem finibus congue. Nam ultricies diam mattis est porttitor rhoncus. </p>
                        <p className='text-lg text-grey light-font mt-4'>Etiam lobortis tellus sit amet est volutpat, vitae tempus leo mattis. Aenean nec tristique risus. Praesent porttitor mauris elit, quis fermentum lectus eleifend vitae. Nam pulvinar eu est vel venenatis. Proin eros nibh, fermentum id dignissim in, pretium venenatis nunc. Etiam augue leo, placerat vel imperdiet a, suscipit id velit. Suspendisse imperdiet venenatis vulputate. Integer consectetur quis elit et faucibus. Donec ex nisl, faucibus non posuere eget, fermentum at velit. Aenean nec rhoncus orci. Duis pretium sem lacus. Vestibulum leo diam, suscipit et commodo eu, finibus at odio. Proin finibus ante non metus ullamcorper faucibus. Vestibulum viverra lobortis ultricies. Quisque aliquet arcu dictum massa vulputate, eu venenatis elit condimentum. Ut vitae velit nunc.</p>
                        <p className='text-lg text-grey light-font mt-4'> Fusce ut eros vel sem rutrum lobortis. Quisque vitae ornare purus. Maecenas quis lacus dolor. Aliquam volutpat malesuada pharetra. Fusce a nibh ut ante viverra hendrerit vitae at velit. In ac arcu quis augue tempor pretium quis sit amet est. Morbi et tempus lacus, dignissim pharetra augue. Nunc imperdiet tempor aliquam. Proin metus urna, scelerisque in risus in, condimentum porttitor felis.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
            <span className='absolute bottom-[-76px] left-[-55px] w-[307px] h-[267px] img_container'>
                    <Image src={brandIcon} alt='brandicon'/>
                </span>
                <div className={`lg:w-2/12  h-2.5 ml-auto ${styles.yellowbg}`}></div>
                <div className='lg:pt-5 lg:px-20 lg:pb-12 px-[18px] pt-[54px] pb-[60px]'>
                    <div className='max-1394 mx-auto'>
                        <div className='lg:w-10/12 w-full'>
                            <h2 className='text-3xl text-grey medium'>Heading here</h2>
                            <ul className='mt-3'>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dolor tellus.</span>
                                </li>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Maecenas vitae tortor ac tellus semper efficitur vitae non erat. Sed dolor ligula, porttitor et lectus a, suscipit sollicitudin quam. Integer rhoncus feugiat sapien sit amet molestie. Nulla lectus dolor, commodo ut facilisis in, luctus ut purus.</span>
                                </li>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Praesent placerat velit et tincidunt condimentum. Sed eget massa nec augue auctor interdum non eu ante. In varius nisl sed tortor fermentum, non finibus enim facilisis.</span>
                                </li>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Sed dignissim, magna non sollicitudin imperdiet, mi magna luctus metus, et tempor sem dui condimentum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. </span>
                                </li>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Nulla eros leo, feugiat ut auctor id, semper varius magna. Nullam vel nibh diam. In aliquet euismod lobortis. </span>
                                </li>
                                <li className='flex gap-x-6 items-start mt-3'>
                                    <span className={`${styles.ulDot} mt-2`}></span>
                                    <span className='text-lg text-grey light-font'>Suspendisse quis nisl non est porttitor rutrum ut id leo. Cras pellentesque erat quis dignissim congue. Donec condimentum imperdiet ligula ut scelerisque.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsDetail