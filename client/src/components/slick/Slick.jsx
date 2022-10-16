import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss"
import Slider from "react-slick"
import { dataImg } from './data';
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined"
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined"

export default function Slick() {

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
    <div className='slick'>
    <Slider {...settings}>
      
      {dataImg.map((item) => (

        <div className='card'>
          <div className='card-top'>
            <img src={item.linkImg}/>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  )
}
