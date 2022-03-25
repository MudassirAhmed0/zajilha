import Image from 'next/image'
import boxYellow from '../../../assets/NewImages/svg/box-yellow.svg' 
import mapImage from '../../../assets/NewImages/map/map.svg'
import unitedState from '../../../assets/NewImages/map/united-states.svg'
import blueUnitedState from '../../../assets/NewImages/map/blue-united-states.svg'
import saudia from '../../../assets/NewImages/map/saudia-arabia.svg'
import blueSaudia from '../../../assets/NewImages/map/blueSaudiaArabia.svg'
import uae from '../../../assets/NewImages/map/uae.svg'
import blueUae from '../../../assets/NewImages/map/blueUae.svg'
import china from '../../../assets/NewImages/map/china.svg'
import blueChina from '../../../assets/NewImages/map/blueChina.svg'
import qatar from '../../../assets/NewImages/map/qatar.svg'
import blueQatar from '../../../assets/NewImages/map/blueQatar.svg'
import brandIcon from '../../../assets/NewImages/index/image/brand-icon-map.svg'
import styles from '../../../arStyles/Home.module.css' 
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Map = () => {
    const [saudiaImage,setSaudiaImage] = useState(saudia)
    const [chinaImage,setChinaImage] = useState(china)
    const [uaeImage,setUaeImage] = useState(uae)
    const [qatarImage,setQatarImage] = useState(qatar)
    const [unitedStateImage,setUnitedStateImage] = useState(unitedState) 



    const handleHover=(img,state)=>{
       
        switch (state) {
            case 'us':
                setUnitedStateImage(img)
                break;
            case 'qatar':
                setQatarImage(img)
                break;
            case 'china':
                setChinaImage(img)
                break;
            case 'saudia':
                setSaudiaImage(img)
                break;
            case 'uae':
                setUaeImage(img)
                break;
        
        }
    }
 
    const content = useRef(null)
    useEffect(()=>{ 
        const tl = gsap.timeline({scrollTrigger:{
            trigger:content.current, 
          }
        }) 
        const cube = content.current.querySelector('.box')
        const heading = content.current.querySelector('h4')
        const para = content.current.querySelector('p')
        tl.from(cube,{opacity:0,y:'50',duration:.5})
        .from(heading,{opacity:0,y:'50',duration:.5})
        .from(para,{opacity:0,y:'50',duration:.5})
    },[])

  return (
    <section ref={content} className="flex relative items-center pt-20 pb-20  flex-col">
        <span className={`hidden lg:block ${styles.brandIconMap}`}>
            <Image src={brandIcon} alt='brandIcon'/>
        </span>
        <span className='box'>
        <Image src={boxYellow} alt='Yellow Cube' />
        </span>
        <h4 className="text-blue medium-font  md:text-3xl  text-xl relative z-10 uppercase">GLOBAL CARRIER NETWORK</h4>
        <p className="medium-font text-black text-xl md:text-base relative z-10">For Global Business Opportunity</p>
        <div className={`${styles.map} xl:block hidden`}>
            <Image src={mapImage} alt='map'/>
            <Link href="#" >
                <a onMouseEnter={()=>handleHover(blueUnitedState,'us')} id='us' onMouseLeave={()=>handleHover(unitedState,'us')} className={styles.us} >
                    <Image src={unitedStateImage} alt="United States Image"/>
                </a>
            </Link>
            <Link href="#">
                <a  onMouseEnter={()=>handleHover(blueSaudia,'saudia')} id='saudia'  onMouseLeave={()=>handleHover(saudia,'saudia')} className={styles.saudia}>
                    <Image src={saudiaImage} alt="Saudia Image"/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueUae,'uae')}  id='uae' onMouseLeave={()=>handleHover(uae,'uae')} className={styles.uae}>
                    <Image src={uaeImage} alt="UAE Image"/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueChina,'china')} id='china'  onMouseLeave={()=>handleHover(china,'china')} className={styles.china}>
                    <Image src={chinaImage} alt="China Image"/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueQatar,'qatar')} id='qatar'  onMouseLeave={()=>handleHover(qatar,'qatar')} className={styles.qatar}>
                    <Image src={qatarImage} alt="Qatar Image"/>
                </a>
            </Link>
        </div>
        <div className={`${styles.map } xl:hidden `}>
            <Image  src={mapImage} alt='map'/>
           <Link href="#" >
                <a onMouseEnter={()=>handleHover(blueUnitedState,'us')} id='us' onMouseLeave={()=>handleHover(unitedState,'us')} className={styles.us} >
                    <Image src={unitedStateImage} alt="United States Image"/>
                </a>
            </Link>
            <Link href="#">
                <a  onMouseEnter={()=>handleHover(blueSaudia,'saudia')} id='saudia'  onMouseLeave={()=>handleHover(saudia,'saudia')} className={styles.saudia}>
                    <Image src={saudiaImage} alt="Saudia Image"/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueUae,'uae')}  id='uae' onMouseLeave={()=>handleHover(uae,'uae')} className={styles.uae}>
                    <Image src={uaeImage} alt="UAE Image"/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueChina,'china')} id='china'  onMouseLeave={()=>handleHover(china,'china')} className={styles.china}>
                    <Image src={chinaImage} alt="China Image"/>
                </a>
            </Link>
 
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueQatar,'qatar')} id='qatar'  onMouseLeave={()=>handleHover(qatar,'qatar')} className={styles.qatar}>
                    <Image src={qatarImage} alt="Qatar Image"/>
                </a>
            </Link>
        </div>
    </section>
  )
}

export default Map