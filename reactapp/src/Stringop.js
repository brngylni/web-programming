import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Stringop extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            result:0,
            result3:0,
            result4:'',
            result5:'',
            text1:'',
            text2:'',
            num2:0
        }
        this.handlenum1Change=this.handlenum1Change.bind(this);
        this.handlenum2Change=this.handlenum2Change.bind(this);
    }
    handlenum1Change(evt)
    {
        this.setState({text1:(evt.target.value)});
    }
    handlenum2Change(evt)
    {
        this.setState({text2:(evt.target.value)});
    }

    findLength=()=>{  
       // var sln =this.state.text1.length;
       // this.setState({result:sln});
        this.setState({result:this.state.text1.length});
    }

    reverse=()=>{
        this.setState({result: this.state.text1.split("").reverse().join("")});
    }

    
    charAt=()=>{
        var str =  this.state.text1;
        var str2 =  this.state.text2;
        var pos = str.indexOf(str2);
        this.setState({result3: pos});
    }

    charAtAll=()=>{
        var str =  this.state.text1;
        var str2 =  this.state.text2;
        var pos = str.indexOf(str2);
        var textResult='';
        for (var j = 0; j < str2.length; j++) {
         for (var i = 0; i < str.length; i++) {            
                 if(str.charAt(i)==str2.charAt(j))
                 { 
                     textResult=textResult+str.charAt(i) +' exists, ';
                     break;
                }
               }
           }
        this.setState({result4: textResult});
    }

    shuffleText=()=>{
        var str =  this.state.text1;       
        var a = str.split("");
        var n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
        this.setState({result5:  a.join("")});
    }

    render()
    {
        return(
            <div>  <br></br>

Input text: <input onChange={this.handlenum1Change} style={{width:'300px'}}></input>  <br></br><br></br>
Second text: <input onChange={this.handlenum2Change}></input> <br></br><br></br>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={this.findLength}>
      Find length of the text!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> <div>{this.state.result}</div></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.reverse}>
       Reverse the text!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><div>{this.state.result}</div></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={this.charAt}>
        Get index of the text in second text input!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body><div>{this.state.result3}</div></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={this.charAtAll}>
        Check the existance of each element of second text in first text!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body><div>{this.state.result4}</div></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4" onClick={this.shuffleText}>
       Shuffle the text!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body><div>{this.state.result5}</div></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

            </div>
        )
    }
}

export default Stringop;