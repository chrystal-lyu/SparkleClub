import React from 'react';

export class Comment extends React.Component {
  renderComment(comment, i) {
    return (
      <div>
        <div>
          <strong>{comment.user}</strong>
        </div>
        <div>
          {comment.text}
        </div>
        <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render () {
    const {comment, i} = this.props;
    return (
      <div>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder = "author"/>
          <input type="text" ref="comment" placeholder = "comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
};

export default Comment;
