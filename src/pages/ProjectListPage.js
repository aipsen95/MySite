import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, CardColumns} from 'react-bootstrap';
import ProjectListComponent from '../components/projectListComponent';
import projectContent from './ProjectContents';
const ProjectListPage = () => (
    // Short hand <></>
    <React.Fragment>
    <Container>    
    <CardColumns style={{paddingLeft:'45px'}}>
       <ProjectListComponent projects = {projectContent} />
    </CardColumns>
    </Container>
    

    {/*
    <Container>
     <Row style={{paddingLeft:'60px'}}> 
     <ProjectListComponent projects = {projectContent} />
    </Row>
    </Container>
*/}

    </React.Fragment>
);

export default ProjectListPage;