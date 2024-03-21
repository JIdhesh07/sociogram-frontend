import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ar from "../assets/WhatsApp Image 2024-03-01 at 12.40.32 AM.jpeg"


function Leftside() {

  const navigate=useNavigate()
  
  const handlelogout=(e)=>{
    e.preventDefault()


   localStorage.removeItem("currentuser")
   localStorage.removeItem("currentid")   
   localStorage.removeItem("token")   
   navigate('/')


  }

  return (
    <div>

<div className='mt-5 ms-5'>
                <h6 className='mt-5'> <i class="fa-solid fa-circle-question"></i> <span className='ms-4'> Questions</span></h6>
<Link to={'/contactus'} style={{textDecoration:"none",color:"black"}}>
                  <h6 className='mt-5'> <i class="fa-solid fa-phone"></i> <span className='ms-4'>contact us</span> </h6>
  
</Link>
<Link style={{textDecoration:"none",color:"black"}} to={'/aboutus'}>
                  <h6 className='mt-5'> <i class="fa-solid fa-address-card"></i> <span className='ms-4'>About us</span> </h6>
  
</Link>
<Link to={'/help'} style={{textDecoration:"none",color:"black"}}>
                  <h6 className='mt-5 '> <i class="fa-solid fa-circle-info"></i> <span className='ms-4'> Help</span> </h6>
  
</Link>

                  <h6 onClick={(e)=>handlelogout(e)} style={{cursor:"pointer"}} className='mt-5 ms-1'><i class="fa-solid fa-right-from-bracket"></i> <span className='ms-3'> Logout</span> </h6>


<div >
  <br/>
          <h1 className='ms-4 fs-2' style={{color:'rgb(60, 60, 210)',fontSize: "larger",}}>Sociogram</h1>
          <br/>

            <p>A movie review is a type of writing that evaluates a film and expresses the writer’s opinion about it.
  . Just ask me to write a movie review for you, and I will generate a sample review based on the film of your choice.
    such as humorous, formal, or poetic</p>


    <br/>
    <br/>

<h4>Banners</h4>

    <img style={{width:"350px",marginRight:'100px'}} className="rightbarAd" src={ar} alt="" />
  
</div>  

              </div>


    </div>
  )
}

export default Leftside