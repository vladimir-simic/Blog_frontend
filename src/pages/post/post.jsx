import React, { Component } from "react";
import Comments from "../../components/comments";
import { formatDate } from "../../util/date";
import Logo from "../../components/logo/logo";
import "./post.css";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(/*this.props.user, */this.props.match.params.postId);
  }

  render() {
    const { postId } = this.props.match.params;
    const { post } = this.props;
    
    return (
      <div>
        <Logo />
        <div className="blog-post">
          <div>
            <h3 className="title">{post.title}</h3>
            <p className="content">{post.content}</p>
            <h4 className="author-date"><em>{post.author}, {formatDate(post.created_at)}</em></h4>
          </div>
          <Comments contentId={postId} />
        </div>
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