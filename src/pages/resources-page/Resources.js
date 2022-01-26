import React from 'react';
import HeaderNav from '../../components/headerNav/HeaderNav';
import MainNav from '../../components/mainNav/MainNav';
import "./resources.scss"
import Chemistry from "../../assets/images/chemistry.jpg"
import Physics from "../../assets/images/elementary-physics.jpeg"
import Calculus from "../../assets/images/calculus.jpeg"
import CSS from "../../assets/images/intro-to-css.jpg"
import Biology from "../../assets/images/practical-biology.jpg"
import Agriculture from "../../assets/images/agricultural-sciences.jpg"

const Resources = ({ match }) => {
    return (
        <div>
            <HeaderNav />
            <MainNav />
            <div className='resources'>
                <h1>Resources</h1>
                <div className='resources__link-box'>
                    <a href="/" className='resources__link resources__link--active'> Course Handouts</a>
                    <a href="/" className='resources__link'> E-Books</a>
                    <a href="/" className='resources__link'> Articles</a>
                </div>
                <div className='resources__contents'>
                    <div className="resources__content">
                        <img src={Physics} alt="" />
                        <span>Elementary Physics</span>
                    </div>
                    <div className="resources__content">
                        <img src={Biology} alt="" />
                        <span>Practical Biology</span>
                    </div>
                    <div className="resources__content">
                        <img src={CSS} alt="" />
                        <span>Introduction To Css</span>
                    </div>
                    <div className="resources__content">
                        <img src={Calculus} alt="" />
                        <span>Calculus</span>
                    </div>
                    <div className="resources__content">
                        <img src={Chemistry} alt="" />
                        <span>Chemistry 400</span>
                    </div>
                    <div className="resources__content">
                        <img src={Agriculture} alt="" />
                        <span>Agricultural Sciences</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resources;
