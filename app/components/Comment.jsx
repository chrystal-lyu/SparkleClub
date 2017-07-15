import React from 'react';

export class Comment extends React.Component {
  render () {
    var {commentId, commentDate, commentAuthor, commentText} = this.props;
    return (
      <div>
        <div>{commentDate}</div>
        <div>{commentAuthor}</div>
        <div>{commentText}</div>
      </div>
    )
  }
};

export default Comment;
