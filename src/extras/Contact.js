import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Rightside from '../components/Rightside'
import Leftside from '../components/Leftside'

function Contact() {
  return (
    <div>
                    <Header></Header>
<Container>
        <div>
            <Row>
                <Col lg={3}>
                    <Leftside></Leftside>
                </Col>
                <Col lg={6} style={{ overflow: 'scroll', height: "100vh", overflowX: "hidden"}}>
                 
                 <h4 className='mt-3'>Contact us </h4>
                  
<div >
                     
  
    Contact Us@
    
    We value your feedback and are here to assist you. If you have any questions, suggestions, or concerns, feel free to reach out to us.
    
    <h5 className='mt-5'>Customer Support:</h5>
    
    <p> Email: support@sociogram.com</p>
    <p>Phone: [+51 346743727784]</p>
    <p>Business Inquiries: <a href="">support</a></p>
    
    <p>Email: business@sociogram.com</p>
    <p>Phone: [+57487328929]</p>
    <p>Social Media:sociogram</p>
    <p>Connect with us on social media for the latest updates and news.</p>
    
    <p>Facebook: [sociogram@]</p>
    <p>Twitter: [sociogramtweets]</p>
    <p>Instagram: [sociogram]</p>
    <p>Address:</p>
    <p>[sociogram]</p>
    <p>[london,city of centeral]</p>
    <p>[yotlk, vilkk, 789589]</p>
    
    <p>
        We appreciate your interest in Screen Muster and look forward to hearing from you!
        
    </p>
    <p>
        Please replace the placeholders like [Your Contact Number], [Your Business Contact Number], [Your Facebook Page], etc., with the actual and relevant information for your application.
        
    </p>
  
</div>                </Col>
    
                <Col lg={3}>
                <Rightside></Rightside>
                </Col>
            </Row>
        </div>
    
</Container>

    </div>
  )
}

export default Contact