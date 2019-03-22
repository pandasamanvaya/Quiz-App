import React, {
  Component
} from 'react';
import '../style/DeletePerson.css';

class DeleteSports extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      submitted: false,
      item: {
        id: 0
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createId = this.createId.bind(this);
  }
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/sport/');
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/sport/' + this.state.item.id, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          {
            this.refreshpage()
          }

        }
      });
  }

  createId(event) {
    this.state.item['id'] = event.target.value;
  }
  refreshpage() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Delete a Question</h1>
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
       <br />
       <input type="submit" value="Submit" ></input>
        </form>

      </div>
    );
  }
}

export default DeleteSports;
