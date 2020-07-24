import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const myNavbar = () => (
    <Navbar expand="lg" variant="dark" className="Ownnavbar-default navbar-brand">
        <Container>
        <img className="projectImage" alt="/" src={require('./images/MyLogo.png')} />
                <Nav className="tm-site-header">
                <Navbar.Brand>Anders Ipsen</Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/MySite/#projects">Projects</Nav.Link>
                        <Nav.Link href="/MySite/#/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
/*
    <div class="navbar ">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-6 text-center ">
                        <header class="">
                            <h1 class="tm-site-title ">Anders Ipsen</h1>
                        </header>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse ">
                            <ul class="nav navbar-nav text-center tm-site-title">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
        </div>   */
);




export default myNavbar;