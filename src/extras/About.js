import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Rightside from '../components/Rightside'
import Leftside from '../components/Leftside'

function About() {
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
                            <p>sociogram family details</p>
                            <p>sociogram. <b>how to use your account</b> mentioned belowed</p>
                            <b>sociograr is a dynamic and user-friendly social media movie reviewing application created by its founder.
                                This innovative platform allows users to share their thoughts and opinions on various movies, fostering a vibrant community of film enthusiasts.
                                Users can rate and review films, engage in discussions with fellow movie buffs, and discover new cinematic gems recommended by others. With its intuitive interface and interactive features,
                                Screen Muster provides a personalized and engaging movie-watching experience, connecting people through their shared love for cinema. Whether you're a casual moviegoer or a dedicated film critic, Screen Muster offers a space to celebrate,
                                critique, and explore the world of movies in a social and collaborative way.</b>

                           <p className='mt-4'>
                                <b >The sociogram team is a passionate and diverse group of individuals dedicated to revolutionizing the way people engage with movies. Comprising skilled developers, 
                                    creative designers, and avid film enthusiasts, the team collaborates to bring the vision of a vibrant and interactive social media movie reviewing application to life.
                                     With a shared commitment to user experience and a love for cinema, each team member plays a crucial role in shaping the platform into a dynamic space for film discussion and discovery.
                                      Through their collective expertise and enthusiasm, the Screen Muster team aims to create an inclusive community where users can connect, share insights, and celebrate their mutual appreciation for the magic of the silver screen.
                                      </b>  
                           </p>                         
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

export default About