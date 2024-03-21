import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { getFriendsApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { base_url } from '../services/baseUrl';

function Friends({userr}) {

 const [friends,setFriends]=useState([])

// console.log(userr);
 const userId= localStorage.getItem("currentid")

 useEffect(()=>{
    const getFriends = async()=>{
        try{
       const friendList=await getFriendsApi(userr._id)
       setFriends(friendList.data)
        }catch(err){
            console.log(err);
        }
    }
    getFriends()
 },[userr?._id])

//  console.log(user);

  return (
    <div>
    
    <p className='mt-5'><b>Friends lists  <i class="fa-solid fa-users"></i></b></p>

    { friends?.map((friend)=>(
<Link style={{textDecoration:"none",color:'black'}} to={"/profile/"+friend.userName}>
        
           <div  className='mt-5'>
           <div className='mt-3' style={{display:"flex"}}>
               <img style={{width:"50px",height:"50px",borderRadius:"50px",objectFit:"contain"}} src={ friend.profile?`${base_url}/imageup/${friend.profile}`: "https://i.postimg.cc/jqMYBCHL/Person-Icon-800x800.png"} alt="" />
         
         <p className='ms-4' style={{display:"flex",fontFamily:"'Cabin', sans-serif"}}>{friend.userName}</p>
    
    <p className='ms-auto'><span style={{fontSize:"x-small"}}>Following</span> <i class="fa-solid fa-user-check"></i></p>
    
           </div>
       </div>
       </Link>
        ))
    }
    





    </div>
  )
}

export default Friends