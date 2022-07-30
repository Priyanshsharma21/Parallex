import React, { useEffect, useRef } from 'react'
import { gsap, TweenMax, Power3 } from "gsap";
import './App.css'
import {BsArrowRight} from 'react-icons/bs'
import ScrollMagic from 'scrollmagic'
import Left from './components/Left'
import Right from './components/Right'
import {item1,item2,item3,item4,item5,item6,item7} from './constants/constants'
import {item1R,item2R,item3R,item4R,item5R,item6R,item7R} from './constants/constants'
import MotionBar from './components/utils/MotionBar';
import spaceImg from './assets/spaceImg.jpg'
import thunder from './assets/tt.jpg'
import blu from './assets/pexels-samir-jammal-2102367.jpg'
import blue from './assets/pexels-joshimer-biñas-5707632.jpg'
import green from './assets/pexels-damir-mijailovic-4226171.jpg'
import logo from './assets/svg with paths.svg'
import MotionBar2 from './components/utils/MotionBar2';
import {motion} from 'framer-motion'

import r1img1 from './assets/nexgtv-entertainment-mobile-app-development.png'
import r1img2 from './assets/nexgtv-mobile-app-ui-design.png'

import r2img1 from './assets/veme-app-ui-design.png'
import r2img2 from './assets/veme-blockchain-app-developed.png'

import r3img1 from './assets/nasa-fitness-tracking-mobile-app.png'
import r3img2 from './assets/measure-total-body-weight-through-fitness-app.png'

import r4img1 from './assets/domi-img1.png'
import r4img2 from './assets/dominos-bread.png'
import r4img3 from './assets/dominos-bread1.png'
import r4img4 from './assets/pizza_box.png'
import r4img5 from './assets/ux-strategy-for-mobile-app-devlopment.png'


import r5img1 from './assets/developers-for-social-media-app.png'
import r5img2 from './assets/social-networking-app-case-study.png'
import r5img3 from './assets/karavan_2.png'
import r5img4 from './assets/karavan-social-networking-app-screen.png'
import r5img5 from './assets/karavan-social-networking-app-screen-2.png'


import r6img1 from './assets/erp-app-development-service.png'
import r6img2 from './assets/interior.jpg'

import r7img1 from './assets/melltoo-img1.png'
import r7img2 from './assets/melltoo-img2.png'
import NASA from './assets/nasa-mobile-app.png'


const App = () => {



  return (
    <div className="app container-fluid">
      <div className="row app__row">
      <div className="col col-lg-5">
         {item1.map((item)=>(
            <>
              <Left item={item} bgImg="https://images.unsplash.com/photo-1607707972895-7f994d8c2f3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cnBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
            <div className="gola">
            <div className="app__nav_circle1">
                  <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
            </div>
            </div>
            <div className="item__main_typo2">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
            <div className="motion1">
                  <MotionBar2 />
            </div>
            </>
        ))}
        {item2.map((item)=>(
            <>
              <Left item={item} bgImg='https://th.bing.com/th/id/OIP.EYKmOMF_e8IAPnEWN0BnLAHaL2?pid=ImgDet&rs=1'/>
            <div className="app__nav_circle2">
                  <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
            </div>
            <div className="item__main_typo3">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
            <div className="motion2">
                  <MotionBar2 />
            </div>
            </>
        ))}
        {item3.map((item)=>(
            <>
              <Left item={item} bgImg={spaceImg}/>
                  <div className="app__nav_circle3">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                  </div>
                  <div className="item__main_typo4">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <img src={NASA} alt="" className="navigation_nasa" />
                  <p className="main_desc pt-2">{item.mainDesc}</p>
                  </div>
                  <div className="motion3">
                        <MotionBar2 />
                  </div>
            </>
        ))}
        {item4.map((item)=>(
            <>
              <Left item={item} bgImg={thunder}/>
               <div className="app__nav_circle4">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                    </div>
            <div className="item__main_typo5">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
                    <div className="motion4">
                        <MotionBar2 />
                  </div>
            </>
        ))}
        {item5.map((item)=>(
            <>
              <Left item={item} bgImg={blu} />
               <div className="app__nav_circle5">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                    </div>
                    <div className="item__main_typo6">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
                    <div className="motion5">
                        <MotionBar2 />
                  </div>
            </>
        ))}
        {item6.map((item)=>(
            <>
              <Left item={item} bgImg={blue}/>
               <div className="app__nav_circle6">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                    </div>
                    <div className="item__main_typo7">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
                    <div className="motion6">
                        <MotionBar2 />
                  </div>
            </>
        ))}
        
        {item7.map((item)=>(
            <>
              <Left item={item} bgImg={green}/>
               <div className="app__nav_circle7">
                        <img src={logo} alt="" style={{backgroundColor:`${item.bgColor}`}} className="navigation_circle" />
                    </div>
                    <div className="item__main_typo8">
                  <p className="main2_title">{item.mainTitle2}</p>
                  <h3 className="main_title">{item.mainTitle}</h3>
                  <p className="main_desc">{item.mainDesc}</p>
            </div>
                    <div className="motion7">
                        <MotionBar2 />
                  </div>
            </>
              
        ))}
      
      </div>
            
            
        
        <div className="col col-lg-7 right">
        {item1R.map((item)=>(
              <div>
              <Right item={item} bgImg="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  <motion.div className="right__images item1R"
                  whileInView={{x:[-100,0], opacity:[0,1]}}
                  transition={{duration:2}}
                  >
                        <div className="r1img1">
                              <img className="r1img11" src={r1img1} alt="" />
                        </div>
                        <div className="r1img1">
                              <img className="r1img12" src={r1img2} alt="" />
                        </div>
                  </motion.div>
              </div>
        ))}
        {item2R.map((item)=>(
              <>
              <Right item={item}  bgImg="https://images.unsplash.com/photo-1542866263-77e2cdc46889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              <motion.div className="right__images2"
                  // whileInView={{x:[-100,0], opacity:[0,1]}}
                  // transition={{duration:2}}
                  >
                        <motion.div className="r2img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                              <img className="r2img21" src={r2img1} alt="" />
                        </motion.div>
                        <motion.div className="r2img2"
                        
                        >
                              <img className="r2img22" src={r2img2} alt="" />
                        </motion.div>
                  </motion.div>
              </>
        ))}
        {item3R.map((item)=>(
              <>
              <Right item={item}  bgImg="https://images.unsplash.com/photo-1551794804-840faad68ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBzdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
              <motion.div className="right__images3"
                  // whileInView={{x:[-100,0], opacity:[0,1]}}
                  // transition={{duration:2}}
                  >
                        <motion.div className="r3img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                              <img className="r3img31" src={r3img1} alt="" />
                        </motion.div>
                        <motion.div className="r3img2"
                        
                        >
                              <img className="r3img32" src={r3img2} alt="" />
                        </motion.div>
                  </motion.div>
              </>
        ))}
        {item4R.map((item)=>(
              <>
              <Right item={item}  bgImg="https://i.pinimg.com/originals/7d/2d/75/7d2d754d25f4abbd9de1e97f031f62b9.jpg"/>
              <motion.div className="right__images4"
                  // whileInView={{x:[-100,0], opacity:[0,1]}}
                  // transition={{duration:2}}
                  >
                        <motion.div className="r3img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                        <img className="r4img31" src={r4img1} alt="" />
                        </motion.div>

                        <motion.div className="r3img2"
                        
                        >
                        <img className="r4img32" src={r4img2} alt="" />
                        </motion.div>

                        <motion.div className="r3img2"
                        
                        >
                        <img className="r4img33" src={r4img3} alt="" />
                        </motion.div>

                        <motion.div className="r3img2"
                        >
                        <img className="r4img34" src={r4img4} alt="" />
                        </motion.div>

                        <motion.div className="r3img2"
                        >
                        <img className="r4img3522" src={r4img5} alt="" />
                        </motion.div>
                  </motion.div>
              </>
        ))}
        {item5R.map((item)=>(
            <>
              <Right item={item} bgImg="https://images.unsplash.com/photo-1601682633973-a76aa17a7844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1ZSUyMHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <motion.div className="right__images5"
                  // whileInView={{x:[-100,0], opacity:[0,1]}}
                  // transition={{duration:2}}
                  >
                        <motion.div className="r3img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                        <img className="r5img31" src={r5img1} alt="" />
                        </motion.div>

                        <motion.div className="r5img2"
                        
                        >
                        <img className="r5img32" src={r5img2} alt="" />
                        </motion.div>

                        <motion.div className="r5img2"
                        
                        >
                        <img className="r5img33" src={r5img3} alt="" />
                        </motion.div>

                        <motion.div className="r5img2"
                        >
                        <img className="r5img34" src={r5img4} alt="" />
                        </motion.div>

                        <motion.div className="r5img2"
                        >
                        <img className="r5img35" src={r5img5} alt="" />
                        </motion.div>
                  </motion.div>
            </>
        ))}
        {item6R.map((item)=>(
              <>
              <Right item={item}  bgImg="https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              <motion.div className="right__images6"
                  // whileInView={{x:[-100,0], opacity:[0,1]}}
                  // transition={{duration:2}}
                  >
                        <motion.div className="r6img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                              <img className="r6img21" src={r6img1} alt="" />
                        </motion.div>
                        <motion.div className="r2img2"
                        
                        >
                              <img className="r6img22" src={r6img2} alt="" />
                        </motion.div>
                  </motion.div>
              </>
        ))}
        {item7R.map((item)=>(
            <>
              <Right item={item}  bgImg="https://images.unsplash.com/photo-1598940603846-a1edd0ef2574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              <motion.div className="right__images7"
                  >
                        <motion.div className="r7img1"
                        whileInView={{opacity:[1,1]}}
                        transition={{duration:0.5, delayChildren:0.5}}
                        >
                              <img className="r7img21" src={r7img1} alt="" />
                        </motion.div>
                        <motion.div className="r7img2"
                        
                        >
                              <img className="r7img22" src={r7img2} alt="" />
                        </motion.div>
                  </motion.div>
            </>
        ))}
        </div>
      </div>
    </div>
  )
}

export default App