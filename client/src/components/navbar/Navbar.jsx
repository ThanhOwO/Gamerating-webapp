import "./navbar.scss"
import logo from "../../assets/GSCornerlogo.png"
import Search from "@material-ui/icons/Search"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../../authContext/AuthContext"
import { logoutStart } from "../../authContext/AuthAction"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {user, dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/" className="link">
                    <img src={logo} alt="" />
                </Link>
                <Link to="/" className="link">
                    <span className="navbarmainLinks">Home</span>
                </Link>
                <Link to="/games" className="link">
                    <span className="navbarmainLinks">Games</span>
                </Link>
                <Link to="/dailynew" className="link">
                    <span>Daily New</span>
                </Link>

            </div>
            <div className="right">
                <Search className="icon"/>
                <span> Welcome {user.username}</span>
                <img src={user.profilePic || "https://cdn.glitch.global/11d25a0c-872c-47c4-aec2-5427424b9e3e/free-user-icon-3296-thumb-removebg-preview.png?v=1667798321017"} alt=""/>
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