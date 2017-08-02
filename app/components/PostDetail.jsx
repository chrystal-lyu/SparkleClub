import React from 'react';
import uuid from 'node-uuid';
import moment from 'node-moment';

import firebase, {firebaseRef} from 'app/firebase/';
import Post from 'Post';

export class PostDetail extends React.Component {
  _renderComment(comment, i) {
    const renderDate = () => {
      if(typeof(comment.date) === 'string') {
        return comment.date
      } else {
        return moment.unix(comment.date).format('MMM Do YYYY @ h:mm a')
      }
    };

    return (
      <div className="comment-single" key={comment.id}>
          <button className="comment-single-close" onClick={this.props.startRemoveComment.bind(null, this.props.params.postId, comment.id, i)}></button>
        <div className="comment-single-text">
          <div>
            <strong>{comment.user}</strong>
          </div>
          <div>
            {renderDate()}
          </div>
          <div>
            {comment.text}
          </div>
        </div>
      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.params;
    const comment = this.refs.comment.value;
    if (comment.length > 0) {
      this.props.startAddComment(postId, comment);
      this.props.startFetchComments();
      this.refs.commentForm.reset();
    } else {
      alert ('请输入评论')
    }
  }

  render () {
    const i = this.props.posts.findIndex((post) => post.id === this.props.params.postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[i] || [];
    return (
      <div>{post ? <Post i={i} post={post} key={i} {...this.props}/> : "正在加载"}
        <div className="comment-area">
          <div className="comment-box">
            <form ref="commentForm" onSubmit={this._handleSubmit.bind(this)}>
              <textarea rows="5" type="text" ref="comment" placeholder = "请输入评论"/>
              <button className="button button-comment" type="submit">发表</button>
            </form>
          </div>
          <div className="comment-list">
            {postComments.map(this._renderComment.bind(this))}
          </div>
        </div>
      </div>
    );
  };
};

export default PostDetail;
