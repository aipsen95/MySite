import React from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
const ContactPage = () => (
    // Short hand <></>
    <React.Fragment>

    <h2 class="text-center">Contact Me</h2>
            
            <Container>
                <Row>
                    <Col xs= {1} md={3}></Col>
                    <Col xs={10}md={6}>
                    <p>Do you have a project that needs help or want to do a collabarotion or just talk about topics related to my profile, then feel free to send me a mail, using the form below</p>
                
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    I will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                   <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>

                
                <Button variant="outline-light" type="submit" className="tm-btn-send">
                    Send Mail
                </Button>
                </Form>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            
            </Container>
            
    </React.Fragment>
);

export default ContactPage;