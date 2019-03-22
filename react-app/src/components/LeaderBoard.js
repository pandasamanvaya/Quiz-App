import React, {
  Component
} from 'react';

import '../style/LeaderBoard.css'

import {
Link
} from 'react-router-dom';

class LeaderBoard extends Component {
  render() {
    return (
      <div className = "App">
    <header className = "App-header">
      <h1 className = "App-title">User Admin Borad</h1>
    </header>
    <h2>
      Check the leaderboard playing the game
    </h2>
    <div>
      <button1 type = "submit"><Link to = {"/LeaderBoard/Sports"} style = {{color : 'black'}}>Sports LeaderBoard</Link>
      </button1>
      <button2 type = "submit"><Link to = {"/LeaderBoard/Politics"} style = {{color : 'black'}}>Politics LeaderBoard</Link>
      </button2>
      <button3 type = "submit"><Link to = {"LeaderBoard/Overall"} style = {{color : 'black'}}>Overall LeaderBoard </Link>
      </button3>

      </div>
      </div>
    );
  }
}

export default LeaderBoard;
