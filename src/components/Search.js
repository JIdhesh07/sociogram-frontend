import React, { useEffect } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { getallusersApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { base_url } from '../services/baseUrl';
import './searcj.css'

function Search() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[getallusers,setgetallusers]=useState([])
    const[search,setsearch]=useState("")

    const userss=async()=>{
        const result = await getallusersApi(search)
        setgetallusers(result.data)
    }

    useEffect(()=>{
    userss()
    },[search])

    console.log(getallusers);        


  return (
    <div>

<p className='rounded-lg'  style={{backgroundColor:"white",border:"0px",color:"grey",}} onClick={handleShow}>
<i class="fa-solid fa-magnifying-glass"></i> explore
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Floating className="">
        <Form.Control onChange={(e)=>setsearch(e.target.value)}
          id="floatingInputCustom"
          type="text"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom"> <i class="fa-solid fa-magnifying-glass"></i>  Search a user</label>
      </Form.Floating>

   <div>
{getallusers.length>0? getallusers.map(i=>(
      <Link to={`/profile/${i.userName}`} style={{textDecoration:"none",color:"black"}}>
        <div  className='mt-5'>
             <div className='mt-3' style={{display:"flex"}}>
                 <img style={{width:"50px",height:"50px",borderRadius:"50px",objectFit:"contain"}} src={i.profile?`${base_url}/imageup/${i?.profile}`:"https://i.postimg.cc/jqMYBCHL/Person-Icon-800x800.png"} alt="" />
           
           <p className='ms-4' style={{display:"flex",fontFamily:"'Cabin', sans-serif"}}>{i?.userName}</p>    
             </div>
         </div>
      </Link>
      ) ) : <p>no users are available</p>
}
   </div>


        </Offcanvas.Body>
      </Offcanvas>
    
    </div>
  )
}

export default Search