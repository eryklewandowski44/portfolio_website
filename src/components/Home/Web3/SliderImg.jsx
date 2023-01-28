import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImg() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }

    return (
        <div className='slider-inner'>
            <Slider {...settings}>
                <div className='slider-img'>
                    <img src="images/Slider1.png" alt="" />
                </div>
                <div className='slider-img'>
                    <img src="images/Slider2.png" alt="" />
                </div>
                <div className='slider-img'>
                    <img src="images/Slider3.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderImg