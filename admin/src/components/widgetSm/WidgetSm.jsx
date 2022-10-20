import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(()=> {
    const getNewUsers = async () => {
      try {
          const res = await axios.get("/users?new=true", {headers:{
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGI5Y2Y1NmRhMmNjMTUzOGU0NDIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI3OTI2MiwiZXhwIjoxNjY2NzExMjYyfQ.mk2KUPzW-zdMlIYHFtTtlzWyfW34KvD-8ZHgSWXe-BE'
          }
        });
        setNewUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getNewUsers();
  },[]);


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=> (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
