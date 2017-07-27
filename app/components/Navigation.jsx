import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Navigation extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
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
          <ul className="menu">
            <li className="menu-text">
              <Link to="/register" activeClassName="active-link">注册</Link>
            </li>
            <li className="menu-text">
              <Link to="/login" activeClassName="active-link">登陆</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};

export default Navigation;
