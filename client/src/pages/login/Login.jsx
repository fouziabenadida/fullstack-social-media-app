import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Breaking Bad</h3>
          <span className="loginDesc">
            A person who never made a mistake never tried anything new. {""}
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterBtn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
