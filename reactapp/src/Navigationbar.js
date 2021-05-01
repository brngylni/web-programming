import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './App.css';

class Navigationbar extends Component{
    render()
    {
        return(
    <div> 
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">Home page</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="firstcomponent">First Component</Nav.Link>
                <Nav.Link href="slider">Slider</Nav.Link>
                <Nav.Link href="calculator">Calculator</Nav.Link>
                <Nav.Link href="sum">Sum</Nav.Link>
                <Nav.Link href="string">String</Nav.Link>
                <Nav.Link href="list">List</Nav.Link>
                    <NavDropdown title="Contact" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="contact">Contact Info</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/">Intagram</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/">Linkedin</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="writetous">Write us</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigationbar;