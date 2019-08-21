import React, { Component, Fragment } from "react";
import Comments from "../../components/comments";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(this.props.user, this.props.match.params.postId);
  }

  render() {
    const { postId } = this.props.match.params;

    return (
      <Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
          <img src={this.props.post.media.path} alt='' className='w-25' />
        </div>
        <Comments contentId={postId} />
      </Fragment>
    );
  }
}

export default Post;