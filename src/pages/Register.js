import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate} from 'react-router-dom';
import { registerApi } from '../services/allApi';
import ts from '../assets/Blue_Instagram_Account_Verified_Symbol_Sign_Icon-removebg-preview.png'

function Register() {

  //state to check validation
  const [unameValid,setunamevalid]=useState(false)  
  const [userNameValid,setuserNamevalid]=useState(false)
  const [mailValid,setmailvalid]=useState(false)
   const [passValid,setpassvalid]=useState(false)


  const navigate=useNavigate()

  const [user,setuser]=useState({
    Name:"",userName:"",email:"",password:""
  })

  const setInputs=(e)=>{
    const {name,value}=e.target
     if(name==='Name'){
      if(value.match(/^[a-zA-z ]*$/)){
       setunamevalid(false)
      }
      else{ 
        setunamevalid(true)
      }
     }

     if(name==='userName'){
      if(value.match(/^[a-zA-z_]*$/)){
       setuserNamevalid(false)


      }
      else{ 
        setuserNamevalid(true)
      }
     }



     if(name==='email'){
      if(value.match(/^[a-z0-9@.]*$/)){
       setmailvalid(false)
      }
      else{ 
        setmailvalid(true)
      }
     }

     if(name==='password'){
      if(value.match(/^[a-zA-Z0-9@.]*$/)){
       setpassvalid(false)
      }
      else{ 
        setpassvalid(true)
      }
     }
     setuser({...user,[name]:value})

  }
  
  console.log(user);

  const handleRegister=async(e)=>{
    e.preventDefault()
    const {Name,userName,email,password}=user
    if(!Name || !userName ||!email || !password){
      alert("fill all the data")
    }
    else{

      const result = await registerApi(user)
     if(result.status===200){

      alert("registered successfully")
      setuser({Name:"",userName:"",email:"",password:""})

      navigate('/')
 
     }
     else{
      alert(result.response.data)
     }
 
    }
    
  }

  return (
    <div className="login">
        <h4 style={{marginTop:'-580px',color:'#1775ee',marginRight:'80px',position:'absolute'}}>SOCIOGRAM</h4>
         <img style={{width:'30px',marginTop:'-590px',position:'absolute',marginLeft:'100px'}} src={ts} alt="" />
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SOCIOGRAM</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on sociogram.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <Form className='mt-2 container ms-3' >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='ms-2'> <b>Name</b></Form.Label>
                                <Form.Control value={user.Name} onChange={(e)=>setInputs(e)} type="text" name="Name" placeholder="jhon candid" />
                            </Form.Group>
{  unameValid &&                          <div><p style={{fontSize:'small'}} className='text-danger'> <i class="fa-solid fa-circle-info"></i> name include only charecters</p></div>
}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label className='ms-2'><b>username</b></Form.Label>
                                <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} type="text" name="userName" placeholder="jhonvisions_" />
                            </Form.Group>
{ userNameValid &&                           <div><p style={{fontSize:'small'}} className='text-danger'>  <i class="fa-solid fa-circle-info"></i> username requires('_') with unique name </p></div>
}

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label className='ms-2'><b>Email address</b></Form.Label>
                                <Form.Control value={user.email} onChange={(e)=>setInputs(e)} type="email" name="email" placeholder="username@example.com" />
                            </Form.Group>
{mailValid &&                            <div><p style={{fontSize:'small'}} className='text-danger'> <i class="fa-solid fa-circle-info"></i> email is not valid</p></div>
}

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label className='ms-2'><b>password</b></Form.Label>
                                <Form.Control value={user.password} onChange={(e)=>setInputs(e)} name="password" type="password" placeholder="abc@****70" />
                            </Form.Group>
{passValid &&                            <div><p style={{fontSize:'small'}} className='text-danger'> <i class="fa-solid fa-circle-info"></i> invalid password</p></div>
}
                        
                        </Form>
                   <div style={{width:'100%',textAlign:"center"}} className='container mt-4'>
                    <p style={{fontFamily:'Rajdhani'}}>already have an account? <Link to={"/"}><b>sign-In</b></Link></p>

                   <Button onClick={(e)=>handleRegister(e)}  className='ms-5 w-50 mt-1' style={{backgroundColor:'#4da6ff',border:"0px"}} size="sm">
          Sign-up
        </Button>{' '}
                   </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register