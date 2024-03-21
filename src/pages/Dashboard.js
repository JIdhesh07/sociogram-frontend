
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import "./Dashboard.css"
import Leftside from '../components/Leftside';
import Rightside from '../components/Rightside';
import Feed from '../components/Feed';



function Dashboard() {



  return (
    <div>

      <Header ></Header>

      <div style={{ width: "100%", backgroundColor: "#f2f2f2" }}>
        <Container>

          <Row>
            <Col lg={3} style={{ backgroundColor: 'whitesmoke' }}>

              <Leftside></Leftside>

            </Col>
            <Col lg={6} >
              <div className='scroll' style={{ overflow: 'scroll', height: "300vh", overflowX: "hidden", backgroundColor: 'whitesmoke' }}>




            <Feed></Feed>



              </div>
            </Col>

            <Col lg={3}>

              <Rightside></Rightside>

            </Col>
          </Row>

        </Container>
      </div>

    </div>
  )
}

export default Dashboard