import React from 'react';
import {connect} from 'react-redux';
import Comment from 'Comment';
import * as actions from 'actions';
// var store = require('configStore').configure();

export class CommentList extends React.Component{
  render () {
    var {comments} = this.props;
    var renderComments = () => {
      if (comments.length > 0) {
        return comments.map((comment) => {
          return (
            <Comment key={comment.commentId} {...comment}/>
          );
        })
      } else {
        return (
          <div>
            快来抢沙发
          </div>
        )
      }
    };

    return (
      <div>
        {renderComments()}
      </div>
    )
  }
};

export default CommentList;
