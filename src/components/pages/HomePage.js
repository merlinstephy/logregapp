import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

import {Carousel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavComponent = () => {
    return (
       
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">🅵🆁🅴🅴 🅱🅸🆁🅳</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                           
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="./Home">Home</Nav.Link>
                                <Nav.Link href="/">Logout</Nav.Link>
                                
                               
                            </Nav>
                           
                          
                           
                        </Offcanvas.Body>
                        
                    </Navbar.Offcanvas>
                    
                            
                </Container>
               
            </Navbar>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./bg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5 style ={{fontSize : '60px'}}>𝐹𝓇𝑒𝑒 𝐵𝒾𝓇𝒹</h5>
                        <p style ={{fontSize : '40px'}}>𝒫𝒽𝓉𝑜𝓉𝑜 𝒮𝓉𝓊𝒹𝒾𝑜.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="./bg1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bg5.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
           
        </div>
      
    )
}

export default NavComponent;