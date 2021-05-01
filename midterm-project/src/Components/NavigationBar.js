import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

class NavigationBar extends Component{
    render(){
        return(
            <div>
                <Navbar fixed="top" bg="success" expand="lg">
                    <Navbar.Brand className="text-light ms-4" href="/home">MyProject</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="/about" className="text-light">About</Nav.Link>
                            <Nav.Link href="/guessGame" className="text-light">Guess Game</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavigationBar;