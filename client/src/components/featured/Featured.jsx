import "./featured.scss"
import PlayArrow from "@material-ui/icons/PlayArrow"
import InfoOutlined from "@material-ui/icons/InfoOutlined"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Featured({type, setgenre}) {
    const [content, setContent] = useState({})
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/games/random?type=${type}`, {
                    headers:{
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
                      }})
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }

        getRandomContent()
    },[type])


  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "games" ? "Games" : "Series"}</span>
                <select name="genre" id="genre" onChange={(e) => setgenre(e.target.value)}>
                    <option>Genre</option>
                    <option value="action">Action</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                    <option value="role-playing">Role-playing</option>
                    <option value="sport">Sports-games</option>
                    <option value="strategy">Strategy</option>
                    <option value="online">Online</option>
                </select>
            </div>
        )}
        <img src={content.img} alt="" width="100%" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">
                {content.desc}
            </span>
            <div className="buttons">
                <Link className="link" to={'/watch'} state={{gm: content.video}}>
                <button className="play" >
                    <PlayArrow/>
                    <span>Play trailer</span>
                </button>
                </Link>
                <button className="more">
                    <InfoOutlined/>
                    <span>More info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
