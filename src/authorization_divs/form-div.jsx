class FormDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      loginEmail: "",
      loginPassword: "",
      name: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFocus(event) {
    const label = event.target.parentNode.querySelector("label");
    const img = event.target.parentNode.querySelector("img");
    const imgUrl = img.src;
    img.src = imgUrl.replace(".png", "_active.png");
    label.style.fontWeight = "bold";
    label.style.textTransform = "uppercase";
  }

  handleBlur(event) {
    const label = event.target.parentNode.querySelector("label");
    const img = event.target.parentNode.querySelector("img");
    const imgUrl = img.src;
    img.src = imgUrl.replace("_active", "");
    label.style.fontWeight = "normal";
    label.style.textTransform = "capitalize";
  }

  render() {
    return (
      <div id="formDiv" className="form-div col-50 col-resp-100">
        <Login
          input={{
            inputFocus: this.handleFocus,
            inputBlur: this.handleBlur,
            valueChange: this.handleChange,
            emailValue: this.state.loginEmail,
            passValue: this.state.emailValue,
          }}
        />
        <SignUp
          input={{
            inputFocus: this.handleFocus,
            inputBlur: this.handleBlur,
            valueChange: this.handleChange,
            nameValue: this.state.name,
            emailValue: this.state.email,
            passValue: this.state.password,
          }}
        />
        <div className="border-top"></div>
        <div className="border-middle"></div>
        <div className="border-bottom"></div>
      </div>
    );
  }
}
