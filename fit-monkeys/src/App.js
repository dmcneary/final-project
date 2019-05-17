import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/";
import Dashboard from "./pages/Dashboard/";
import Challenges from "./pages/Challenges/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer"
import AllActivities from "./pages/AllActivities";
import NewActivity from "./pages/NewActivity";
import ActivityDetail from "./pages/ActivityDetail";
// import Challenges from "./pages/Challenges";
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/Landing";
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          user: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    console.log('AllActivities', AllActivities)
    console.log('Landing', Landing)
    return (
      <Router>
        {//conditional routing here: logged in or nah
        }
        <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/all-activities" component={AllActivities} />
            <Route exact path="/activities/:id" component={ActivityDetail} />
            <Route exact path="/newactivity" component={NewActivity} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/" component={AllActivities} /> */}
            {/* <Route exact path="/activities/:id" component={ActivityDetail} /> */}
            {/* <Route exact path="/newactivity" component={NewActivity} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            {//<Route component={NoMatch} />
            }
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
