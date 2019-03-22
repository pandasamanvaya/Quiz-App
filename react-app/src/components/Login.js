import React, {
  Component
} from 'react';

import history from './history';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      formData: {
        Userid : "",
        UserName: "",
        password: "",
      },
      notFound: false
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleIChange = this.handleIChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUpdate(){
    this.checkUser();
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/people/' + this.state.formData.Userid +'/' + this.state.formData.UserName, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));

  }
  checkUser(){
    if (this.state.formData.password != this.state.data.password) {
      this.setState({
        notFound: true
      });
    } else {
      this.setState({
        notFound: false
      });
      history.replace('/QuizPage');
      {this.refreshpage()}

    }
  }

  refreshpage() {
   window.location.reload();
 }

  handleFChange(event) {
    this.state.formData.UserName = event.target.value;
  }
  handleLChange(event) {
    this.state.formData.password = event.target.value;
  }
  handleIChange(event) {
    this.state.formData.Userid = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" value={this.state.UserName} onChange={this.handleFChange}/>
            </div>
            <div className="form-group">
              <label>User Id</label>
              <input type="password" className="form-control" value={this.state.Userid} onChange={this.handleIChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.handleLChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.notFound &&
          <div>
            Invalid User Name or Password or Id.
          </div>
        }

      </div>
    );
    }
}

export default Login;
