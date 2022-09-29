import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./landing.css";
import { sliderItems } from "../components/SliderData";




const Slider = () => {
    const [current, setCurrent] = useState(0);
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  return (
    <div className="main-loading-container">
    <div className="landing-container">
        <div className="landing-arrow landing-left">
            <i className="fa-solid landing-arrow-button fa-arrow-left" onClick={prevSlide}></i>
        </div>
        <div className="landing-arrow landing-right">
        <i className="fa-solid landing-arrow-button fa-arrow-right" onClick={nextSlide}></i> 
        </div>
        <div className="landing-wrapper" >
        {sliderItems.map((item, index) => {
         let position = "nextSlide";
         if (index === current) {
           position = "activeSlide";
         }
         if (
           index === current - 1 ||
           (current === 0 && index === sliderItems.length - 1)
         ) {
           position = "lastSlide";
         }

            return (
          <div className={`landing-slide ${position}`} key={item.id}>
            <div className="landing-image-container">
              <img className="landing-image" src={item.img} alt="" />
            </div>
            <div className="landing-info-container">
              <h1 className="landing-title">{item.title}</h1>
              <p className="landing-desc">{item.desc}</p>
              <button className="landing-button"><a href="/products"><Link  to="/products">Shop Now</Link></a></button>
            </div>
          </div>
            )
        }
        )}
      </div>
    </div>
    </div>
  );
};

export default Slider;