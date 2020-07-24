import React from 'react';
import projectContent from './ProjectContents';
import {Link} from 'react-router-dom';
import {Row, Container, Col, Card, Button } from 'react-bootstrap';

const page = ({match}) => {
    const name = match.params.name;
    const project = projectContent.find(project => project.name === name);

    if(!project) return  <h1>Article does not exist</h1>

    return(
        // Short hand <></>
        <React.Fragment>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={10} xs={12}>
                    <h1>{project.name}</h1>
            
                    <hr className="hrElement" />
                    <h2>{project.headerOne}</h2>
                    <img className="projectImage" src={require(`../images/${project.images[0]}`)} alt ="image1"></img>
                    <p>{project.content[0]}</p>

                    <hr className="hrElement" />
                    <h2>{project.headerTwo}</h2>
                    <img className="projectImage" src={require(`../images/${project.images[1]}`)} alt ="image1"></img>
                    <p>{project.content[1]}</p>

                    <hr className="hrElement" />
                    <h2>{project.headerThree}</h2>
                    <img className="projectImage" src={require(`../images/${project.images[2]}`)} alt ="image1"></img>
                    <p>{project.content[2]}</p>


                    <Link to ={`/projects`}> <Button variant="outline-light" type="submit" className="tm-btn-send">Back</Button></Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>



        
        {/*
        {project.content.map((paragraph,key) => (
                
            <p key={key}>{paragraph}</p>
            
        ))}*/}
        </React.Fragment>
    );
}
export default page;