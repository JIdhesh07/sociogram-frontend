import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { createapostApi } from '../services/allApi';
import Search from './Search';
import './Header.css'

function Header() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = localStorage.getItem("currentid")
  const userName = localStorage.getItem("currentuser")

  //state for img preview
  const [preview,setPreview]=useState("")
  const [token,setToken]=useState("")

   const [postInputs,setPostInputs]=useState({
    desc:"",rating:"",img:""
   })

   const setInputs=(e)=>{
       const {value,name}=e.target
       setPostInputs({...postInputs,[name]:value})
   }

   console.log(postInputs);

  const handlesubmit=async(e)=>{
    e.preventDefault()
const {desc,img,rating}=postInputs
if(!desc || !img || !rating){
  alert('please fill all data')

}else{
    const headerCofig={
      "Content-Type":"multipart/form-data",
      "access_token":`Bearer ${token} `
    }
    //body
    const reqBody=new FormData()
    reqBody.append("desc",desc)
    reqBody.append("rating",rating)
    reqBody.append("img",img)

    const result=await createapostApi(reqBody,headerCofig)
    console.log(result);

    if(result.status==200){
      alert('Your review posted succesfully')
      //reset form datas
      setPostInputs({...postInputs,desc:"",rating:"",img:""})
      handleClose()
      window.location.reload()

    }else{
      alert(result.response.data)
    }
}
   }

  useEffect(()=>{
     if(postInputs.img){
      setPreview(URL.createObjectURL(postInputs.img))
     }else{
      setPreview("")
     }
  },[postInputs.img])

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])
  // console.log(token);

  return (
    <div style={{backgroundColor:'blue'}}>
      <div>
        <Navbar  style={{backgroundColor:'rgb(60, 60, 210)'}}   data-bs-theme="light" >

          <Container>
            <Navbar.Brand href=""><span ><b style={{color:'white'}}>Sociogram</b></span><span style={{ fontFamily: "Rubik Scribble", color: "#4da6ff", fontSize: "larger" }}><b></b></span></Navbar.Brand>

            <Nav className=" w-75 ms-auto  ">
              <Nav.Link style={{color:'white'}}  className=''  href="/dashboard" ><i style={{color:"white"}} class="fa-solid fa-house"></i> Home</Nav.Link>
    
              <Nav.Link  style={{width:'150px',}}  className='ms-3 rounded-lg' > <Search></Search></Nav.Link>
                   
              <Nav.Link style={{color:'white'}} className='ms-3' onClick={handleShow} >
                  <i style={{ fontSize: "large", textAlign: 'end' }} class="fa-solid fa-square-plus" ></i> post</Nav.Link>
                  <Nav.Link style={{color:'white'}}  className='ms-3'><Link   className='text-light' style={{textDecoration:"none"}} to={`/profile/${userName}`}><i style={{color:'white'}} class="fa-solid fa-user"></i> profile</Link> </Nav.Link>
              </Nav>

          </Container>


        </Navbar>


      </div>
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='ms-auto' closeButton>
          <Modal.Title >
          <Button className='text-center' size="sm" style={{backgroundColor:'#4da6ff',border:"0px",}} type='submit' onClick={(e)=>handlesubmit(e)}>
           share <i class="fa-solid fa-share"></i>
          </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"500px",textAlign:"center"}}>
        <form style={{width:'100%',height:'200px'}}>  
        <label  htmlFor='img1' > 
        <img style={{height:'200px',width:'100%'}} src={preview?preview:"https://i.postimg.cc/JhFy44jQ/2094736.png"} alt="" /> 
           <input  onChange={(e)=>setPostInputs({...postInputs,["img"]:e.target.files[0]})} style={{display:"none"}} type="file" id='img1'/>
            </label> 
       </form>



       <InputGroup className="mb-3 mt-5">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control value={postInputs.rating} name='rating' onChange={(e)=>setInputs(e)}
          placeholder="0 / 5"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

        <Form style={{marginTop:"60px"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='me-5'>What's in your mind to say about screen play...?</Form.Label>
        <Form.Control value={postInputs.desc} name='desc' onChange={(e)=>setInputs(e)} as="textarea" placeholder='Talk about your opinion.....' rows={3} />
      </Form.Group>
    </Form>

           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size='sm' onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Header