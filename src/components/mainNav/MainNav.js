import React from 'react'

import AppLogo from "../../assets/ease-it.svg"
import {
    GrSearch
} from "react-icons/gr"
import "./mainNav.scss"


const MainNav = () => {
    return (
        <div className="user-nav">
            <img className="user-nav__img" src={AppLogo} alt="ease-it logo" />
            <nav>
                <input type="checkbox" id="menu-toggle" />
                <label for="menu-toggle" class="hamburger">&#9776;</label>
                <div className="user-nav__link-box">
                    <a href="/" className="user-nav__link">Home</a>
                    <a href="/" className="user-nav__link">About Us</a>
                    <a href="/dashboard" className="user-nav__link">Dashboard</a>
                    <a href="/" className="user-nav__link">Resources</a>
                    <a href="/" className="user-nav__link">News & Events</a>
                    <a href="/" className='user-nav__link'> Search
                        <GrSearch className="user-nav__search-button" />
                    </a>
                    <a href="/signup" className="user-nav__button">Signup?Login</a>
                </div>


            </nav>
        </div>
    )
}

export default MainNav
