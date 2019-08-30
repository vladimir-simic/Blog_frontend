import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date";
import "./posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='posts'>
        <ul>
         {posts.map((post, id) => (
          <li>
            <Link key={id} style={{textDecoration: 'none'}} 
                  to={`/posts/${post.id}`}><strong>{post.title}</strong>
            </Link>  --- Author: {post.author} ({formatDate(post.created_at)})
            
          </li>
         ))}
        </ul>
      </div>
    );
  }
}

export default Posts;