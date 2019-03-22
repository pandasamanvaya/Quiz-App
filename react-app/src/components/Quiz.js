import React, {
  Component
} from 'react';

import '../style/Quiz.css'

import {
Link
} from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <div className = "App">
    <header className = "App-header">
      <h1 className = "App-title">Quiz Admin Borad</h1>
    </header>
    <h2>
      Here you can modify or add quiz questions
    </h2>
    <div>
      <button1 type = "submit"><Link to = {"/Admin/Quiz/EditQuiz"} style = {{color : 'black'}}>Edit Quiz</Link>
      </button1>
      <button2 type = "submit"><Link to = {"/Admin/Quiz/DeleteQuiz"} style = {{color : 'black'}}>Delete Quiz</Link>
      </button2>
      <button3 type = "submit"><Link to = {"/Admin/Quiz/AddQuiz"} style = {{color : 'black'}}>Add Quiz</Link>
      </button3>

      </div>
      </div>
    );
  }
}

export default User;
