import "./newUser.css";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { createUsers } from "../../context/userContext/apiCalls";


export default function NewUser() {

  const [user, setUser] = useState(null)
  const {dispatch} = useContext(UserContext)
  const history = useHistory()


  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUsers(user, dispatch)
    history.push("/users")
  }

  return (
    <div className="newUser" onSubmit={handleSubmit}>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" name="username" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Avatar</label>
          <input type="text" placeholder="img url" name="profilePic" onChange={handleChange} />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
