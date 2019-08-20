import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
