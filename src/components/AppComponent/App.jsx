import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../../pages/home";
import User from "../../pages/user";
import Registration from "../../pages/registration";
import Login from "../../pages/login";
import NotificationSystem from "../notification.component";
import Navigation from "../navigation";
import PrivateRoute from "../PrivateRoute";
import Post from "../../pages/post";
import AddPost from "../../pages/addPost";
import Image from "../../components/Image/image";

const App = ({ user, logout }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} logout={logout} />
        <Image />
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />

          <PrivateRoute path='/' component={Home} exact />
          <PrivateRoute path='/users/self' component={User} />

          <PrivateRoute path='/posts/:postId' component={Post} />
          <PrivateRoute path='/addPost' component={AddPost} />
          <PrivateRoute path='/about/' component={() => {}} />
          <PrivateRoute path='/users/' component={() => {}} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;