import React from 'react'
import AppLogo from "../ease-it.svg"
import {
    GrSearch
} from "react-icons/gr"
const MainNav = () => {
    return (
        <>
            <nav className="grid grid-cols-12 col-span-12 bg-white drop-shadow-lg">
                <div className="col-start-2 col-end-13 flex justify-between">
                    <img className="col-span-1 col-start-2 h-16" src={AppLogo} alt="ease-it logo" />
                    <div className="col-start-4 col-end-13 flex self-center uppercase">
                        <ul className="col-start-4 col-end-12 flex justify-items-center">
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/">Home</a>
                            </li>
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/">About Us</a>
                            </li>
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/">Dashboard</a>
                            </li>
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/">Resources</a>
                            </li>
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/">News & Events</a>
                            </li>
                            <li
                                className="self-center mr-4 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                <a href="/" className='search-nav-icon'> Search
                                    <GrSearch className="react-icons " />
                                </a>
                            </li>
                        </ul>
                        <button
                            className="self-center bg-clr-4 rounded-2xl shadow-lg text-white text-xs tracking-wider p-2 mr-4 ">Signup?Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainNav
