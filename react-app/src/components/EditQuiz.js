import React, {
  Component
} from 'react';

import '../style/QuizPage.css'

import {
Link
} from 'react-router-dom';

class EditQuiz extends Component {
  render() {
    return (
      <div className = "App">
    <header className = "App-header">
      <h1 className = "App-title">Quiz Admin Borad</h1>
    </header>
    <h2>
    Select a gerne to edit
    </h2>
    <div>
      <button1 type = "submit"><Link to = {"/Admin/Quiz/EditSportsQuiz"} style = {{color : 'black'}}>Sports</Link>
      </button1>
      <button2 type = "submit"><Link to = {"/Admin/Quiz/EditPoliticsQuiz"} style = {{color : 'black'}}>Politics</Link>
      </button2>

      </div>
      </div>
    );
  }
}

export default EditQuiz;
