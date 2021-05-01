import React, {Component} from 'react'

class Sum extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            result:0,
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
    render()
    {
        return(
            <div>  <br></br>
First number: <input onChange={this.handlenum1Change}></input>   <br></br><br></br>
Second Number number: <input onChange={this.handlenum2Change}></input> <br></br><br></br>

    <input type="button" value="Calculate the sum!" onClick={this.addAction}></input>
    Result: <input value={this.state.result}></input> 
            </div>        
        )
    }
}

export default Sum;