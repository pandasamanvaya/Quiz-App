import React, {
  Component
} from 'react';
import '../style/EditPerson.css';

class EditPoliticsQuiz extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      item: {
        qno: 0
      },
      select: [],
      formData: {
        Question: "",
        Option_a: "",
        Option_b: "",
        Option_c: "",
        Option_d: "",
        Answer: "",

      },
      submitted: false,

    }
    this.handleQChange = this.handleQChange.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleDChange = this.handleDChange.bind(this);
    this.handleansChange = this.handleansChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editRecord = this.editRecord.bind(this);
    this.createId = this.createId.bind(this);

  }

  componentDidMount() {
    const request = new Request('http://localhost:8080/politics/');
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));
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

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/politics/' + this.state.item.qno, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        select: data
      }));
      this.setState({
        submitted: true
      });

  }
editRecord(event){
  event.preventDefault();
  fetch('http://localhost:8080/politics/' + this.state.select.qno, {
      method: 'PUT',
      body: JSON.stringify(this.state.formData),
    })
    {this.refreshpage()}
}

refreshpage() {
 window.location.reload();
}
  createId(event) {
    this.state.item['qno'] = event.target.value;
  }

  render() {
      return (
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit Question</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <table className="table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Qno</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key) =>
                  <tr key = {key}>
                      <td><input type="radio" value={item.qno} onChange={this.createId} name = "selection"/></td>
                      <td>{item.qno}</td>
                      <td>{item.question}</td>
                  </tr>
             )}
          </tbody>
       </table>
     <br/>
       <input type="submit" value="Submit" ></input>
       </form>
       {this.state.submitted &&
       <div className="formContainer">
         <form onSubmit={this.editRecord}>
           <div className="form-group">
               <label>Question </label>
               <input type="text" className="form-control" value={this.state.Question} onChange={this.handleQChange}/>
               <text>{this.state.select.question}</text>
           </div>
           <div className="form-group">
               <label>Option a </label>
               <input type="text" className="form-control" value={this.state.Option_a} onChange={this.handleAChange}/>
               <text>{this.state.select.option_a}</text>
           </div>
           <div className="form-group">
               <label>Option b </label>
               <input type="text" className="form-control" value={this.state.Option_b} onChange={this.handleBChange}/>
               <text>{this.state.select.option_b}</text>
           </div>
           <div className="form-group">
               <label>Option c </label>
               <input type="text" className="form-control" value={this.state.Option_c} onChange={this.handleCChange}/>
               <text>{this.state.select.option_c}</text>
           </div>
           <div className="form-group">
               <label>Option d </label>
               <input type="text" className="form-control" value={this.state.Option_d} onChange={this.handleDChange}/>
               <text>{this.state.select.option_d}</text>
           </div>
           <div className="form-group">
               <label>Answer </label>
               <input type="text" className="form-control" value={this.state.Answer} onChange={this.handleansChange}/>
           </div>

              <button type="submit" className="btn btn-default">Submit</button>
         </form>
       </div>
     }


      </div>
    );
  }
}

export default EditPoliticsQuiz;
