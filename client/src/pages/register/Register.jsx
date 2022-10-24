import "./register.scss"
import logo from "../../assets/GSCornerlogo.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AlertMessage from '../../components/layout/AlerMessage'
import Button from 'react-bootstrap/Button'
import axios from "axios"

export default function Register() {

    const navigate = useNavigate()

    // Local state
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [alert, setAlert] = useState(null)

    const {username, email, password, confirmPassword} = registerForm

    const onChangeRegisterForm = event => setRegisterForm({...registerForm, [event.target.name]: event.target.value})

    const registerUser = async event => {
      event.preventDefault()
      if (password !== confirmPassword) {
            setAlert({type: 'danger', message: 'Password does not match'})
            setTimeout(() => setAlert(null), 5000)
            return
      }
      try {
        await axios.post(`auth/register`, registerForm) 
        navigate('/login')
      } catch (error) {
        setAlert({type: 'danger', message: 'Username or email already registered'})
        setTimeout(() => setAlert(null), 5000)
      }
    }


  return (
    <div className="register" onSubmit={registerUser}>  
        <div className="top">
            <div className="wrapper">

            <img className="logo" src={logo} alt="" />
            </div>
        </div>
        
        <div className="container">
            <h1>GS Corner</h1>
            <h2>Freely evaluate and experience games</h2>
            <p>Ready to join? </p>
            <form>
            <AlertMessage className='alert' info={alert} />
                <input type="text" 
                        placeholder="User name" 
                        name='username' 
                        required 
                        value={username}
                        onChange={onChangeRegisterForm} />
                <input type="email" 
                        placeholder="Email" 
                        name='email' 
                        required 
                        value={email}
                        onChange={onChangeRegisterForm} />

                <input type="password" 
                        placeholder="Password"
                        name='password' 
                        required
                        value={password}
                        onChange={onChangeRegisterForm}  />
                <input type="password" 
                        placeholder='Confirm Password' 
                        name='confirmPassword'
                        required
                        value={confirmPassword}
                        onChange={onChangeRegisterForm} />       

                <Button className="loginButton" type='submit' >Register Now</Button>
                <span>Already have an account ? 
                <Link className="link" to="/login">
                  <b>Sign in.</b>
                </Link>
                </span>
            </form>     
        </div>
    </div>
  )
}
