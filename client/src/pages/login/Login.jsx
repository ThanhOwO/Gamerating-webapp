import "./login.scss"
import logo from "../../assets/GSCornerlogo.png"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">  
        <div className="top">
            <div className="wrapper">

            <img className="logo" src={logo} alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or Username"/>
                <input type="password" placeholder="Password"/>
                <button className="loginButton">Sign In</button>
                <span>Are you new here ?
                <Link className="link" to="/register">
                  <b>Sign up now.</b>
                </Link>
                 </span>
            </form>
        </div>

    </div>
  )
}
