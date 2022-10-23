import {PlayArrow, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./listitem.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined"
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined"

export default function ListItem({index, item}) {

    const [isHovered, setIsHovered] = useState(false);
    const [game, setGame] = useState({});
 

    useEffect(() => {
        const getGames = async () =>{
            try {
                const res = await axios.get("games/find/" + item , {
                    headers:{
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken 
                      }
                })
                setGame(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getGames()
    },[item])

    const ArrowLeft = (props) => (
    
        <ArrowBackIosOutlined {...props}
        className={'arrow left'}/>
         
        );
      const ArrowRight = (props) => (
        <ArrowForwardIosOutlined {...props}
        className={'arrow right'}/>  
        );
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
      };

  return (
    
    <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
        <img src={game.imgSm} alt="" />
        {isHovered && (
            <>
            <div className='slick'>
                <Slider {...settings}>
                
                    <div>
                        <img src={game.trailer}/>
                    </div>
                    <div>
                        <img src={game.trailer2} />
                    </div>
                    <div>
                        <img src={game.trailer3} />
                    </div>
                    <div>
                        <img src={game.trailer4} />
                    </div>
                </Slider>
            </div>
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
