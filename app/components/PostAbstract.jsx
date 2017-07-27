import React from 'react';
import {Link} from 'react-router';

export class Post extends React.Component {
  render () {
    const {post, i, comments} = this.props;
    return (
      <div className="row ">
        <div className="column small-centered small-10 medium-6 large-4 post-abstract-column">
          <div className="post-abstract-left">
            <img src={post.photo_src} alt={post.title} />
          </div>
          <div className="post-abstract-right">
            <Link className="post-abstract-item post-abstract-title" to={`/articles/${post.id}`}>
              {post.title}
            </Link>
            <div className="post-abstract-item" >{post.text.substring(0, 200)}...<Link className="post-abstract-readall" to={`/articles/${post.id}`}>阅读全文</Link></div>
            <div className="post-abstract-item" >作者：{post.author} {post.date}</div>
            <div className="post-abstract-item" >
              <button onClick={this.props.startIncrement.bind(null, i)} className="button button-like">赞</button>

              <span className="post-abstract-likes">
                &#128150; {post.likes}
              </span>
              <span>
                &#128172; {comments[post.id] ? comments[post.id].length : 0}
              </span>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
};


export default Post;
