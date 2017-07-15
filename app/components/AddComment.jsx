import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddComment extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var commentText = this.refs.commentText.value;

    if (commentText.length > 0) {
      this.refs.commentText.value = '';
      console.log('Comment ADDED: ', commentText);
    } else {
      this.refs.commentText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea rows="4" cols="50" type="text" ref="commentText"/>
          <button className="button">发表评论</button>
        </form>
      </div>
    );
  }
};

export default AddComment;
