import React from 'react'
import AboutUs from '../components/AboutUs'
import Community from '../components/Community'
import GetStarted from '../components/GetStarted'
import HeaderNav from '../components/HeaderNav'
import LastestEaseIt from '../components/LastestEaseIt'
import MainNav from '../components/MainNav'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
    return (
        <div>
            <HeaderNav/>
            <MainNav />
            <GetStarted/>
            <WhyChooseUs/>
            <AboutUs />
            <LastestEaseIt/>
            <Community />
        </div>
    )
}

export default Home
