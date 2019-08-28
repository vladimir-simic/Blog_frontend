import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date";
import "./posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(/* this.props.user */);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='posts'>
        <ul>
         {posts.map((post) => (
          <li>
            <Link style={{textDecoration: 'none'}} 
                  to={`/posts/${post.id}`}><strong>{console.log(post.title)}</strong> --- Author: {post.author}
            </Link> ({formatDate(post.created_at)})
            
          </li>
         ))}
        </ul>
      </div>
    );
  }
}

export default Posts;

// {/* <li>
//               <Link to={`/posts/`}>
//                 <div className='title'>Post</div>
//                 {/* <img src={item.media.path} alt='' className='w-25' /> */}
//                 </Link>
//               // </li> */}

// {posts.map(item => (
//   <li key={item._id}>
//     <Link to={`/posts/${item._id}`}>
//       <div className='title'>{item.title}</div>
//       {/* <img src={item.media.path} alt='' className='w-25' /> */}
//     </Link>
//   </li>
// ))}