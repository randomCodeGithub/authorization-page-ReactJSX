class LoginDiv extends React.Component {
  handleClick() {
    const login = document.getElementById("login");
    const signUp = document.getElementById("signUp");
    const formDiv = document.getElementById("formDiv");
    
    let pos = 0;
    let signUpPos = 0;
    let loginPos = -40;
    let signUpOpacity = 1;
    let loginOpacity = 0;
    let timer = setInterval(frame, 1);
    let signUpTimer = setInterval(signUpFrame, 1);
    let loginTimer = setInterval(loginFrame, 1);

    function frame() {
      if (pos == 48) {
        clearInterval(timer);
      } else {
        pos += 8;
        if (window.innerWidth >= 992) {
          formDiv.style.left = pos + "%";
        } else {
          formDiv.style.top = pos + "%";
          formDiv.style.height = "53%";
        }
      }
    }

    function signUpFrame() {
      if (signUpPos == 50) {
        clearInterval(signUpTimer);
        if (signUpOpacity <= 0) {
          signUp.style.display = "none";
        }
      } else {
        signUpPos++;
        signUpOpacity -= 0.1;

        if (window.innerWidth >= 992)
          signUp.style.transform = "translateX(" + signUpPos + "px)";
        else signUp.style.transform = "translateY(" + signUpPos + "px)";

        signUp.style.opacity = signUpOpacity;
        login.style.display = "block";
      }
    }

    function loginFrame() {
      if (signUpPos > 30) {
        if (loginPos == 0) {
          clearInterval(loginTimer);
        } else {
          loginPos++;
          loginOpacity += 0.1;
          if (window.innerWidth >= 992)
            login.style.transform = "translateX(" + loginPos + "px)";
          else login.style.transform = "translateY(" + loginPos + "px)";

          login.style.opacity = loginOpacity;
        }
      }
    }
  }

  render() {
    return (
      <div id="logDiv" className="col-50 col-resp-100 authorization__col-50">
        <h2>Have an account?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button onClick={() => this.handleClick()}>Login</button>
      </div>
    );
  }
}
