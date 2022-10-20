import {PlayArrow, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Slick from "../slick/Slick";
import "./listitem.scss"

export default function ListItem({index, item}) {

    const [isHovered, setIsHovered] = useState(false);
    const [game, setGame] = useState({});
 

    useEffect(() => {
        const getGames = async () =>{
            try {
                const res = await axios.get("games/find/" + item , {
                    headers:{
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGI5Y2Y1NmRhMmNjMTUzOGU0NDIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkzMDM1MCwiZXhwIjoxNjY2MzYyMzUwfQ.R2QKUlPhrJdGHefyaHU_87yZt9YscFbkAHxa9EJ9ruY' 
                      }
                })
                console.log(res)
                setGame(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getGames()
    },[item])

  return (
    <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
        <img src={game.img} alt="" />
        {isHovered && (
            <>
            <Slick className="slick"/>
            <div className="itemInfo">
                <div className="icons">
                    <Link to={'/watch'} state={{gm: game.video}}>
                        <PlayArrow className="icon" />
                    </Link>
                            
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span className="limit">{game.limit}</span>
                    <span>{game.year}</span>
                </div>
                <div className="desc">
                    {game.desc}
                </div>
                <div className="genre">
                    <span className="br"> {game.genre}</span>
                    <span className="br"> {game.genre2} </span>
                    <span className="br"> {game.genre3} </span>
                </div>
            </div>
            </>
        )}
    </div>
  )
}
