import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './Profile.css'
import Leftside from '../components/Leftside';
import Header from '../components/Header';
import Friends from '../components/Friends';
import Feed from '../components/Feed';
import { followuserApi, getauserApi, unfollowuserApi } from '../services/allApi';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Editprofile from '../components/Editprofile';
import { base_url } from '../services/baseUrl';


function Profile() {

  const [user,setuser]=useState({})
  const userName= useParams().userName
  // console.log(userName);

  const currentuser= localStorage.getItem("currentuser")
  const currentid= localStorage.getItem("currentid")


  const [followed,setFollowed]=useState(false)


  useEffect(()=>{
    setFollowed(currentuser.followings?.includes(user?.id))
  },[currentuser,user?.id])

  useEffect(()=>{
    const fetchuser =  async()=>{
  
      const res = await getauserApi(userName)
      setuser(res.data)
      console.log(res.data);
    }
  followhandle()
     fetchuser()
  },[userName])

  console.log(user);


  const followhandle = async(id)=>{
  
    try{
      const body={
        userId:currentid
      }
      if(followed){
     
        await unfollowuserApi(id,body)
      }else{
        await followuserApi(id,body)
      
    
      }
        
    }catch(err){
      console.log(err);
    }
    setFollowed(!followed)
    
  }


  

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <Leftside></Leftside>
          </Col>


          <Col lg={6}>
            <div id='c1' className='container shadow-lg' style={{ width: '100%', height: '100vh', overflowX: 'scroll', overflowX: "hidden" }}>

             
              <Row style={{ width: '100%' }}>
                <Col>
                  <Image className='container ms-2 mt-5' style={{ width:'250px',height:"200px",borderRadius:"100%",objectFit:"contain" }} src={ user?.profile?`${base_url}/imageup/${user?.profile}`:"https://i.postimg.cc/jqMYBCHL/Person-Icon-800x800.png"}  />
                  <h6 className='ms-5 mt-2'>user information</h6>
                  <p className='ms-5' style={{fontFamily: "'Lora', serif" }}>Name :<b>{user?.Name}</b></p>
                  <p className='ms-5' style={{fontFamily: "'Lora', serif" }}>city   : <b>{user?.city}</b></p>

                </Col>
                <Col>

                <Editprofile className="" userr={user}></Editprofile>

                  {user?.userName !==currentuser && (

                     <Button onClick={()=>followhandle(user._id)} style={{backgroundColor:"#4da6ff",border:'0px'}} className=' mt-3' size="sm">
                    
                      {followed ? "unfollow": "follow"  }
                      {followed ? <i class="fa-solid fa-user-xmark ms-2"></i>  :  <i class="fa-solid fa-user-plus ms-2"></i>}

                     
                   </Button>
                 )}
                </Col>
              </Row>
              <Row>
                <hr />
                <h4 className='ms-5'>Posts</h4>
                <hr />
             
                <div style={{ width: '100%' }}>

                   
           <Feed userName={userName}></Feed>
                    
                       
                 <hr />

                </div>


              </Row>
            </div>
          </Col>


          <Col lg={3}>

            <Friends userr={user}></Friends>
            

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
