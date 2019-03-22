import React, {
  Component
} from 'react';
import '../style/NewPerson.css';
import {
  Redirect
} from 'react-router-dom'

class AddSportsQuiz extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        Question: "",
        Option_a: "",
        Option_b: "",
        Option_c: "",
        Option_d: "",
        Answer: "",
        Type: "",
        Image : false,
      },
    submitted: false,
    }
    this.handleQChange = this.handleQChange.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleDChange = this.handleDChange.bind(this);
    this.handleTChange = this.handleTChange.bind(this);
    this.handleansChange = this.handleansChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/sport', {
        method: 'POST',
        body: JSON.stringify(this.state.formData),
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300){
          this.setState({
            submitted: true,
          });
        }
      });
  }

  handleTChange(event) {
    this.state.formData.Type = event.target.value;
  }
  handleQChange(event) {
    this.state.formData.Question = event.target.value;
  }
  handleAChange(event) {
    this.state.formData.Option_a = event.target.value;
  }
  handleBChange(event) {
    this.state.formData.Option_b = event.target.value;
  }
  handleCChange(event) {
    this.state.formData.Option_c = event.target.value;
  }
  handleDChange(event) {
    this.state.formData.Option_d = event.target.value;
  }
  handleansChange(event) {
    this.state.formData.Answer = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Add a Sports Question</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label>Type</label>
                <input type="text" className="form-control" value={this.state.Type} onChange={this.handleTChange}/>
            </div>
            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.Question} onChange={this.handleQChange}/>
            </div>
            <div className="form-group">
                <label>Option a</label>
                <input type="text" className="form-control" value={this.state.Option_a} onChange={this.handleAChange}/>
            </div>
            <div className="form-group">
                <label>Option b</label>
                <input type="text" className="form-control" value={this.state.Option_b} onChange={this.handleBChange}/>
            </div>
            <div className="form-group">
                <label>Option c</label>
                <input type="text" className="form-control" value={this.state.Option_c} onChange={this.handleCChange}/>
            </div>
            <div className="form-group">
                <label>Option d</label>
                <input type="text" className="form-control" value={this.state.Option_d} onChange={this.handleDChange}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.Answer} onChange={this.handleansChange}/>
            </div>

            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New question successfully added.
            </h2>
          </div>
        }

      </div>
    );
  }
}

export default AddSportsQuiz;
