import React from 'react'
import Slider from "react-slick"
import CustomSlide from '../../components/customSlide/CustomSlide'
import HeaderNav from "../../components/headerNav/HeaderNav"
import MainNav from "../../components/mainNav/MainNav"


const NewsEvent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        arrows: true
    };
    return (
        <div>
            <HeaderNav />
            <MainNav />
            <div className='news-page-layout'>
                <h1 className='primary-color-blue'>What's New?</h1>
                <Slider {...settings} className='slider-container'>
                    <CustomSlide title="headline 1" />
                    <CustomSlide title="headline 2" />
                    <CustomSlide title="headline 3" />
                    <CustomSlide title="headline 4" />
                    <CustomSlide title="headline 5" />
                    <CustomSlide title="headline 6" />
                    <CustomSlide title="headline 7" />
                </Slider>

            </div>


        </div>
    )
}

export default NewsEvent
