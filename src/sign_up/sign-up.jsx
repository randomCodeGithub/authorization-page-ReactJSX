class SignUp extends React.Component {
  render() {
    return (
      <div id="signUp" className="form-div__sign-up">
        <form>
          <FormHeader
            header={{
              title: "Sign Up",
              imgUrl: "./assets/img/logo.png",
              alt: "Logo",
            }}
          />

          <div className="form-group">
            <InputLabel
              label={{
                name: "Name",
                imgUrl: "./assets/img/icons/icon_user.png",
                imgAlt: "user",
              }}
            />
            <input
              type="text"
              id="inputSignupName"
              name="name"
              onChange={this.props.input.valueChange}
              value={this.props.input.nameValue}
              required
              minLength="2"
              className="form-control"
              onFocus={this.props.input.inputFocus}
              onBlur={this.props.input.inputBlur}
            />
          </div>

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
              id="inputSignupEmail"
              name="email"
              onChange={this.props.input.valueChange}
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
              id="inputSignUpPassword"
              name="password"
              onChange={this.props.input.valueChange}
              value={this.props.input.passValue}
              required
              minLength="6"
              className="form-control"
              onFocus={this.props.input.inputFocus}
              onBlur={this.props.input.inputBlur}
            />
          </div>

          <div className="text-center">
            <button id="signUpBtnInForm" type="submit" name="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
