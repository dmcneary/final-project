import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing";
import './App.css';

console.log(Landing);
console.log(Signup);
const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
