import React from 'react'
import { IoIosArrowDown} from 'react-icons/io'
import '../assets/css/components/HeaderNav.css'
const HeaderNav = () => {
    return (
        <>
            <div className="flex text-sm h-14 md:text-md header items-center font-bold justify-between p-3">
                <div>
                    <button className="header--button px-2 py-1  sm:px-4 sm:py-2 font-semibold rounded-md ">Country/Region<span className='md:text-xl ml-1 font-bold'><IoIosArrowDown className="inline" /></span> </button>
                </div>
                <div className="flex gap-x-2 md:gap-x-6 text-black justify-end">
                    <div><a href="/support">Support </a></div>
                    <div><a href="/contact text-eclipse">Contact us</a></div>
                </div>
            </div>
        </>
    )
}

export default HeaderNav
