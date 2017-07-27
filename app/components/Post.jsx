import React from 'react';
import {Link} from 'react-router';
import uuid from 'node-uuid';

export class Post extends React.Component {
  render () {
    const {post, i, comments} = this.props;
    const currentPostComments = comments[parseInt(post.id)];

    return (
      <div className="content">
        <div className="post-single">
          <div className="post-abstract-title">{post.title}</div>
          <div>作者：{post.author}</div>
          <div>{post.date}</div>
          <div>
            <img src={post.photo_src} alt={post.title} />
          </div>
          <div>
          {post.text.split("\n\n").map(x => <p key={uuid()}>{x}</p>)}
          </div>
          <div className="post-abstract-item" >
            <button onClick={this.props.startIncrement.bind(null, i)} className="button-like">
              &hearts;
              <span className="post-abstract-likes">赞({post.likes})</span>
            </button>
            <span>
              评论({comments[post.id] ? comments[post.id].length : 0})
            </span>
          </div>
        </div>
      </div>
    )
  }
};


export default Post;
