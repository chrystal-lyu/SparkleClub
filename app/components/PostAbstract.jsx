import React from 'react';
import {Link} from 'react-router';

export class Post extends React.Component {
  render () {
    const {post, i, comments} = this.props;
    return (
      <div className="row">
        <div className="column">
          <Link to={`/articles/${post.id}`}>
            {post.title}
          </Link>
          <div>{post.author}</div>
          <div>{post.date}</div>
          <div>{post.text.substring(0, 200)}...<Link to={`/articles/${post.id}`}>阅读全文</Link></div>
          <div>
            <button onClick={this.props.increment.bind(null, i)} className="button small">&hearts; {post.likes}</button>
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
