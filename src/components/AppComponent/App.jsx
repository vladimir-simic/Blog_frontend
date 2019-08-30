import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../../pages/home";
import User from "../../pages/user";
import Registration from "../../pages/registration";
import Login from "../../pages/login";
import Navigation from "../navigation/navigation";
import Post from "../../pages/post";
import AddPost from "../../pages/addPost";
import Photography from "../../pages/photography";
import Team from "../../pages/team/team";
import AddComment from "../../components/comments/addComment";

const App = ({ user, logout }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} logout={logout} />
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />

          <Route path='/' component={Home} exact />
          <Route path='/users/self' component={User} />
          <Route path='/posts/:postId' component={Post} />
          <Route path='/addPost' component={AddPost} />
          <Route path='/photography' component={Photography} />
          <Route path='/team' component={Team} />
          <Route path='/posts/:commentId/comments' component={AddComment} />
          <Route path='/users/' component={() => {}} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;