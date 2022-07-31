import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// let backup_img = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
let backup_img = 'https://images.pexels.com/users/avatars/204165854/yana-moroz-504.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1'


const UserDetail = ({user,setProgress}) => {

  const handleClick = ()=>{
    setProgress(100)
  }

  return (
    <div className="user_detail_wrapper">
      <Card style={{ width: '18rem' }} className="detail_card">
      <div className="pro_img">
      <Card.Img variant="top" src={backup_img} className="rounded-circle profile_img_details" />
      </div>
      <div className="title">
      <Card.Title>@{user.profile?.username}</Card.Title>
      </div>
      
      <Card.Body>
      <div className="bio_box">
      <div className="bio">Bio:</div>
        <Card.Text>
         {user?.Bio}
        </Card.Text>
      </div>

      <div className="name_box">
      <div className="name">Full Name:</div>
        <Card.Text>
         {user?.profile?.firstName} {user?.profile?.lastName}
        </Card.Text>
      </div>

      <div className="job_box">
      <div className="job">Job Title:</div>
        <Card.Text>
         {user?.jobTitle}
        </Card.Text>
      </div>

      <div className="email_box">
      <div className="email">Email:</div>
        <Card.Text>
          <a onClick={handleClick} href={`mailto:${user?.profile?.email}`} className="email_box_in">{user?.profile?.email}</a>
        </Card.Text>
      </div>

      </Card.Body>
      
    </Card>
    </div>
  )
}

export default UserDetail