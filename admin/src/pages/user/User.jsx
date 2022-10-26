import {
  MailOutline,
  PermIdentity,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useLocation } from "react-router-dom";
import { updateUsers } from "../../context/userContext/apiCalls";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";

export default function User() {

  const location = useLocation()
    const luser = location.user;

    const [user, setUser] = useState(null)
    const {dispatch} = useContext(UserContext)
    const history = useHistory()


    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateUsers(user, dispatch)
        history.push("/users")
    }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={luser?.profilePic}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{luser?.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{luser?.email}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">ID</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{luser?._id}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate" onSubmit={handleSubmit}>
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={luser?.username}
                  className="userUpdateInput"
                  name="username" 
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={luser?.email}
                  className="userUpdateInput"
                  name="email" 
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Avatar</label>
                <input
                  type="text"
                  placeholder="img url"
                  className="userUpdateInput"
                  name="profilePic" 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={luser?.profilePic}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
