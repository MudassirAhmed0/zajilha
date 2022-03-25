import Image from 'next/image'
import styles from '../../../arStyles2/DetailPage.module.css'
import arrow from '../../../assets/NewImages/svg/arrow-black.svg'
import BIgChacha from '../../../assets/NewImages/news-detail-page/image/featured-news.jpg'
import shareicon from '../../../assets/NewImages/svg/shareicon.svg'

const DetailPage = () => {
    const shareIt =()=>{
        
        const modal = document.getElementById('shareArticle')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
    return (
        <div className='max-1394 mx-auto lg:pt-16 lg:px-20 lg:pb-20 pl-[18px] pr-[18px] pt-5 pb-12'>
            <div className='flex items-center cursor-pointer'>
                <p className='text-base text-grey pt-1.5 pl-2'>Go Back</p>
                <span className={styles.rotate} >
                    <Image src={arrow} alt="Black Arrow" />
                </span>
            </div>
            <div className='mt-3.5'>
                <span className={styles.chacha}>
                    <Image src={BIgChacha} alt="News Detail" />
                </span>
            </div>
            <div className='mt-3.5'>
                <p className='text-xs tex-grey'>8 June 2020</p>
                <h3 className='md:text-3xl text-22l text-grey medium-font mt-3.5'>Report of the classification index of postal and logistics companies issued by CITC</h3>
                <div className='flex lg:flex-nowrap flex-wrap justify-between gap-x-20'>
                    <div>
                        <p className='text-base light-font text-grey mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales pretium dictum. Vivamus varius consectetur mattis. Fusce quis sapien a ante maximus euismod. Nullam porta lorem nec nunc fringilla, et tempor nulla pellentesque. Vestibulum et volutpat felis, at eleifend risus. Ut sodales urna eu tellus accumsan lobortis. Fusce faucibus ultricies rutrum. Nullam tincidunt, orci et commodo maximus, erat sem dignissim massa, et cursus erat nibh sit amet lectus. Maecenas lacinia dapibus rhoncus. Vestibulum luctus rutrum feugiat. Morbi sit amet enim arcu. Mauris facilisis rhoncus justo sed venenatis. Nullam arcu ante, tristique ut finibus non, ultricies quis tellus. Nullam rutrum tincidunt orci, et rhoncus sapien iaculis in. Suspendisse suscipit consectetur nunc vitae dignissim.</p>
                        <p className='text-base light-font text-grey mt-5'> Pellentesque tempus orci urna, in tristique arcu tempor non. Donec sit amet pretium nisl. Mauris at feugiat elit, ac ornare ipsum. Pellentesque semper metus vulputate, semper tortor quis, sagittis sem. Nam et ex nec dui malesuada malesuada. Fusce euismod semper porttitor. Nulla et eleifend ante, et iaculis magna. Duis tincidunt vehicula sapien nec aliquet. Fusce et vestibulum mauris. Quisque in tortor vestibulum, dapibus leo vitae, rutrum dolor. Aliquam tempus neque velit, nec fermentum ipsum imperdiet et. Donec volutpat, nibh eu fermentum vestibulum, quam diam ullamcorper mauris, id aliquet nunc nisl ut lectus.</p>
                    </div>
                    <div>
                        <p className='text-base light-font text-grey mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales pretium dictum. Vivamus varius consectetur mattis. Fusce quis sapien a ante maximus euismod. Nullam porta lorem nec nunc fringilla, et tempor nulla pellentesque. Vestibulum et volutpat felis, at eleifend risus. Ut sodales urna eu tellus accumsan lobortis. Fusce faucibus ultricies rutrum. Nullam tincidunt, orci et commodo maximus, erat sem dignissim massa, et cursus erat nibh sit amet lectus. Maecenas lacinia dapibus rhoncus. Vestibulum luctus rutrum feugiat. Morbi sit amet enim arcu. Mauris facilisis rhoncus justo sed venenatis. Nullam arcu ante, tristique ut finibus non, ultricies quis tellus. Nullam rutrum tincidunt orci, et rhoncus sapien iaculis in. Suspendisse suscipit consectetur nunc vitae dignissim.</p>
                        <p className='text-base light-font text-grey mt-5'> Pellentesque tempus orci urna, in tristique arcu tempor non. Donec sit amet pretium nisl. Mauris at feugiat elit, ac ornare ipsum. Pellentesque semper metus vulputate, semper tortor quis, sagittis sem. Nam et ex nec dui malesuada malesuada. Fusce euismod semper porttitor. Nulla et eleifend ante, et iaculis magna. Duis tincidunt vehicula sapien nec aliquet. Fusce et vestibulum mauris. Quisque in tortor vestibulum, dapibus leo vitae, rutrum dolor. Aliquam tempus neque velit, nec fermentum ipsum imperdiet et. Donec volutpat, nibh eu fermentum vestibulum, quam diam ullamcorper mauris, id aliquet nunc nisl ut lectus.</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-base light-font text-grey mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales pretium dictum. Vivamus varius consectetur mattis. Fusce quis sapien a ante maximus euismod. Nullam porta lorem nec nunc fringilla, et tempor nulla pellentesque. Vestibulum et volutpat felis, at eleifend risus. Ut sodales urna eu tellus accumsan lobortis. Fusce faucibus ultricies rutrum. Nullam tincidunt, orci et commodo maximus, erat sem dignissim massa, et cursus erat nibh sit amet lectus. </p>
                    <p className='text-base light-font text-grey mt-5'> Maecenas lacinia dapibus rhoncus. Vestibulum luctus rutrum feugiat. Morbi sit amet enim arcu. Mauris facilisis rhoncus justo sed venenatis. Nullam arcu ante, tristique ut finibus non, ultricies quis tellus. Nullam rutrum tincidunt orci, et rhoncus sapien iaculis in. Suspendisse suscipit consectetur nunc vitae dignissim. Pellentesque tempus orci urna, in tristique arcu tempor non.</p>
                </div>
                <div onClick={shareIt} className='flex items-center cursor-pointer mt-10'>
                <p className='text-base text-grey pt-1.5 pl-2'>Share article</p>
                    <span className={styles.shares}>
                        <Image src={shareicon} alt="shareicon" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DetailPage