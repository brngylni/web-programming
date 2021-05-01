import logo from './logo.svg';
import './App.css';
import FirstComp from "./FirstComp";
import List from "./List";
import Button from 'react-bootstrap/Button';
import Navigationbar from "./Navigationbar";
import Slider from "./Slider";
import Calculator from "./Calculator";
import Contact from "./Contact";
import Stringop from "./Stringop";
import Sum from "./Sum";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const marker = true;
  return (
    <div className="App" style={{backgroundColor:'#AEE8E1'}} >  

    <Router>
    <Navigationbar/>   
    <Route path="/firstcomponent" component={FirstC}></Route>
    <Route path="/list" component={ListC}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/contact" component={Contact}></Route>


    <Route path="/writetous" component={WriteTo}></Route>
    <Route path="/slider" component={SliderCaller}></Route>
    <Route path="/calculator" component={Calculator}></Route>
    <Route path="/string" component={Stringop}></Route>
    <Route path="/sum" component={Sum}></Route>
    </Router>

    </div>
  );
}

const SliderCaller = ()=>(
  <div style={{width:'500px', height:'500px'}}>
    <Slider></Slider>
  </div>
  );


const Home = ()=>(
  <div>
    Home page
    <br></br>
    <br></br>
    <br></br>
    Home
  </div>
  );
const ListC=()=>
(
  <div>
       <List name="Ali" department="CSE" gpa="3.8"></List>
  </div>
);
const FirstC = ()=>(
  <div>
    <FirstComp buttontxt="Update"></FirstComp>
  </div>
  );

  const WriteTo=()=>
  (
    <div>
        write to us page
    </div>
  );



export default App;
