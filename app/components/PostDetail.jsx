import React from 'react';
import uuid from 'node-uuid';
import moment from 'node-moment';

import firebase, {firebaseRef} from 'app/firebase/';
import Post from 'Post';

export class PostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        posts: [],
        comments: []
    };
  }

  componentDidMount() {
    this.props.startFetchPosts().then(
      this.setState({
        posts: this.props.posts
      })
    );

    this.props.startFetchComments().then(
      this.setState({
        posts: this.props.comments
      })
    );
  }

  renderComment(comment, i) {
    const renderDate = () => {
      if(typeof(comment.date) === 'string') {
        return comment.date
      } else {
        return moment.unix(comment.date).format('MMM Do YYYY @ h:mm a')
      }
    };
    return (
      <div className="callout" key={uuid()}>
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
        <div>
          {postComments.map(this.renderComment.bind(this))}
        </div>
        <div>
          <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
            <textarea rows="5" type="text" ref="comment" placeholder = "comment"/>
            <button className="button" type="submit">发表</button>
          </form>
        </div>
      </div>
    );
  };
};

export default PostDetail;
