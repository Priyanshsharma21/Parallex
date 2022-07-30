import React, { useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import image from '../assets/world-communication-awards-for-best-digital-experience.png'
import {motion} from 'framer-motion'
import {ScrollMagic,Linear} from 'scrollmagic'
import { Parallax,Background  } from 'react-parallax';
import logo from '../assets/svg with paths.svg'
import MotionBar from './utils/MotionBar'


const Left = ({item,bgImg}) => {

    const [itemBox,setItemBox] = useState(1)

    const handleItem = ()=>{
        setItemBox(prevState => prevState + 1)
    }

  return (
 

    
        <motion.div 
        className=" left" 
        id={item.name}
        style={{backgroundColor:`${item.bgColor}`}}>

            <div className="row">
                <div className="col" id={item.name}>
                <Parallax  className="image_left"  bgImage={bgImg} strength={800}>
                 
                    {/* <div className="app__nav_circle">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                    </div> */}
                    <div className="motion">
                         <MotionBar />
                    </div>
                    
                        <div className="item__main_typo">
                        {item.name==='item1'&&<img src={image} className="main__image" alt="" />
                        }
                           
                        </div>


                    <div className="item__secondary_typo">
                        <h3 className="main_title">{item.title}</h3>
                        <p className="main_desc2">{item.desc}</p>
                    </div>

                    <div className="buttons">
                        <div className="vcs">
                            <a href="" className="vcs_btn">{item.btnLeft}<BsArrowRight /> </a>
                        </div>
                        <div className="skip">
                            <a href={`#item${itemBox}`} onClick={handleItem} className="skip_btn">SKIP</a>
                        </div>
                    </div>
                </Parallax>

                </div>
            </div>

            
        </motion.div>
  )
}

export default Left