import "./register.css";
export default function Register() {
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
            <input className="loginInput" placeholder="Username" type="text" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <button className="loginBtn">Sign Up</button>

            <button className="loginRegisterBtn">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
