import React from 'react';
import {connect} from 'react-redux';
import Comment from 'Comment';
// var store = require('configStore').configure();

export class CommentList extends React.Component{
  render () {
    const i = this.props.params.postId;
    return (
      <div>
        {this.props.comments[i].map((comment)=>
          <Comment {...this.props} key={i} i={i} comment={comment}/>)}
      </div>
    )
  }
};

export default CommentList;
