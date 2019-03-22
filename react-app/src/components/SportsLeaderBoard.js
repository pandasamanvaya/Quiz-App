import React, {
  Component
} from 'react';
import '../style/ViewPeople.css';

class SportsLeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/people/SportsLeaderBoard');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sports LeaderBoard</h1>
        </header>

        <table className="table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Sports Score</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.sports_score}</td>

                  </tr>
                )
             })}
          </tbody>
       </table>
      </div>
    );
  }
}

export default SportsLeaderBoard;
