import React from 'react';

export class Register extends React.Component {
  render() {
    return (
      <div className="register-container small-10 medium-8 large-6">
        <h1>注册</h1>
        <form>
          <div className="form-item">
            <label htmlFor="name">姓名</label>
            <input id="name" type="text" placeholder="黄小明" name="name"/>
          </div>
          <div className="form-item">
            <label htmlFor="email">邮箱</label>
            <input id="email" type="email" placeholder="xiaoming@183.com" name="email"/>
          </div>
          <div className="form-item">
            <label htmlFor="pw">密码</label>
            <input id="pw" type="password" name="password"/>
          </div>
          <div className="form-item">
            <label htmlFor="pw2">确认密码</label>
            <input id="pw2" type="password" name="confirmPassword"/>
          </div>
          <div className="button button-register">
            <button>注册</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;
