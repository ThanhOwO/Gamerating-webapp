import "./navbar.scss"
import logo from "../../assets/GSCornerlogo.png"
import Search from "@material-ui/icons/Search"
import Notifications from "@material-ui/icons/Notifications"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import { useState } from "react"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

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
                <span>Homepage</span>
                <span>Series</span>
                <span>Free Games</span>
                <span>New, upcoming and interesting</span>
                <span>Store</span>
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
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar