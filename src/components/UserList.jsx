import React, { useState } from 'react'
import { Spinner3 } from './Spinner';
import {motion} from 'framer-motion'
let backup_img = 'https://images.pexels.com/users/avatars/204165854/yana-moroz-504.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1'

const UserList = ({user,userImg,findUser,setShowDetailBox,setProgress}) => {
  
  const getUser = ()=>{
    findUser(user.id)
    setShowDetailBox(true)
    setProgress(100)
  }


  return (
    <div>
      <div className="userList_box" >
        <div className="heading">
          <motion.div 
          className="card mb-3 card_list" 
          
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          onClick={getUser}
          >
            <a href="#ud" className="navigator">
            <div className="row g-0">
              <div className="col-md-2 image_list_box">
                <img src={backup_img} className="img-fluid rounded-circle profile_img_list ms-3" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title userName">{user?.profile?.username}</h5>
                  <div className="list_name_join">
                  <span className="card-text text-primary me-1" >{user?.profile?.firstName}</span>
                  <span className="card-text"><small className="text-muted">{user?.profile.lastName}</small></span>
                  </div>
                </div>
              </div>
            </div>
            </a>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default UserList