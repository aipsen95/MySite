import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Button } from 'react-bootstrap';

const Homepage = () => (
    // Short hand <></>
    <React.Fragment>
    <Container>
    <div className="tm-welcome-text">
        <h2 className="text-center">Hi and welcome to my portfolio site</h2>
        <p>Test</p>
    </div>
    
    <hr className="hrElement" />

    <h2 className="text-center homepageTitles">Projects</h2>
    
        <Row >
            <Col md ={2}></Col>
        <Col xs={12}  md={4}>
            <h4>Realism In VR</h4>
            <img className="projectImage" alt="/" src={require('../images/GameboxReal.jpg')} />
            <p>
                For a whole year during my master, I experimented with exploring peoples perception of what look real in virtual reality.
            </p>
        </Col>
        <Col xs={12}  md={4}>
        <h4>Astro</h4>
        <img className="projectImage" alt="/" src={require('../images/logoReal.png')} />
             <p class="">
              A short narrative game with gravity pull mechanics and fun slow motion. You play as a lonely astronaut on a journey to find a black hole to power the earth.
            </p>
        </Col>
        <Col md ={2}></Col>
    </Row>
    <Link to ={`/projects`}> <Button variant="outline-light" type="submit" className="tm-btn-send">Projects</Button></Link>
        


    <hr className="hrElement" />
    <h2 className="text-center homepageTitles">About Me</h2>
    <Row>
     <Col md ={2}></Col>
        <Col xs={12}  lg={4}>
        <img className="image" alt="/" src={require('../images/MyPhoto.jpg')} />
        </Col>
        <Col xs={12}  lg={4}>
            <p>Newly educated medialogist with an extensive education and experience with a wide variety technology in software, web and application design and development. Through years of projects using problem based learning has gained problem solving skills with an analytical mindset. A fast learner with strong time management and adaptability. Strong work ethic in team or individual settings to drive product success and process eﬃciency. Fluent in English with excellent communication and interpersonal skills.
            </p>
            <Button variant="outline-light" type="submit" className="tm-btn-send">Download CV</Button>
            </Col>
            <Col md ={2}></Col>

    </Row>
    <hr className="hrElement" />
    <h2 className="text-center homepageTitles">References</h2>
    <Row >
    <Col md ={2}></Col>
    <Col xs={12}  md={4}>
        <h4 class=" text-center">Peter Fisher</h4>
        <p>I thoroughly enjoyed my time working with Anders, and came to know him as a truly valuable asset to absolutely any team.</p>
        <p>- Peter Fisher CTO & CoFounder of Khora</p>
    </Col>
        <Col xs={12}  md={4}>
        <h4 class=" text-center">Giang Le</h4>
            <p>He is a hard worker and when given a task his goal is to complete it, and he does not stop
            until he has succeeded. If a task were too hard or complicated, he is not wasting any time to
            ask for help, to maximize the time he worked. He is always showing up with a smile on his face, spreading a very positive vibe around him.</p>
            <p>- Giang Le Co-Founder & Head of Product, JABII Group</p>
        </Col>
        <Col md ={2}></Col>
        </Row>
        <hr className="hrElement" />
    </Container>
    
    </React.Fragment>
);

export default Homepage;