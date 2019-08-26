import React, { Component, Fragment } from "react";
import Comments from "../../components/comments";
// import Spinner from "../../components/Spinner";
import "./post.css";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(/*this.props.user, */this.props.match.params.postId);
  }

  render() {
    const { postId } = this.props.match.params;
    const { post } = this.props;
    
    return (
      <div className="myblog-post">
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* <img src={this.props.post.media.path} alt='' className='w-25' /> */}
        </div>
        <Comments contentId={postId} />
      </div>
      // <Fragment>
      
      //   <h3>Post 1</h3>
      //   {/* <img src={this.props.post.media.path} alt='' className='w-25' /> */}
      
      // <Comments contentId={postId} />
      // </Fragment>
    );
  }
}

export default Post;