import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="title">Login</span>
      <form className="loginForm">
        <label>Username or Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Username or Email goes here..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Password goes here..."
        />
      </form>
      <button className="loginButton">LogIn</button>
      <div className="registerContainer">
        <p className="registerPara">Don't have an account</p>
        <Link to="/register" className="topbarLink">
          <button className="registerButton">Register</button>
        </Link>
      </div>
    </div>
  );
}
