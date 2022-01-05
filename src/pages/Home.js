import React from 'react'
import GetStarted from '../components/GetStarted'
import HeaderNav from '../components/HeaderNav'
import MainNav from '../components/MainNav'

const Home = () => {
    return (
        <div>
            <HeaderNav/>
            <MainNav />
            <GetStarted/>
        </div>
    )
}

export default Home
