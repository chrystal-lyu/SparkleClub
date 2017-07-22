import React from 'react';
import moment from 'node-moment';

export class Comment extends React.Component {
  renderComment(comment, i) {
    const renderDate = () => {
      if(typeof(comment.date) === 'string') {
        return comment.date
      } else {
        return moment.unix(comment.date).format('MMM Do YYYY @ h:mm a')
        // return moment.unix(comment.date).format('MMM Do YYYY @ h:mm a');
      }
    };
    return (
      <div className="callout">
        <div>
          <strong>{comment.user}</strong>
        </div>
        <div>
          {renderDate()}
        </div>
        <div>
          {comment.text}
        </div>
        <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.params;
    // const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // if (author.length === 0) {
    //   alert('请输入名字');
    // } else if(comment.length === 0) {
    //   alert('请输入评论');
    // } else if(author.length > 0 && comment.length > 0) {
    //   this.props.addComment(postId, comment);
    //   this.refs.commentForm.reset();
    // }
    this.props.startAddComment(postId, comment);
    this.refs.commentForm.reset();
  }

  render () {
    const {comment, i} = this.props;
    return (
      <div>
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          {/*<input type="text" ref="author" placeholder = "author"/>*/}
          <textarea rows="5" type="text" ref="comment" placeholder = "comment"/>
          <button className="button" type="submit">发表</button>
        </form>
        {this.props.postComments.map(this.renderComment.bind(this))}
      </div>
    )
  }
};

export default Comment;
