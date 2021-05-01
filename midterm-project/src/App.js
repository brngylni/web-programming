import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import GuessGamePage from './Components/GuessGamePage';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App p-5">
      <Router>
        <NavigationBar />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/guessGame" component={GuessGamePage}></Route>
      </Router>
    </div>
  );
}

export default App;
