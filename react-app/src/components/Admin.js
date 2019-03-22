import React, {
  Component
} from 'react';
import history from './history';
import '../style/QuizPage.css'

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div className = "App">
    <header className = "App-header">
      <h1 className = "App-title">Welcome Admin</h1>
    </header>
    <h2>
      Here you can modify or add users and quiz questions
    </h2>
    <div>
      <button1 type = "submit"><Link to = {"/Admin/User"} style = {{color : 'black'}}>User</Link>
      </button1>
      <button2 type = "submit"><Link to = {"/Admin/Quiz"} style = {{color : 'black'}}>Quiz</Link>
      </button2>

      </div>
      </div>
    );
  }
}

export default Admin;
