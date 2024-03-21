import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editprofileApi, getprofileApi } from '../services/allApi';

function Editprofile({userr}) {

    const [show, setShow] = useState(false);
    const [preview,setPreview]=useState("")
  
    const [display,setdisplay]=useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const [editprofile,setEditprofile]=useState({
        userName:localStorage.getItem('currentuser'),profile:"",Name:"",bio:"",city:""
    })

    //api call
   const  getprofile=async()=>{
     
    const result=await  getprofileApi(userId)
    // console.log(result.data);
    setEditprofile({ ...Editprofile,
      userName:result.data.userName,
      Name:result.data.Name,
      bio:result.data.bio,
      city:result.data.city,
      updatedImg:result.data.profile
    })
     
   }

   useEffect(()=>{
    if(userr?.userName==localStorage.getItem("currentuser")){
      setdisplay(true)
    }else{
      setdisplay(false)
    }
   })

   useEffect(()=>{
    getprofile()
   },[])

   console.log(editprofile);


    const setData=(e)=>{
        const {value,name}=e.target 
        setEditprofile({...editprofile,[name]:value})
    }

    useEffect(()=>{
        if(editprofile.profile){
            setPreview(URL.createObjectURL(editprofile.profile))
        }
    },[editprofile.profile])

    const userId=localStorage.getItem("currentid")

    const handleedit=async (e)=>{
        e.preventDefault()
        const {userName,Name,bio,city,profile}= editprofile 

        if(!userName || !Name || !bio || !city|| !profile){
            alert("please fill all data")
        }else{
            if(localStorage.getItem("currentid")){
                const id = localStorage.getItem('currentid')
                console.log(id);
              //header
              const reqheader ={
                "Content-Type":"multipart/form-data",
               }

              //body
              const reqBody = new FormData()
              reqBody.append("userName",userName)
            reqBody.append("Name",Name)
            reqBody.append("bio",bio)
            reqBody.append("city",city)
            reqBody.append("profile",profile)

            const response = await editprofileApi(reqBody,reqheader,userId)

            if(response.status ==200){
                alert("profile edited")
                handleClose()
                getprofile()
                localStorage.setItem("currentuser",editprofile?.userName)
                window.location.reload()
            }else{
                console.log("profile edit fail");
            }



            }
        }
    }


  return (
    <div>
                  <h4  style={{ marginTop: '120px', display: 'flex' ,cursor:"pointer"}} className=' ms-2'>{userr?.userName}
                  { display &&
                  <p onClick={handleShow} className='ms-auto me-3'><i class="fa-solid fa-user-pen"></i></p> 
                  }</h4>
                  <p style={{fontFamily:"sans-serif"}} className='ms-1'><>{userr?.bio}</></p>




       <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Row>
        <Col>
        <form style={{width:'100%',height:'200px'}}>  
        <label  htmlFor='img1' > 
        <img style={{height:'200px',width:'100%'}} src={preview?preview:"https://i.postimg.cc/JhFy44jQ/2094736.png"} alt="" /> 
           <input  onChange={(e)=>setEditprofile({...editprofile,["profile"]:e.target.files[0]})} name='profile' style={{display:"none"}} type="file" id='img1'/>
            </label> 
       </form>

        </Col>
        <Col>
        <form>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
        <Form.Label><b>username</b></Form.Label>
        <Form.Control value={editprofile?.userName} onChange={(e)=>setData(e)} name='userName' type="text" placeholder="Jhon_candid_" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Bio</b></Form.Label>
        <Form.Control value={editprofile?.bio} onChange={(e)=>setData(e)} name='bio' type="text" placeholder="Discribe about you" />
      </Form.Group>

        </form>
        </Col>
    </Row>
    <Row>
     <Col>
     <Form.Group className="mb-3" controlId="">
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control value={editprofile?.Name} onChange={(e)=>setData(e)} name='Name' type="text" placeholder="Jhon" />
      </Form.Group>

     </Col>

     <Col>
     <Form.Group className="mb-3" controlId="">
        <Form.Label><b>city</b></Form.Label>
        <Form.Control value={editprofile?.city} onChange={(e)=>setData(e)} name='city' type="text" placeholder="mumbai" />
      </Form.Group>

     </Col>
    </Row>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleedit(e)}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
       </>

    </div>
  )
}

export default Editprofile