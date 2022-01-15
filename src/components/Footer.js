import React from 'react'
import AppLogo from "../ease-it.svg"
import { GrFacebook } from "react-icons/gr"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrYoutube } from "react-icons/gr"
const Footer = () => {
    return (
        <>
            <footer className="col-start-1 col-end-13">
                <div className="flex flex-col bg-clr-3 p-4">
                    <div className="flex px-8 py-4">
                        <div className="flex flex-col justify-evenly ml-10 mr-20">
                            <img className="w-1/2" src={AppLogo} alt="ease-it logo" />
                            <div className="ml-4 my-2 text-sm tracking-wider text-clr-2">
                                <p>easeit.edu.ng</p>
                                <p>+234 70 2000 0000</p>
                                <p>+234 70 3000 0000</p>
                            </div>
                            <div className="ml-4 text-sm flex flex-col">
                                <p className="text-xs text-clr-2">Follow us on Social Media</p>
                                <div className="w-full flex justify-between mt-1">
                                    <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                        <GrFacebook className="react-icons" />
                                    </span>
                                    <span className="h-4 w-4 self-center text-center text-clr-2 text-xs rounded-3xl">
                                        <GrInstagram className="react-icons" />
                                    </span>
                                    <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                        <GrLinkedin className="react-icons" />
                                    </span>
                                    <span className="h-4 w-4 text-clr-3 text-center text-xs rounded-3xl self-center">
                                        <GrTwitter className="react-icons" />
                                    </span>
                                    <span
                                        className="h-4 w-4  self-center text-center text-clr-2 text-xs rounded-3xl">
                                        <GrYoutube className="react-icons" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col m-6 text-sm">
                            <h5 className="text-clr-2 font-extrabold text-sm tracking-wider">Quicklinks</h5>
                            <div className="flex self-center w-full h-full">
                                <div
                                    className="flex flex-col justify-evenly mr-12 text-xs font-bold text-clr-2 tracking-wider">
                                    <a href="/" className="hover:text-clr-2/80 mt-4">About</a>
                                    <a href="/" className="hover:text-clr-2/80 mt-4">Guidelines</a>
                                    <a href="/" className="hover:text-clr-2/80 mt-4">Community</a>
                                </div>
                                <div
                                    className="flex flex-col justify-evenly mr-12 text-xs font-bold text-clr-2 tracking-wider">
                                    <a href="/" className="hover:text-clr-2/80 mt-4">Resources</a>
                                    <a href="/" className="hover:text-clr-2/80 mt-4">What's New</a>
                                    <a href="/" className="hover:text-clr-2/80 mt-4">Privacy</a>
                                </div>
                                <div
                                    className="flex flex-col justify-evenly mr-10 text-xs font-bold text-clr-2 tracking-wider">
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
        </>
    )
}

export default Footer
