import React from 'react';
import {Link, IndexLink} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from 'actions';
import store from 'configStore';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.startLogout();
  }

  render () {
    const renderLogin = () => {
      if(store.getState().auth.isUserLoggedIn) {
        return (
          <ul className="menu">
            <li className="menu-text">
              <Link to="/register" activeClassName="active-link">注册</Link>
            </li>
            <li>
              <div className="button-logout">
                <a href="#" onClick={this.onLogout}>Logout</a>
              </div>
            </li>
            <li>
              <div className="menu-text">Hello, {store.getState().auth.userName}</div>
            </li>
          </ul>
        )
      } else {
        return (
          <ul className="menu">
            <li className="menu-text">
              <Link to="/register" activeClassName="active-link">注册</Link>
            </li>
            <li className="menu-text">
              <Link to="/login" activeClassName="active-link">登陆</Link>
            </li>
          </ul>
        )
      }
    }

    return (
      <div>
        <div className="top-bar" id="main-nav">
          <div className="top-bar-left">
            <ul className="dropdown menu">
              <li>
                <img src="http://jiangtianzheng.com/wp-content/uploads/2017/06/big-icon.jpg" width="120px"/>
              </li>
              <li className="menu-text">
                火花社 x 全职高手
              </li>
              <li className="menu-text">
                <IndexLink to="/articles" activeClassName="active-link">博文</IndexLink>
              </li>
              <li className="menu-text">
                <Link to="/about" activeClassName="active-link">关于</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            {renderLogin()}
          </div>
        </div>
      </div>
    );
  };
};

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStatetoProps, mapDispatchToProps)(Navigation);
