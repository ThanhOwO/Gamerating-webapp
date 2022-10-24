import "./navbar.scss"
import logo from "../../assets/GSCornerlogo.png"
import Search from "@material-ui/icons/Search"
import Notifications from "@material-ui/icons/Notifications"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../../authContext/AuthContext"
import { logoutStart } from "../../authContext/AuthAction"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={logo} alt="" />
                <Link to="/" className="link">
                    <span>Home</span>
                </Link>
                <Link to="/games" className="link">
                    <span>Games</span>
                </Link>
                    <span>Daily New</span>

            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://thientu.vn/userfiles/images/meo-ollie.jpg" alt=""/>
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logoutStart())}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar