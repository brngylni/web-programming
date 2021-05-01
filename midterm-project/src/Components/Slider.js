
import React, {Component} from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image.png'
import image2 from './image2.jpg'
import image3 from './image3.jpeg'
import image4 from './image4.png'
// class="position-relative mt-1 me-5"
class Slider extends Component{
    render(){
        return(
           <div>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 h-100" src={image1}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 h-100" src={image2}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Slider;