import React from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
import '../../App.css'
const MotionBar = () => {
  return (
    <div>
        <div className="container">
            <div className="col row_dot">
                <a href="#item1" className="items_1 items"><GoPrimitiveDot /></a>
                <a href="#item2" className="items_2 items"><GoPrimitiveDot /></a>
                <a href="#item3" className="items_3 items"><GoPrimitiveDot /></a>
                <a href="#item4" className="items_4 items"><GoPrimitiveDot /></a>
                <a href="#item5" className="items_5 items"><GoPrimitiveDot /></a>
                <a href="#item6" className="items_6 items"><GoPrimitiveDot /></a>
                <a href="#item7" className="items_7 items"><GoPrimitiveDot /></a>
            </div>
        </div>
    </div>
  )
}

export default MotionBar