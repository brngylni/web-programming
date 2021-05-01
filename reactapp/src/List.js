import React, {Component} from 'react'

class List extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Department : {this.props.department}</li>
                    <li>GPA : {this.props.gpa}</li>
                    <i class="far fa-save"></i>
                </ul>
            </div>





        )
    }
}

export default List;