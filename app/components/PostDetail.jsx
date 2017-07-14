import React from 'react';

import jsonData from 'json-loader!../article/data.json';

export class PostDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articleId: "",
      posts: []
    }
  }

  componentWillMount() {
    this.setState({
      articleId: this.props.params.articleId,
      posts: jsonData.posts
    });
  }

  render () {
    var id = this.state.articleId;
    var {title, date, author, text, comments} = this.state.posts[this.state.articleId];
    var styles = {
    	color:'red',
    	fontWeight:'bold'
    };
    return (
      <div>
        Post Detail
        <p>This is article {id}</p>
        <div style={styles}>{title}</div>
        <div>{date}</div>
        <div>{author}</div>
        <p>{text}</p>
      </div>
    );
  };
};

export default PostDetail;
