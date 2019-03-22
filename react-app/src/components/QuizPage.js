import React, {
  Component
} from 'react';

import '../style/QuizPage.css'
import Login from './Login'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class QuizPage extends Component {

  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div className = "App">
        <span className="pull-right">
          <Link to ={"/"}>Log out</Link>
        </span>
      <header className = "App-header">
        <h1 className = "App-title">QuizPage</h1>
      </header>
      <div>
        <button1 type = "submit"><Link to = {"/QuizPage/Sports"} style = {{color : 'black'}}>Sports</Link>
        </button1>
        <button2 type = "submit"><Link to = {"/QuizPage/Politics"} style = {{color : 'black'}}>Politics</Link>

        </button2>

      </div>
    </div>
    );
  }
}

export default QuizPage;
