import React from 'react'
import Home from '../pages/Home'
import NewsEvent from '../pages/NewsEvent'
import { Route,Routes } from 'react-router'
import Protected from './Protected'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/NewsEvent" element={<NewsEvent/>} />
            <Route path="/*" element={<Protected />} />
        </Routes>
    )
}

export default Routing
