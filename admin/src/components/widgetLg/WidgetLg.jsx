import "./widgetLg.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { Create } from "@material-ui/icons";

export default function WidgetLg() {

  const [newGames, setNewGames] = useState([])
  useEffect(()=> {
    const getNewGames = async () => {
      try {
          const res = await axios.get("/games?new=true", {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        setNewGames(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getNewGames();
  },[]);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">New Games Added</h3>
      <table className="widgetLgTable">
      <tbody>
        {newGames.map(game=> (
          <li className="widgetSmListItem">
            <img
              src={game.imgSm}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{game.title}</span>
            </div>
            <div className="widgetSmButton">
              <Create className="widgetSmIcon" />
              {game.createdAt}
            </div>
          </li>
        ))}
      </tbody>
      </table>
    </div>
  );
}
