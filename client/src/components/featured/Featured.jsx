import "./featured.scss"
import BG from "../../assets/landing.jpg"
import PlayArrow from "@material-ui/icons/PlayArrow"
import InfoOutlined from "@material-ui/icons/InfoOutlined"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "games" ? "Games" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="action">Action</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                    <option value="role-playing">Role-playing</option>
                    <option value="simulation">Simulation</option>
                    <option value="strategy">Strategy</option>
                </select>
            </div>
        )}
        <img src={BG} alt="" width="100%" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ghost_of_Tsushima_logo_black.svg/1280px-Ghost_of_Tsushima_logo_black.svg.png" alt="" />
            <span className="desc">
            Ghost of Tsushima is a stealthy, third-person action-adventure game. With a huge open world, there are no stops and can be explored without a guide. The player can quickly travel to different areas of the world on horseback and with an item that acts as a hook to access hard-to-reach areas of the game. The game features side quests and non-playable characters (NPCs) that the player can interact with.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play trailer</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>More info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
