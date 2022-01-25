import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './headerNav.scss'
const HeaderNav = () => {
    return (
        <>
            <div className="header">
                <button className="header__button">
                    Country/Region
                    <span>
                        <IoIosArrowDown className="header__icon" />
                    </span>
                </button>
                <div className="header__links-container">
                    <a href="/support" className='header__link'>Support </a>
                    <a href="/contact" className='header__link'>Contact us</a>
                </div>
            </div>
        </>
    )
}

export default HeaderNav
