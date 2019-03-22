import React, {
  Component
} from 'react';
import '../style/Home.css';
import Login from './Login';
import {
  Link,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quiz</h1>
        </header>
        <p>This is a simple Quiz Game.<br/>
          Sign In or Login to play.
          <br/>
      <div>
        <button1  type = "submit" ><Link to = {"/Login"} style = {{color : 'black'}}>Log In</Link>
        </button1>
        <button2  type = "submit"><Link to = {"/NewPerson"} style = {{color : 'black'}}>Sign Up</Link>
        </button2>
          </div>
        </p>
      </div>
    );
  }
}

export default Home;
