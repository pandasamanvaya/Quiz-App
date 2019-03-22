import React, {
  Component
} from 'react';
import NewPerson from './NewPerson';
import Home from './Home';
import DeletePerson from './DeletePerson';
import ViewPeople from './ViewPeople';
import EditPerson from './EditPerson';
import UserInfo from './UserInfo';
import Login from './Login';
import QuizPage from './QuizPage';
import Sports from './Sports';
import Politics from './Politics';
import Cricket from './Cricket';
import Football from './Football';
import World from './World';
import India from './India';
import Admin from './Admin';
import User from './User';
import Quiz from './Quiz';
import EditSportsQuiz from './EditSportsQuiz';
import EditPoliticsQuiz from './EditPoliticsQuiz';
import EditQuiz from './EditQuiz';
import DeleteSports from './DeleteSports';
import DeleteQuiz from './DeleteQuiz';
import DeletePolitics from './DeletePolitics';
import AddSportsQuiz from './AddSportsQuiz';
import AddPolitics from './AddPolitics';
import AddQuiz from './AddQuiz';
import AdminLogin from './AdminLogin';
import LeaderBoard from './LeaderBoard';
import SportsLeaderBoard from './SportsLeaderBoard';
import PoliticsLeaderBoard from './PoliticsLeaderBoard';
import OverallLeaderBoard from './OverallLeaderBoard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>Quiz App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/AdminLogin'}>Admin</Link></li>
                  <li><Link to={'/LeaderBoard'}>LeaderBoard</Link></li>
                  <li>
                    <Link to={'/UserInfo'}>User Information</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route exact="exact" path='/' component={Home}/>
              <Route exact="exact" path='/Admin/User' component={User}/>

              <Route exact="exact" path='/Admin' component={Admin}/>
              <Route exact="exact" path='/NewPerson' component={NewPerson}/>
              <Route exact="exact" path='/AdminLogin' component={AdminLogin}/>

              <Route exact="exact" path='/Login' component={Login}/>
              <Route exact="exact" path='/LeaderBoard' component={LeaderBoard}/>
              <Route exact="exact" path='/LeaderBoard/Sports' component={SportsLeaderBoard}/>
              <Route exact="exact" path='/LeaderBoard/Politics' component={PoliticsLeaderBoard}/>
              <Route exact="exact" path='/LeaderBoard/Overall' component={OverallLeaderBoard}/>

              <Route exact="exact" path='/EditPerson' component={EditPerson}/>
              <Route exact="exact" path='/UserInfo' component={UserInfo}/>

              <Route exact="exact" path='/DeletePerson' component={DeletePerson}/>
              <Route exact="exact" path='/ViewPeople' component={ViewPeople}/>
              <Route exact="exact" path='/QuizPage' component={QuizPage}/>
              <Route exact="exact" path='/Admin/Quiz' component={Quiz}/>
              <Route exact="exact" path='/Admin/Quiz/EditSportsQuiz' component={EditSportsQuiz}/>
              <Route exact="exact" path='/Admin/Quiz/EditPoliticsQuiz' component={EditPoliticsQuiz}/>

              <Route exact="exact" path='/Admin/Quiz/DeletePolitics' component={DeletePolitics}/>
              <Route exact="exact" path='/Admin/Quiz/DeleteSport' component={DeleteSports}/>
              <Route exact="exact" path='/Admin/Quiz/DeleteQuiz' component={DeleteQuiz}/>
              <Route exact="exact" path='/Admin/Quiz/AddSportsQuiz' component={AddSportsQuiz}/>
              <Route exact="exact" path='/Admin/Quiz/AddPolitics' component={AddPolitics}/>

              <Route exact="exact" path='/Admin/Quiz/AddQuiz' component={AddQuiz}/>
              <Route exact="exact" path='/Admin/Quiz/EditQuiz' component={EditQuiz}/>
              <Route exact="exact" path='/QuizPage/Sports' component={Sports}/>
              <Route exact="exact" path='/QuizPage/Sports/Cricket' component={Cricket}/>
              <Route exact="exact" path='/QuizPage/Sports/Football' component={Football}/>
              <Route exact="exact" path='/QuizPage/Politics' component={Politics}/>
              <Route exact="exact" path='/QuizPage/Politics/World' component={World}/>
              <Route exact="exact" path='/QuizPage/Politics/India' component={India}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
