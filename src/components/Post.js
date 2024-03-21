import React, { useEffect, useState } from 'react'
import { deletepostApi, getauserApii, likedislikeApi } from '../services/allApi'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'
import { base_url } from '../services/baseUrl'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Post.css"



function Post({post}) {
  const [like,setLike]=useState(post.likes.length)
  const [isLiked,setisLiked]=useState(false)
  const [user,setuser]=useState({})

  const userid= localStorage.getItem("currentid")

  console.log(post);



 const likeHandler=async()=>{
  try{
      await likedislikeApi(post._id,userid)
      // console.log(userId);
  }catch(err){

  }
  
  setLike(isLiked ? like - 1 : like + 1 )
  setisLiked(!isLiked )
 }
 console.log(post);

 useEffect(()=>{
  const fetchuser =  async()=>{

    const res = await getauserApii(post.userId)
    setuser(res.data)
    console.log(res.data);
  

  }

   fetchuser()
},[post.userId])

const handledelete=async(e,id,userId)=>{
     e.preventDefault()
     console.log(id);

     const body ={userId,userid}

   const reqheader={
    "content-Type":"application/json",
   }

     const response=await deletepostApi(body,reqheader,id)
     if(response.status==200){
      alert(response.data)
     }else{
      alert("only you can delete your posts")    
     }
     
     window.location.reload()
     
}




  return (
    <div>
 <div className='shadow-sm container' style={{ borderRadius: '10px', width: '90%', height: "450px" }}>
                  <div className='mt-4 ' style={{ display: 'flex' }}>
<Link to={`/profile/${user.userName}`}>
                      <img className=' d-inline-block mt-2' style={{ height: '50px', width: "50px", borderRadius:'50px',objectFit:"contain" }} src={user.profile?`${base_url}/imageup/${user.profile}`:"https://i.postimg.cc/9QrCg3VR/profile.png"} alt="" />{' '} 
  
</Link>                    <h6 className='ms-3 mt-3'>{user.userName}</h6>
                    <p className='ms-4 mt-3' style={{ fontSize: 'small' }}>{format(post.createdAt)}.</p>     
                    <p className='ms-auto mt-3 me-4' ><b>
                    <DropdownButton id='d1' className='me-5'  title="...">
      <Dropdown.Item onClick={(e)=>handledelete(e,post._id,post.userId)} style={{backgroundColor:"white"}}>delete</Dropdown.Item>
<Dropdown.Item href="#/action-1" style={{backgroundColor:"white"}}>info</Dropdown.Item>

    </DropdownButton>
                      
                      </b></p>                    <hr />

                                   <hr />
                  </div>
                  <div className='container mb-3 mt-2' style={{ height: "200px", width: "100%", backgroundColor: 'whitesmoke' }}>

                  <img style={{width:"100%",height:"200px",objectFit:"contain"}} src={post?`${base_url}/imageup/${post.img}`:"image not found "} alt="" />

                  </div>
                  <h6 className='ms-3' style={{fontFamily: "'Lora', serif" }}><>Rating</>  :   <b >{post.rating}</b> </h6>
                  <p className='ms-3' style={{fontFamily: "'Josefin Sans', sans-serif" }}><>{post.desc}</></p>
                    <div style={{display:'flex'}}>
                    <p className='ms-4 mt-4' style={{cursor:"pointer"}} onClick={likeHandler}><i style={{color:"blue",marginLeft:'20px'}} class="fa-solid fa-thumbs-up ms-4"></i>Likes <span>{like}</span> </p>

                    {/* <p className='ms-auto mt-4 me-4' style={{cursor:"pointer"}}><span className='me-2'>{post.comment}</span><i class="fa-solid fa-comments"></i> comments</p> */}


                  </div>       
                </div>                <hr /> 


    </div>
  )
}

export default Post



