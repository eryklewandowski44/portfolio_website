import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = ['1', '2', '3', '4', '5', '6', '7']

function SliderImg() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: false,
    }

    return (
        <div>
            <Slider className='slider' {...settings}>
                {
                    data.map((data) => {
                        return (
                            <div key={data}>
                                <img src={`images/slider/${data}.png`} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderImg