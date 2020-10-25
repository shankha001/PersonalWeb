import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <div className="app_container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
