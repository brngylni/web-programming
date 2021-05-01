import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image4 from './software.jpg'
import profile from './profile.png'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Container fluid className="mt-5">
                    <Row>
                        <Col xs={3}>
                            <Card>
                                <Card.Img variant="top" src={profile} />
                                <Card.Body>
                                    <Card.Title>My Project for Midterm</Card.Title>
                                    <Card.Text>
                                        Hi, this is my project for the midterm.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Slider/>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                                    <Card.Title>My Other Projects</Card.Title>
                                    <Card.Text>
                                        You can see my other projects on my <a className="text-muted" href="http://www.brngylni.wordpress.com"  target="_blank">blog</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Song Advice</Card.Title>
                                <Card.Text>
                                    You should listen that song (Don't judge me): <a className="btn btn-success"  href="https://open.spotify.com/track/4HlVUapocBDBqkPtET2knz?si=aJYk92uiTReyBmLCBiwD6g"  target="_blank">Great!</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p className="text-muted">I just couldn't find anything to put here.</p>
                            </Card.Footer>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}
export default HomePage;