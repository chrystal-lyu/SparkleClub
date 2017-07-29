import React from 'react';

import PostAbstract from 'PostAbstract';

export class PostList extends React.Component {
  render () {
    return (
      <div className="content">
        {this.props.posts.map((post, i) =>
          <PostAbstract {...this.props} key={i} i={i} post={post}/>)}
      </div>
    )
  }
};

export default PostList;
