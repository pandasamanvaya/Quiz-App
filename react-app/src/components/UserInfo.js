import React, {
  Component
} from 'react';

import history from './history';
import "../style/Userinfo.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      formData: {
        Userid : "",
      },
      Found: false
    }
    this.handleIChange = this.handleIChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/people/' + this.state.formData.Userid, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));

    if (this.state.formData.Userid != this.state.data.id) {
      this.setState({
      Found: false
      });
    } else {
      this.setState({
        Found: true
      });
    }
  }

  handleIChange(event) {
    this.state.formData.Userid = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Information</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>User Id</label>
              <input type="password" className="form-control" value={this.state.Userid} onChange={this.handleIChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
        {this.state.Found &&
          <div className = "Userinfo">
            <ul>
              <li>
                User Name : {this.state.data.username}
              </li>
              <li>
                Sports Score : {this.state.data.sports_score}
              </li>
              <li>
                Politics Score : {this.state.data.politics_score}
              </li>
              <li>
                Total Score : {this.state.data.sports_score + this.state.data.politics_score}
              </li>
            </ul>
          </div>
        }

      </div>
    );
    }
}

export default Login;
