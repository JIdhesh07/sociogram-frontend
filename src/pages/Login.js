import React, {useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../services/allApi';
import ts from '../assets/Blue_Instagram_Account_Verified_Symbol_Sign_Icon-removebg-preview.png'


function Login() {

    const [emailvalid, setemailvalid] = useState(false)
    const [passwordvalid, setpasswordvalid] = useState(false)

   
    const navigate = useNavigate()

    const [user, setuser] = useState({
        email: "", password: ""
    })

    const setInputs = (e) => {
        const { name, value } = e.target
        if (name === 'email') {
            if (value.match(/^[a-z0-9@.]*$/)) {
                setemailvalid(false)
            }
            else {
                setemailvalid(true)
            }
        }

        if (name === 'password') {
            if (value.match(/^[a-zA-Z0-9@.]*$/)) {
                setpasswordvalid(false)
            }

            else {
                setpasswordvalid(true)
            }
        }
        setuser({ ...user, [name]: value })

    }

    console.log(user);



    const handlelogin = async (e) => {
        e.preventDefault()

        const { email, password } = user
        if (!email || !password) {
            alert("please fill all data")
        }
        else {

            const result = await loginApi(user)
            if (result.status === 200) {


                //token
                console.log(result.data.token);

                localStorage.setItem("token", result.data.token)
                localStorage.setItem("currentuser", result.data.user.userName);
                localStorage.setItem("currentid", result.data.user._id);

              alert("loging your profile  ")

                setuser({ email: "", password: "" })
                navigate('/dashboard')

                

            }
            else {
                alert(result.response.data)
            }

        }

    }





    return (
        <div className="reg">
        <h4 style={{marginTop:'-580px',color:'#1775ee',marginRight:'80px',position:'absolute'}}>SOCIOGRAM</h4>
        <img style={{width:'30px',marginTop:'-590px',position:'absolute',marginLeft:'100px'}} src={ts} alt="" />
   <div  className="loginWrapper">
     <div  className="loginLeft">
   
       <h3  className="loginLogo">SOCIOGRAM</h3>
       <span className="loginDesc">
         Connect with friends and the world around you on sociogram.
       </span>
     </div>
     <div className="loginRight">
       <div style={{height:'390px'}} className="loginBox">
       <Form className='mt-5 container ms-3' >
                           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                               <Form.Label className='ms-2'><b>Email address</b></Form.Label>
                               <Form.Control onChange={(e) => setInputs(e)} name="email" type="email" placeholder="username@example.com" />
                           </Form.Group>
                           {emailvalid && <div><p style={{ fontSize: 'small' }} className='text-danger'> <i class="fa-solid fa-circle-info"></i> email is not valid</p></div>
                           }


                           <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                               <Form.Label className='ms-2'><b>password</b></Form.Label>
                               <Form.Control onChange={(e) => setInputs(e)} name="password" type="password" placeholder="abc@****70" />
                           </Form.Group>
                           {passwordvalid && <div><p style={{ fontSize: 'small' }} className='text-danger'> <i class="fa-solid fa-circle-info"></i> invalid password</p></div>
                           }


                       </Form>
                       <div style={{ width: '100%', textAlign: "center" }} className='container mt-4'>
                           <p style={{ fontFamily: 'Rajdhani',textDecoration:'none' }} className='ms-5'>New to sociogram?<Link to={"/register"}><b >Create an account</b></Link></p>
                           <Button onClick={(e) => handlelogin(e)} className='ms-5 w-50 mt-1' style={{ backgroundColor: '#4da6ff', border: "0px" }} size="sm">
                               Sign-in
                           </Button>{' '}
                       </div>
       </div>
     </div>
   </div>
  
 </div>
    )
}

export default Login