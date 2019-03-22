import React, {
  Component
} from 'react';

import "../style/Sports.css";
import politics from "../images/politician.png";

class World extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      item: {
        response: "",
        qno: 0,
      },
      player : [],
      record: [],
      correct: false,
      id: 0,
      id_set : false,
    }
    this.RecordAnswer = this.RecordAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIChange = this.handleIChange.bind(this);
    this.checkid = this.checkid.bind(this);
  }


  LoadQuestion(event) {
    const request = new Request('http://localhost:8080/politics/' + "World");
    fetch(request, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));
  }

  handleSubmit(value) {
    return event => {
      event.preventDefault();
      this.state.item.qno = value
       {
        this.checkAnswer()
      }

    }
  }

  checkAnswer(event) {
    fetch('http://localhost:8080/politics/' + this.state.item.qno, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        record: data
      }));
    if (this.state.record.answer != this.state.item.response) {
      this.setState({
        correct: false
      });
    } else {
      this.setState({
        correct: true
      });
      this.updateScore()
    }

  }

  checkid(event) {
    event.preventDefault();
    fetch('http://localhost:8080/people/' + this.state.id, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => this.setState({
        player: data
      }));
    if (this.state.player.id == this.state.id) {
      this.setState({
        id_set : true
      });
      this.LoadQuestion();

    }
  }
  updateScore(event)
  {
    this.state.player.sports_score += 10;
    fetch('http://localhost:8080/people/' + this.state.player.id, {
      method: 'PUT',
      body: JSON.stringify(this.state.player),
    })
  }

  RecordAnswer(event) {
    this.state.item['response'] = event.target.value;
  }
  handleIChange(event) {
    this.state.id = event.target.value;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">World Politics</h1>
        </header>
        {!this.state.id_set &&
        <form onSubmit={this.checkid}>
        <div className="form-group">
          <label>User Id</label>
          <input type="password" className="form-control" value={this.state.Userid} onChange={this.handleIChange}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      }
        {this.state.id_set &&
        <div>{this.state.data.map((item, key) =>
                 <form onSubmit={this.handleSubmit(item.qno)}>
                  <div className="Question" key = {key}>
                    {item.image &&
                      <div>
                      <img src = {politics} />
                      </div>
                    }
                  {item.question}<br></br>
                <input type="radio" value = {item.option_a} name = "selection" onChange={this.RecordAnswer}/> a. {item.option_a}<br></br>
                  <text><input type="radio" value = {item.option_b} name = "selection" onChange={this.RecordAnswer}/> b. {item.option_b}</text><br></br>
                  <text><input type="radio" value = {item.option_c} name = "selection" onChange={this.RecordAnswer}/> c. {item.option_c}</text><br></br>
                  <text><input type="radio" value = {item.option_d} name = "selection" onChange={this.RecordAnswer}/> d. {item.option_d}</text><br></br>
                  <br></br>
                  </div>
                  <br/>
                  <input type="submit" value="Submit" ></input>
                </form>
             )}
           </div>
           }
             {this.state.correct &&
               <p>
                 Correct Answer
               </p>
             }
      </div>
    );
  }
}
export default World;
