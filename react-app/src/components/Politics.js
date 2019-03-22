import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router-dom';

import "../style/Sports.css"
class Politics extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Politics Section</h1>
        </header>
        <div>
          <button1 type = "submit"><Link to = {"/QuizPage/Politics/World"} style = {{color : 'black'}}>World</Link>
          </button1>
          <button2 type = "submit"><Link to = {"/QuizPage/Politics/India"} style = {{color : 'black'}}>India</Link>
          </button2>
        </div>
      </div>
    );
  }

}
export default Politics;
