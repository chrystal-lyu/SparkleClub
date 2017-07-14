import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Post extends React.Component {
  render () {
    var {id, title, date, author, text} = this.props;
    return (
      <div>
        <div>
          <Link to={"/articles/" + id}>{title}</Link>
        </div>
        <div>{date}</div>
        <div>{author}</div>
        <div>{text.substring(0, 200)}...</div>
      </div>
    )
  }
};

export default Post;
