import React from 'react'
import Home from '../pages/Home'
import NewsEvent from '../pages/NewsEvent'
import { Route,Routes } from 'react-router'
import Protected from './Protected'
import SignUp from '../pages/SignUp'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/NewsEvent" element={<NewsEvent/>} />
            <Route path="/*" element={<Protected />} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    )
}

export default Routing
