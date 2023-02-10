import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Footer,
  Services,
  Features,
  Whatpm,
  Header,
  Slider,
  Questions,
  Registration,
} from "./containers";
import { Navbar } from "./components";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Services />
          <Whatpm />
          <Features />
          <Slider />
          <div className="questions__div">
            <Questions />
          </div>
          <Footer />
        </div>
      </Route>
      <Route path="/sign-up">
        <Registration />
      </Route>
    </Switch>
  </Router>
);

export default App;
