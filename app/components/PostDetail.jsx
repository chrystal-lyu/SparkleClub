import React from 'react';

import Post from 'Post';
import Comment from 'Comment';

export class PostDetail extends React.Component {
  render () {
    // const i = this.props.posts.findIndex((post) => post.id === this.props.params.postId);
    const i = this.props.params.postId;
    const post = this.props.posts[i];
    const postComments = this.props.comments[i] || [];
    return (
      <div>
        <Post i={i} post={post} {...this.props}/>
        <Comment postComments={postComments} {...this.props}/>
      </div>
    );
  };
};

export default PostDetail;
