import "./list.scss"
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined"
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined"
import ListItem from "../ListItem/ListItem"
import { useRef, useState } from "react"

export default function List({list}) {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSliderNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSliderNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 6){
            setSliderNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}
                style={{display: ! isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                {list.content.map((item, i)=>(
                    <ListItem index={i} item={item}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}
