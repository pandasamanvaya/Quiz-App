import React, {
  Component
} from 'react';

import '../style/QuizPage.css'

import {
  Link
} from 'react-router-dom';

class Sports extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sports Section</h1>
        </header>
        <div>
          <button1 type = "submit"><Link to = {"/QuizPage/Sports/Cricket"} style = {{color : 'black'}}>Cricket</Link>
          </button1>
          <button2 type = "submit"><Link to = {"/QuizPage/Sports/Football"} style = {{color : 'black'}}>Football</Link>
          </button2>
        </div>
      </div>
    );
  }
}
export default Sports;
