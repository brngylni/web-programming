import React, {Component} from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './image4.png';

class AboutPage extends Component{
    render(){
        return(
            <div className="mt-5">
                    <Row>
                        <Jumbotron fluid className="mt-5 bg-white">
                            <Container>
                            <h1 className="text-muted">About</h1>
                            <p><a href="/home">Click to go back</a></p>
                            </Container>
                        </Jumbotron>
                    </Row>
                    <Row>
                <Card className="w-75 mx-auto mt-5">
                    
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>My name is Mehmet Geylani and I am a Computer Engineering student at Adnan Menderes University.</Card.Text>
                        <a className="btn btn-primary ms-2" href="https://www.linkedin.com/in/mehmet-baran-geylani-456481103/" target="_blank">LinkedIn</a>
                        <a className="btn btn-primary ms-2" target="_blank">Facebook</a>
                        <a className="btn btn-primary ms-2" target="_blank">Instagram</a>
                    </Card.Body>
                    <Card.Img variant="bottom" src={image}/>
                </Card>
                </Row>
            </div>


        )
    }
}
export default AboutPage;