
import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';


const ProjectList = ({projects}) => (
    <>
    {projects.map((project, key) => (
    <Col lg={4} md={6} xs={12} className="projectEntryCard"> 
    <Card style={{ width:'18rem'}}>
        <Card.Img variant="top" src={require(`../images/${project.images[0]}`)} />
        <Card.Body className="projectEntryText">
        <Card.Title>{project.name}</Card.Title>
            <Card.Text>
            {project.description}
            </Card.Text>
            <Link key={key} to ={`/page/${project.name}`}> <Button variant="outline-dark" type="submit" className="tm-btn-send">Read More</Button></Link>
        </Card.Body>
        </Card>
    </Col>  
    
    
    ))}
    </>
    );

export default ProjectList;
