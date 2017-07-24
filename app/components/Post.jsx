import React from 'react';
import {Link} from 'react-router';
import uuid from 'node-uuid';

export class Post extends React.Component {
  render () {
    const {post, i, comments} = this.props;
    return (
      <div className="row">
        <div className="column">
          <div>{post.title}</div>
          <div>作者：{post.author}</div>
          <div>{post.date}</div>
          <div>
            <img src={post.photo_src} alt={post.title} />
          </div>
          <div>
          {post.text.split("\n\n").map(x => <p key={uuid()}>{x}</p>)}
          </div>
          <div>
            <button onClick={this.props.increment.bind(null, i)} className="button hollow">赞</button>
            <span>
              &#128150; {post.likes}
            </span>
            <span>
              &#128172; {comments[post.id] ? comments[post.id].length : 0}
            </span>
          </div>
        </div>
      </div>

    )
  }
};


export default Post;
