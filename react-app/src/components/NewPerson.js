import React, {
  Component
} from 'react';
import history from './history';
import '../style/NewPerson.css';
import {
  Redirect
} from 'react-router-dom'

class NewPerson extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      formData: {
        UserName: "",
        password: "",
        sports_score: 0,
        politics_score: 0,
      },
      submitted: false,
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/people', {
        method: 'POST',
        body: JSON.stringify(this.state.formData),
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300){
          this.setState({
            submitted: true,
          });
          {this.getId()}
        }
      });
  }

  handleFChange(event) {
    this.state.formData.UserName = event.target.value;
  }
  handleLChange(event) {
    this.state.formData.password = event.target.value;
  }
  getId(){
    fetch('http://localhost:8080/person/' + this.state.formData.UserName, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sign Up</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" value={this.state.UserName} onChange={this.handleFChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.handleLChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2> Welcome to QuizApp {this.state.data.username}</h2><br/>
            Your user id is {this.state.data.id}. Remember this as it will be asked in further authentication process. You can now login using your credentials.
        </div>
        }

      </div>
    );
  }
}

export default NewPerson;
