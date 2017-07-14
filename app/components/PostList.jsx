import React from 'react';
import Post from 'Post';

export class PostList extends React.Component {
  render () {
    var {posts} = this.props;
    var renderPosts = () => {
      return posts.map((post) => {
        return (
          <Post key={post.id} {...post}/>
        );
      })
    }

    return (
      <div>
        {renderPosts()}
      </div>
    )
  }
};

export default PostList;
