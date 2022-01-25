import React from 'react'
import "./footer.scss"
import AppLogo from "../../assets/ease-it.svg"
import { GrFacebook } from "react-icons/gr"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrYoutube } from "react-icons/gr"
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__links-box">
                    <div>
                        <img src={AppLogo} alt="ease-it logo" />

                        <div className="footer__phone">
                            <p>easeit.edu.ng</p>
                            <p>+234 70 2000 0000</p>
                            <p>+234 70 3000 0000</p>
                        </div>

                        <p className="text-xs text-clr-2">Follow us on Social Media</p>

                        <div className="footer__socials">
                            <a href="/" className='footer__socials-icon'>
                                <GrFacebook className="react-icons" href='/' />
                            </a>
                            <a href="/" className='footer__socials-icon'>
                                <GrInstagram className="react-icons" />
                            </a>
                            <a href="/" className='footer__socials-icon'>
                                <GrLinkedin className="react-icons" />
                            </a>
                            <a href="/" className='footer__socials-icon'>
                                <GrTwitter className="react-icons" />
                            </a>

                            <a href="/" className='footer__socials-icon'>
                                <GrYoutube className="react-icons" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__quicklinks">
                        <h5 className="footer__quicklinks-heading">Quicklinks</h5>
                        <div className="footer__quicklinks-grid">
                            <a href="/" className="footer__quicklinks-grid-link">About</a>
                            <a href="/" className="footer__quicklinks-grid-link">Guidelines</a>
                            <a href="/" className="footer__quicklinks-grid-link">Community</a>
                            <a href="/" className="footer__quicklinks-grid-link">Resources</a>
                            <a href="/" className="footer__quicklinks-grid-link">What's New</a>
                            <a href="/" className="footer__quicklinks-grid-link">Privacy</a>
                            <a href="/" className="footer__quicklinks-grid-link">FAQs</a>
                            <a href="/" className="footer__quicklinks-grid-link">Contact Us</a>
                            <a href="/" className="footer__quicklinks-grid-link">Become a Partner</a>

                        </div>
                    </div>
                </div>
                <p className="footer__copyright">
                    All rights reserved. Team 9 Sidehustle Boot Camp 4.0
                </p>
            </footer>
        </>
    )
}

export default Footer
