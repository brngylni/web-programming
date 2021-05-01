import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import icon from './gamble.png';

class GuessGamePage extends Component {
    
    constructor(props){
        super(props);
        this.state={
            guess:null,
            result:"0",
            counter:0,
            random:"0"
        };
        
        this.numberGame = this.numberGame.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
    }
    
    componentDidMount(){
        this.randomNumber();
    }

    randomNumber(){
        let mySet = new Set();
        while(mySet.size < 4){
            let x = Math.floor(Math.random() * 10);
            // Preventing zero to be the first digit of number.
            if(mySet.size == 0 && x == 0){
                continue;
            }
            mySet.add(x);
        }
        // Combining 4 different numbers.
        let number = Array.from(mySet).join("");
        this.setState({random : number});
    }

    numberGame(){
        let guess;
        try{
            guess = this.state.guess.toString();
        }catch(error){
            return;
        }
        // Using set data structure for non-repeating-digit number.
        let number = this.state.random.toString();
        //number = "2478";
        let point = 0;
        let strPoint = ""
        // Iterating the entered number and making comparison.
        for(let i = 0; i<number.length; i++){
            if(guess[i] == number[i]){
                point++;
                strPoint += "+1";
                continue;
            }
            if(guess.includes(number[i])){
                point--;
                strPoint += "-1";
            }
           
        }
        if(strPoint == ""){
            strPoint = "0";
        }

        if(point > 0){
            strPoint = "+" + point;
        }else if(point < 0){
            strPoint = point;
        }
        // Changing state value to change "Result:" field on the UI 
        this.setState({result: strPoint});
        this.setState({counter: this.state.counter + 1});
        this.randomNumber();
        point == 4 ? alert(" Congratulations!!!!\n Point = " + strPoint + "\n Number = " + number) : alert("Point = " + strPoint + "\n Number = " + number);
    }

    render() {
        return (
            <div className="mt-5">
                <Container>
                    <Card border="primary">
                        <Card.Header>Guess Game</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Form className="p-3">
                                    <Form.Group as={Row} controlId="guess" className="mb-3 ms-0">
                                        <Col sm="3"></Col>
                                        <Form.Label column sm="2" >Type your guess : </Form.Label>
                                        <Col sm="3">
                                            <Form.Control type="text" placeholder="Type Here" value={this.state.guess} onChange={e => this.setState({guess: e.target.value})}></Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Button variant="warning" onClick={this.numberGame} className="ms-5">Check</Button>
                                    <Form.Group as={Row} controlId="result" className="mt-3 mb-3">
                                        <Col sm="3"></Col>
                                        <Form.Label column sm="2">Result : </Form.Label>
                                        <Col sm="3">
                                            <Form.Control type="text" readOnly value={this.state.result}></Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="counter" className="mb-3">
                                        <Col sm="3"></Col>
                                        <Form.Label column sm="2" >Counter : </Form.Label>
                                        <Col sm="3">
                                            <Form.Control type="text" readOnly placeholder="Type Here" value={this.state.counter} onChange={e => this.setState({guess: e.target.value})}></Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                        <Container className="w-75">
                        <Card.Img variant="bottom" src={icon} className="h-50"/>
                        </Container>
                    </Card>
                </Container>
            </div>


        )
    }
}
export default GuessGamePage;