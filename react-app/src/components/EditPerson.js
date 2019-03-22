import React, {
  Component
} from 'react';
import '../style/EditPerson.css';

class EditPerson extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      item: {
        id: 0
      },
      person: [],
      formData: {
        UserName: "",
      },
      submitted: false,

    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editRecord = this.editRecord.bind(this);
    this.createId = this.createId.bind(this);

  }

  componentDidMount() {
    const request = new Request('http://localhost:8080/people/');
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));
  }

  handleFChange(event) {
    this.state.formData.UserName = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/people/' + this.state.item.id, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        person: data
      }));
      this.setState({
        submitted: true
      });

  }
editRecord(event){
  event.preventDefault();
  fetch('http://localhost:8080/people/' + this.state.person.id, {
      method: 'PUT',
      body: JSON.stringify(this.state.formData),
    })
    {this.refreshpage()}
}

refreshpage() {
 window.location.reload();
}
  createId(event) {
    this.state.item['id'] = event.target.value;
  }

  render() {
      return (
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit a Person</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <table className="table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>User Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key) =>
                  <tr key = {key}>
                      <td><input type="radio" value={item.id} onChange={this.createId} name = "selection"/></td>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.sports_score+item.politics_score}</td>

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
               <label>User Name </label>
               <input type="text" className="form-control" value={this.state.UserName} onChange={this.handleFChange}/>
               <text>{this.state.person.username}</text>
           </div>
              <button type="submit" className="btn btn-default">Submit</button>
         </form>
       </div>
     }


      </div>
    );
  }
}

export default EditPerson;
