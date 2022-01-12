import React from 'react'
import AppLogo from "../ease-it.svg"
import { GrSearch } from "react-icons/gr"
import { GrFacebook } from "react-icons/gr"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrYoutube } from "react-icons/gr"
import { GrGooglePlay } from "react-icons/gr"

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <header className="col-span-12 grid grid-cols-12 bg-clr-3 pl-10 py-1">
                    <div className="col-start-2 col-end-12 flex justify-between">
                        <button className="bg-clr-4 rounded-xl drop-shadow-lg m-2 p-4 py-2 text-white tracking-wider">Country/Region
                            ⌵</button>
                        <div className="self-center flex font-black text-clr-2">
                            <a className="ml-4" href="/">Support</a>
                            <a className="ml-4" href="/">Contact Us</a>
                        </div>
                    </div>
                </header>
                <nav className="grid grid-cols-12 col-span-12 bg-white drop-shadow-lg">
                    <div className="col-start-2 col-end-13 flex justify-between">
                        <img className="col-span-1 col-start-2 h-16" src={AppLogo} alt="ease-it logo" />
                        <div className="col-start-4 col-end-13 flex self-center uppercase">
                            <ul className="col-start-4 col-end-12 flex justify-items-center">
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/">Home</a>
                                </li>
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/">About Us</a>
                                </li>
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/">Dashboard</a>
                                </li>
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/">Resources</a>
                                </li>
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/">News & Events</a>
                                </li>
                                <li
                                    className="self-center mr-3 hover:border-b-4 hover:border-clr-4 hover:-mb-1 focus:border-b-4 focus:border-clr-4 font-bold text-clr-2 text-xs">
                                    <a href="/"> Search
                                        <GrSearch className="react-icons" />
                                    </a>
                                </li>
                            </ul>
                            <button
                                className="self-center bg-clr-4 rounded-2xl shadow-lg text-white text-xs tracking-wider p-2 mr-4 ">Signup?Login
                            </button>
                        </div>
                    </div>
                </nav>
                <main className="col-start-2 col-end-12 grid grid-cols-12 gap-x-10 gap-y-0 mt-8 mb-4">
                    <h1 className="text-clr-2 row-start-1 font-serif_display text-2xl pb-2 tracking-wider">Dashboard</h1>
                    <section className="col-span-4 row-start-2 row-end-5 grid grid-cols-1 grid-rows-2 gap-x-2">
                        <div className="bg-clr-4 row-start-2 row-end-4 h-screen border-2 border-black/40 drop-shadow-lg">
                            <ul className="flex flex-col justify-evenly p-2">
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa self-center fa-address-book" aria-hidden="true"></i>
                                    </span>
                                    <a className="side-anchor" href="/">Take a Quiz</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa fa-check self-center" aria-hidden="true"></i>
                                    </span>
                                    <a className="side-anchor" href="/">Attendance</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa fa-play self-center bg-clr-3 p-1 rounded-3xl icontxt"
                                            aria-hidden="true"></i></span>
                                    <a className="side-anchor" href="/">Tutorials</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa fa-pencil-square-o self-center" aria-hidden="true"></i></span>
                                    <a className="side-anchor" href="/">Assignment</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa fa-user-o self-center bg-clr-3 p-1 rounded-3xl"
                                            aria-hidden="true"></i></span>
                                    <a className="side-anchor" href="/">Profile</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa fa-address-book self-center" aria-hidden="true"></i></span>
                                    <a className="side-anchor" href="/">Results</a>
                                </li>
                                <li className="flex font-serif_display text-clr-2 py-3 text-left">
                                    <span
                                        className="w-6 h-6 text-clr-2 bg-clr-4 text-center text-xs rounded-3xl flex justify-center"><i
                                            className="fa text-clr-4 font-semibold text-center p-1 bg-clr-4 rounded-3xl self-center"
                                            aria-hidden="true"></i></span>
                                    <a className="text-white ml-6 font-thin" href="/">Log out</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="col-start-5 col-end-13 row-start-1 row-end-3 flex flex-col pt-14 ml-10">
                        <h3 className="font-serif_display tracking-wider font-extralight pb-2">Tutorials</h3>
                        <video controls poster="video.svg">
                            <source src="/" type="video/mp4" />
                        </video>
                    </section>
                    <section
                        className="col-start-5 col-end-13 row-start-3 row-end-5 flex flex-col border-l-2 border-clr-1 rounded-sm">
                        <div className="ml-10">
                            <div className="bg-clr-3 rounded-2xl p-2 h-max p-4 mb-8 flex flex-col justify-between">
                                <h4 className="font-serif_display text-sm tracking-wider">Tutorials 1</h4>
                                <p className="text-xs my-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                <button
                                    className="bg-clr-4 rounded-lg drop-shadow-lg p-2 py-1 text-white text-xs tracking-wider self-end">Learn
                                    More</button>
                            </div>
                            <div className="bg-clr-3 rounded-2xl p-2 h-max p-4 mb-8 flex flex-col justify-between">
                                <h4>Tutorials 2</h4>
                                <p className="text-xs my-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                <button
                                    className="bg-clr-4 rounded-lg drop-shadow-lg p-2 py-1 text-white text-xs tracking-wider self-end">Learn
                                    More
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
                <section
                    className="col-start-1 col-end-13  bg-center bg-no-repeat bg-cover h-80 text-white font-serif_display">
                    <div className="w-full h-full bg-clr-2/20 flex flex-col justify-between items-center p-6">
                        <p className="mt-10 text-center text-xl tracking-wider">Join our community of Ease-it users.<br />With us, you
                            can only get better. </p>
                        <button
                            className="mb-8 bg-clr-4 rounded-3xl drop-shadow-lg m-2 px-6 py-2 font-monteserrat font-semibold text-white tracking-widest">Get
                            Started
                        </button>
                        <div className="self-end flex flex-col justify-between items-center font-monteserrat text-sm">
                            <span className="arrow">
                                <i className="material-icons">north</i>
                            </span>
                            <a href="">Back to top</a>
                        </div>
                    </div>
                </section>
                <footer className="col-start-1 col-end-13">
                    <div className="bg-clr-2 text-white text-sm flex justify-between p-4 px-6">
                        <a className="flex self-center bg-clr-5 font-semibold text-black text-center p-1 px-4 shadow-xl"
                            href="/">Download Mobile App
                            <span className="text-white h-5 w-5 ml-2">
                                <GrGooglePlay className="react-icons" />
                            </span>
                        </a>
                        <form className="flex justify-between">
                            <div className="letter-sub">
                                <p>Subscribe to our newsletter</p>
                                <input className="w-full outline-none p-1 pl-2 text-black w-80 mt-1" type="email" name="email" />
                                <input className="bg-clr-4 rounded drop-shadow-lg mx-2 px-2 py-1 text-white tracking-wider"
                                    type="button" name="button" value="Subscribe" />
                            </div>

                        </form>
                    </div>
                    <div className="flex flex-col bg-clr-3 p-4">
                        <div className="flex px-8 py-4">
                            <div className="flex flex-col justify-evenly ml-10 mr-20">
                                <img className="w-1/2" src={AppLogo} alt="ease-it logo" />
                                <div className="ml-4 my-2 text-sm tracking-wider">
                                    <p>easeit.edu.ng</p>
                                    <p>+234 70 2000 0000</p>
                                    <p>+234 70 3000 0000</p>
                                </div>
                                <div className="ml-4 text-sm flex flex-col">
                                    <p className="text-xs">Follow us on Social Media</p>
                                    <div className="w-full flex justify-between mt-1">
                                        <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                            <GrFacebook className="react-icons" />
                                        </span>
                                        <span className="h-4 w-4 text-clr-3 self-center text-center text-clr-2 text-xs rounded-3xl">
                                            <GrInstagram className="react-icons" />
                                        </span>
                                        <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                            <GrLinkedin className="react-icons" />
                                        </span>
                                        <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                            <GrTwitter className="react-icons" />
                                        </span>
                                        <span
                                            className="h-4 w-4 text-clr-3 self-center text-center text-clr-2 text-xs rounded-3xl">
                                            <GrYoutube className="react-icons" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col m-6 text-sm">
                                <h5 className="text-clr-2 font-extrabold text-sm tracking-wider">Quicklinks</h5>
                                <div className="flex self-center w-full h-full">
                                    <div
                                        className="flex flex-col justify-evenly mr-10 text-xs font-medium text-clr-2 tracking-wider">
                                        <a href="/" className="hover:text-clr-2/80 mt-4">About</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Guidelines</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Community</a>
                                    </div>
                                    <div
                                        className="flex flex-col justify-evenly mr-10 text-xs font-medium text-clr-2 tracking-wider">
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Resources</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">What's New</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Privacy</a>
                                    </div>
                                    <div
                                        className="flex flex-col justify-evenly mr-10 text-xs font-medium text-clr-2 tracking-wider">
                                        <a href="/" className="hover:text-clr-2/80 mt-4">FAQs</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Contact Us</a>
                                        <a href="/" className="hover:text-clr-2/80 mt-4">Become a Partner</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 self-center text-sm italic text-clr-4 font-[600] tracking-wider">All rights reserved.
                            Team 9 Sidehustle Boot Camp 4.0
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard
