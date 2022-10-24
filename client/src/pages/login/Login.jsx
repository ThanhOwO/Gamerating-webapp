import "./login.scss"
import logo from "../../assets/GSCornerlogo.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button'
import { login } from "../../authContext/apiCalls"
import { AuthContext } from "../../authContext/AuthContext"
import AlertMessage from '../../components/layout/AlerMessage'

export default function Login() {

  const [alert, setAlert] = useState(null)

  const toggleAlert = () => {
    setAlert({type: 'danger', message: 'Incorrect email or password!'})
    setTimeout(() => setAlert(null), 5000)
  }
  
  const {dispatch} = useContext(AuthContext)

   // Local state
   const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
})
 

const {email, password} = loginForm

const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value})

const loginUser = async event => {
    event.preventDefault()   
      login({email, password}, dispatch)

}

  return (
    <div className="login" onSubmit={loginUser}>  
        <div className="top">
            <div className="wrapper">

            <img className="logo" src={logo} alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <AlertMessage className='alert' info={alert} />
                <input type="email" 
                        placeholder="Email"
                        name='email' 
                        required 
                        value={email} 
                        onChange={onChangeLoginForm}
                />
                <input type="password" 
                       placeholder="Password"
                       name='password' 
                       required 
                       value={password} 
                       onChange={onChangeLoginForm}
                       />
                <Button className="loginButton" type="submit" onClick={toggleAlert}>Sign In</Button>
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
