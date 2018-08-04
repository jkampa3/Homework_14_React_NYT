import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar/NavBar";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import NoMatch from "./pages/NoMatch/NoMatch";


const App = () =>
//add routes below
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved/" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
