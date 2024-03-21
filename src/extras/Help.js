import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Rightside from '../components/Rightside'
import Leftside from '../components/Leftside'


function Help() {
  return (
    <div>

    <Header></Header>
<Container>
        <div>
            <Row>
                <Col lg={3}>
                    <Leftside></Leftside>
                </Col>
                <Col lg={6}>
                 
                 <h4 className='mt-3'>sociogram</h4>
                 <p>Version 4.22.12</p>

                 <p className='mt-5'><b>would you like to more about the application go through the contact section and our supporter will communicate with you </b></p>

                  <a href="/contactus">contact us</a><br/>
                  <a href="/contactus">Help center</a><br/>
                  <a href="/contactus">Terms and conditions</a>


                  <p className='mt-5'>A movie review is a type of writing that evaluates a film and expresses the writer’s opinion about it. A movie review usually includes a summary of the plot, an analysis of the film’s techniques and themes, and a personal assessment of the film’s quality and impact. Movie reviews can help readers decide whether they want to watch a film or not, or share their own views after watching it12

If you are interested in writing a movie review, I can help you with some tips and examples. Just ask me to write a movie review for you, and I will generate a sample review based on the film of your choice. You can also ask me to write a movie review in a specific style, such as humorous, formal, or poetic.</p>

                  <p className='mt-5'>sociogram@movie.com</p>


                </Col>
    
                <Col lg={3}>
                <Rightside></Rightside>
                </Col>
            </Row>
        </div>
    
</Container>

    </div>
  )
}

export default Help