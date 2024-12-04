import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <span className="title">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Email goes here..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password goes here..."
        />
      </form>
      <button className="registerButton">Register</button>
      <div className="loginContainer">
        <p className="loginPara">Already have an account</p>
        <Link to="/login" className="topbarLink">
          <button className="loginButton">LogIn</button>
        </Link>
      </div>
    </div>
  );
}
