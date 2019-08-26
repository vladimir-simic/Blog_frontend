import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import getPostsList from "./getPostsList";
import getPostList from "./getPostList";
import comments from "./comments";
import user from "./user";
import addPost from "./addPost";

const rootReducer = combineReducers({
  notifications,
  isRegistered,
  user,
  getPostsList,
  getPostList,
  comments,
  addPost
});

export default rootReducer;