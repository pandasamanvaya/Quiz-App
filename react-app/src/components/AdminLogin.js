import React, {
  Component
} from 'react';

import history from './history';

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      AdminData:{
        UserName : "Samanvaya",
        Password : "11235@Eagle",
      },
      formData: {
        UserName: "",
        password: "",
      },
      notAdmin: false
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    if (this.state.formData.password == this.state.AdminData.password && this.state.formData.UserName == this.state.AdminData.UserName) {
      this.setState({
        notAdmin: false
      });
    } else {
      this.setState({
        notAdmin: true
      });
      history.replace('/Admin');
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

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Admin Login</h1>
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
        {this.state.notFound &&
          <div>
            You are not an Admin.
          </div>
        }

      </div>
    );

  }
}

export default AdminLogin;
