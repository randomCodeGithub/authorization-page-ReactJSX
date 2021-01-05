class SignUpDiv extends React.Component {
  handleClick() {
    const formDiv = document.getElementById("formDiv");
    const login = document.getElementById("login");
    const signUp = document.getElementById("signUp");

    let pos = window.innerWidth >= 992 ? 50 : 48;
    let signUpPos = 40;
    let loginPos = 0;
    let signUpOpacity = 1;
    let loginOpacity = 0;
    let timer = setInterval(frame, 1);
    let signUpTimer = setInterval(signUpFrame, 1);
    let loginTimer = setInterval(loginFrame, 1);

    function frame() {
      if (window.innerWidth >= 992 ? pos == 2 : pos == 0) {
        clearInterval(timer);
      } else {
        pos -= 8;
        if (window.innerWidth >= 992) formDiv.style.left = pos + "%";
        else formDiv.style.top = pos + "%";
      }
    }

    function signUpFrame() {
      if (loginPos < -20) {
        if (signUpPos == 0) {
          clearInterval(signUpTimer);
        } else {
          signUpPos--;
          signUpOpacity += 0.1;
          if (window.innerWidth >= 992)
            signUp.style.transform = "translateX(" + signUpPos + "px)";
          else signUp.style.transform = "translateY(" + signUpPos + "px)";

          signUp.style.opacity = signUpOpacity;
        }
      }
    }

    function loginFrame() {
      if (loginPos == -30) {
        clearInterval(loginTimer);
        if (loginOpacity <= 0) {
          login.style.display = "none";
        }
      } else {
        loginPos--;
        loginOpacity -= 0.025;
        if (window.innerWidth >= 992)
          login.style.transform = "translateX(" + loginPos + "px)";
        else login.style.transform = "translateY(" + loginPos + "px)";

        login.style.opacity = loginOpacity;
        signUp.style.display = "block";
      }
    }
  }
  render() {
    return (
      <div id="signUpDiv" className="col-50 col-resp-100 authorization__col-50">
        <h2>Don't have an account?</h2>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit, sed do <br />
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
        <button onClick={this.handleClick} type="button" id="signUpBtn">
          Sign Up
        </button>
      </div>
    );
  }
}
