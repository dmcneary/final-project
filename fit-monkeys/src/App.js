import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AllActivities from "./pages/AllActivities";
import NewActivity from "./pages/NewActivity";
import ActivityDetail from "./pages/ActivityDetail";
import Challenges from "./pages/Challenges";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
=======
import Landing from "./pages/Landing/";
import Dashboard from "./pages/Dashboard/";
import AllActivities from "./pages/AllActivities/AllActivities.js";
import ActivityDetail from "./pages/ActivityDetail/";
import NewActivity from "./pages/NewActivity/";
import Challenges from "./pages/Challenges/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
>>>>>>> 5cd432cc09d295880acc98ca452915fa50f6dbb1
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/Landing";
import './App.css';

<<<<<<< HEAD
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

  updateUser (userObject) {
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

  render () {
    return (
      <Router>
      {//conditional routing here: logged in or nah
      }
      <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
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
          {//<Route component={NoMatch} />
          }
        </Switch>
      </div>
      <Footer />
    </Router>
    );
  }
=======
const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/all-activities" component={AllActivities} />
        {/* <Route exact path="/" component={AllActivities} /> */}
        {/* <Route exact path="/activities/:id" component={ActivityDetail} /> */}
        {/* <Route exact path="/newactivity" component={NewActivity} /> */}
        <Route exact path="/challenges" component={Challenges} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
>>>>>>> 5cd432cc09d295880acc98ca452915fa50f6dbb1
}

export default App;
