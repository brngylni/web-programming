import React, {Component} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class Calculator extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            result:0,
            result2:'none',
            result3:'none',
            result4:0,
            num1:0,
            num2:0
        }
        this.handlenum1Change=this.handlenum1Change.bind(this);
        this.handlenum2Change=this.handlenum2Change.bind(this);
    }
    handlenum1Change(evt)
    {
        this.setState({num1:Number(evt.target.value)});
    }
    handlenum2Change(evt)
    {
        this.setState({num2:Number(evt.target.value)});
    }

    addAction=()=>{
        this.setState({result:this.state.num1+this.state.num2})
    }
    evenOddAction=()=>{
        var rst="";
        if(this.state.num1%2==0)
        {
            rst=rst+"First number is even";
        }
        else
        {
            rst=rst+"First number is odd";
        }

        if(this.state.num2%2==0)
        {
            rst=rst+"-Second number is even";
        }
        else
        {
            rst=rst+"- Second number is odd";
        }
        this.setState({result2:rst})
    }
    randomNum=()=>{
       var x= (Math.floor(Math.random() * 100)); // 0 ve 100 arasında sayı üretir.
        this.setState({result4:x})
    }

    listNumbers=()=>{
        var rst="";
        var n1=this.state.num1;
        var n2=this.state.num2;
        var temp=0;
        if(n1>n2)
        {
            temp=n1;
            n1=n2;
            n2=temp;
            alert("numbers are replaced");
        }
        
        for(temp=n1; temp<=n2; temp++)
        { 
            rst=rst+"-" +temp;
        }
        this.setState({result3:rst})
    }
    render()
    {
        return(
            <div>  <br></br>
<table>
<tr>First number: <input onChange={this.handlenum1Change}></input>   </tr>
<tr>Second Number number: <input onChange={this.handlenum2Change}></input>  </tr>

    <tr>
    <td><input type="button" value="Calculate the sum!" onClick={this.addAction}></input></td>
    <td>  Result: <input value={this.state.result}></input> 
</td>
    </tr>

    <tr>
    <td><input type="button" value="Check even or odd!" onClick={this.evenOddAction}></input></td>
    <td>Result2:  <div>{this.state.result2}</div> <br></br> <br></br>
</td>
    </tr>

    <tr>
    <td><button type="button" value="Check even or odd!" onClick={this.listNumbers}>List all numbers between given numbers</button>
</td>
    <td>   Result3:  <div>{this.state.result3}</div>
</td>
    </tr>

    <tr>
    <td><button type="button" value="Generate random number between 0 and 100!" onClick={this.randomNum}>Generate random number between 0 and 100!</button>
</td>
    <td>  Random nunmber is:  <div>{this.state.result4}</div>
    </td>
    </tr>
</table>
            </div>

            
        )
    }
}

export default Calculator;