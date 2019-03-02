import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/about";
import Contact from "./components/contactme";
import Projects from "./components/projects";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Landing />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
