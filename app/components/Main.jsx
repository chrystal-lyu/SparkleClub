import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Navigation from 'Navigation';
import * as actions from 'actions';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
          <div className="row">
            <div className="column">
              {React.cloneElement(this.props.children, this.props)}
            </div>
          </div>
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
