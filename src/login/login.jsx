class Login extends React.Component {
  render() {
    return (
      <div id="login" className="form-div__login d-none">
        <form>
          <FormHeader
            header={{
              title: "Login",
              imgUrl: "./assets/img/logo.png",
              alt: "Logo",
            }}
          />
          <div className="form-group">
            <InputLabel
              label={{
                name: "Email",
                imgUrl: "./assets/img/icons/icon_mail.png",
                imgAlt: "mail",
              }}
            />
            <input
              type="email"
              id="inputLoginEmail"
              name="loginEmail"
              onChange={this.props.input.valueChange}
              required
              value={this.props.input.emailValue}
              className="form-control"
              onFocus={this.props.input.inputFocus}
              onBlur={this.props.input.inputBlur}
            />
          </div>
          <div className="form-group">
            <InputLabel
              label={{
                name: "Password",
                imgUrl: "./assets/img/icons/icon_lock.png",
                imgAlt: "lock",
              }}
            />
            <input
              type="password"
              id="inputLoginPassword"
              name="loginPassword"
              onChange={this.props.input.valueChange}
              value={this.props.input.passValue}
              required
              className="form-control"
              onFocus={this.props.input.inputFocus}
              onBlur={this.props.input.inputBlur}
            />
          </div>
          <div className="button-group">
            <button id="loginBtnInForm" type="submit" name="login">
              login
            </button>
            <a href="#">Forgot?</a>
          </div>
        </form>
      </div>
    );
  }
}
