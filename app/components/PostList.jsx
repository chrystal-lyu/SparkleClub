import React from 'react';

import PostAbstract from 'PostAbstract';

export class PostList extends React.Component {
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

  render () {
    return (
      <div>
        {this.props.posts.map((post, i) =>
          <PostAbstract {...this.props} key={i} i={i} post={post}/>)}
      </div>
    )
  }
};

export default PostList;
