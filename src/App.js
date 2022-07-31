import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { Container,Row, Col,Image } from 'react-bootstrap'
import { UserList,UserDetail } from './components/index'
import { Spinner3,Spinner2 } from './components/Spinner';
import {motion} from 'framer-motion'
import LoadingBar from 'react-top-loading-bar'
import { Scrollbars } from 'react-custom-scrollbars';

import './App.css'


const App = () => {
      const [userData, setUserData] = useState([])
      const [showUser, setShowUser] = useState([])
      const [progress, setProgress] = useState(0)
      const [showDetailBox, setShowDetailBox] = useState(false)


      useEffect(()=>{
            setProgress(50)
            axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then((res)=>{
                  setUserData(res.data)
            })
            setProgress(100)
      },[])

      const findUser = (userId)=>{
           const selectedUser = userData.filter(user=>user.id === userId)
           setShowUser(selectedUser[0])
      }     

      

  return (
      
    <div className="app">
    <LoadingBar
        color='#ff0066'
        background='linear-gradient(to right, rgb(0, 225, 255),white,#ff61ed)'
        progress={progress}
        height={5}
        loaderSpeed={1000}
        onLoaderFinished={() => setProgress(0)}
        className="top_loader"
      />
    <Container>
      <Row>
            {userData ? (
                  <>
                  <Col className="app__userList">
                 {userData ? (<>
                  <div className=" mt-3 mb-4 ">
                        <h3>{userData.length ? 'UserList' : ""}</h3>
                  </div>

                  <div className="userRow ">
                        {userData.map((user)=>(
                              <UserList key={user.id} setProgress={setProgress} user={user} setShowDetailBox={setShowDetailBox} userImg={user?.avatar} findUser={findUser} />
                        ))}
                  </div>
                 </>) : (
                  <div className="spinner">
                              <Spinner3 message="No User Info"/>
                  </div>
                 )}
            </Col>

            <Col className="app__userDetails" id="ud">
                  {showDetailBox ?(
                        <motion.div
                  whileInView={{y:[300,0], opacity:[0,1]}}
                  transition={{duration:2}}
                  >
                  <div className=" mt-3 mb-4 heading_details">
                        <h3>UserDetails</h3>
                  </div>
                        <UserDetail setProgress={setProgress} user={showUser}/>
                  </motion.div>
                  ):(
                        <div className="spinner">
                              <Spinner3 message="No User Info"/>
                        </div>
                  )}
            </Col>
                  </>
            ):(
                  <Spinner3 message="Loading..." />
            )}
      </Row>
    </Container>
    </div>

  )
}

export default App