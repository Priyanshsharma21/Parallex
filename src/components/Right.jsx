import React from 'react'
import { Parallax } from 'react-parallax';

const Right = ({item,bgImg}) => {
  return (
    <div>
        <Parallax  id={item.name} className="image_right"  bgImage={bgImg} style={{backgroundColor:`${item.bgColor}`}}  strength={800}>
                 
        </Parallax>
    </div>
  )
}

export default Right