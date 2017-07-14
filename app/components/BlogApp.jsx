import React from 'react';

import jsonData from 'json-loader!../article/data.json';
import PostList from 'PostList';

export class BlogApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: jsonData.posts
    };
  }

  render () {
    var {posts}=this.state;
    return (
      <div>
        <h3 className="page-title">文章</h3>
        <PostList posts = {posts}/>
      </div>
    )
  };
};

export default BlogApp;
