import "./login.scss"
import logo from "../../assets/GSCornerlogo.png"


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
                <span>Are you new here ? <b>Sign up now.</b></span>
            </form>
        </div>

    </div>
  )
}
