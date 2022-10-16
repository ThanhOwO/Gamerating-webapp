import "./register.scss"
import logo from "../../assets/GSCornerlogo.png"
import { useRef, useState } from "react"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
      setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
      setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">  
        <div className="top">
            <div className="wrapper">

            <img className="logo" src={logo} alt="" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>GS Corner</h1>
            <h2>Freely evaluate and experience games</h2>
            <p>Ready to join? Enter your email.</p> {
              !email ? (

              <div className="input">
                  <input type="email" placeholder="Email address" ref={emailRef}/>
                  <button className="registerButton" onClick={handleStart}>Register Now</button>
              </div>
              ) : (
                <form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
              )
            }
        </div>
    </div>
  )
}
