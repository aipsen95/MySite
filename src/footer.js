import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const footer = () => (
    <div className="footer">
        <Container>
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={2} className="footer-item">Facebook</Col>
                <Col xs={12} md={2} className="footer-item">LinkedIn</Col>
                <Col xs={12} md={2} className="footer-item">Twitter</Col>
                <Col xs={12} md={2} className="footer-item">Instagram</Col>
                <Col xs={12} md={2} className="footer-item"></Col>
            </Row>
            
        </Container>
    </div>
);

export default footer;

