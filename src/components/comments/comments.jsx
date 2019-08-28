import React, { Component } from "react";
// import { formatDate } from "../../util/date";
import AddComment from "./addComment";

class Comments extends Component {
  componentDidMount() {
    this.props.getCommentsByContentId(this.props.user, this.props.contentId);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.text.length < 10) {
      console.log("Min length 10 char");
      return;
    }

    this.props.addComment(this.props.user, this.props.contentId, this.state);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map(item => {
            const dateObj = new Date(item.created_at);
            const date = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
            return (
              <li key={item._id}>
                {item.author} {date} : {item.message}
              </li>
            );
          })}
        </ul>
        <AddComment onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Comments;