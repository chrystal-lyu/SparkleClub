import React from 'react';
import {hashHistory} from 'react-router';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    this.props.startLogin();
  }

  render() {
    return (
      <div className="login-container small-10 medium-8 large-6">
        <h1>登陆</h1>
        <form>
          <div className="form-item">
            <label htmlFor="email">邮箱</label>
            <input type="text" id="email" placeholder="邮箱" name="email"/>
          </div>
          <div className="form-item">
            <label htmlFor="password">密码</label>
            <input type="password" id="password" placeholder="密码" name="password"/>
          </div>
          <div className="button button-login">
            <button type="submit">登陆</button>
          </div>
        </form>
        <div className="form-item callout callout-auth">
          <p>Login with Google account below.</p>
          <button className="button" onClick={this.onLogin}>Login With Google</button>
        </div>
        <div className="form-item login-message"><a href="/#/register">还没有帐户？</a></div>
      </div>
    )
  }
}

export default Login;
