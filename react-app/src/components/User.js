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
      <h1 className = "App-title">User Admin Borad</h1>
    </header>
    <h2>
      Here you can modify or view users
    </h2>
    <div>
      <button1 type = "submit"><Link to = {"/ViewPeople"} style = {{color : 'black'}}>View Users</Link>
      </button1>
      <button2 type = "submit"><Link to = {"/DeletePerson"} style = {{color : 'black'}}>Delete Users</Link>
      </button2>
      <button3 type = "submit"><Link to = {"/EditPerson"} style = {{color : 'black'}}>Edit Users</Link>
      </button3>

      </div>
      </div>
    );
  }
}

export default User;
