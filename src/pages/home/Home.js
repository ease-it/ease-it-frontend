import React from 'react';
import HeaderNav from '../../components/headerNav/HeaderNav';
import MainNav from '../../components/mainNav/MainNav';
import AboutUs from '../../components/about/AboutUs';
import Community from '../../components/community/Community';
import GetStarted from '../../components/getStarted/GetStarted';
import LastestEaseIt from '../../components/latest/LastestEaseIt';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import Footer from "../../components/footer/Footer";
import "./home.scss"

const Home = () => {
    return (
        <div className='home-container'>
            <HeaderNav />
            <MainNav />
            <GetStarted />
            <WhyChooseUs />
            <AboutUs />
            <LastestEaseIt />
            <Community />
            <Footer />
        </div>
    )
}

export default Home
