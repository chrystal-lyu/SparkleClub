import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Navigation from 'Navigation';
import * as actions from 'actions';

export class Main extends React.Component {
  componentDidMount() {
    this.props.startFetchPosts();
    this.props.startFetchComments();
  }

  render() {
    return (
      <div>
        <div className="nav">
          <Navigation/>
        </div>
        <div className="row">
          <div className="column small-12 medium-12 large-12">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
        <footer>
          <div>
            Created by <strong className="highlighted-text">Crystal Lu</strong>
          </div>
        </footer>
      </div>
    )
  }
};

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStatetoProps, mapDispatchToProps)(Main);
