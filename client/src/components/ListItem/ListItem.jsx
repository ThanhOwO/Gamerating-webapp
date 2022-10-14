import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

export default function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://cdn.tgdd.vn//GameApp/-1//ghost-of-tsushima-800x450.jpg" alt="" />
        {isHovered && (
            <>
            <iframe src="https://www.youtube.com/embed/iqysmS4lxwQ?autoplay=1&mute=1"></iframe>
            <div className="itemInfo">
                <div className="icon">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownOutlined/>
                </div>
                <div className="itemInfoTop">
                    <span className="limit">16+</span>
                    <span>2020</span>
                </div>
                <div className="desc">
                    Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment.
                </div>
                <div className="genre">Action</div>
                <div className="genre">Adventure</div>
                <div className="genre">Role-playing</div>
            </div>
            </>
        )}
    </div>
  )
}
