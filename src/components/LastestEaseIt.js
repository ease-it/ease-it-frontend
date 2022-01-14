import React from 'react'
import LastestCard from './LastestCard'
import laptop from '../assets/images/laptop.png'
import weekly from "../assets/images/weekly.png"
import notification from "../assets/images/notification.png"

const LastestEaseIt = () => {
    return (
        <div className='flex flex-col p-5 md:p-20 justify-center items-center '>
            <div className=' text-2xl md:text-4xl font-DM p-3 md:p-10 font-normal'>
                <h3 className='primary-color-blue'>See Lastest from Ease-it</h3>
            </div>
            <div className='flex flex-col gap-y-4 md:flex-row  md:gap-x-6 '>
                <LastestCard img={laptop} alt="A Laptop" />
                <LastestCard img={weekly} alt="weekly planner" />
                <LastestCard img={notification} alt="notification screenshot" />
            </div>
            <div className="mt-4">
                <button className="primary-color-yellow py-2 shadow-lg px-4 text-white text-lg rounded-2xl font-medium ">View More</button>
            </div>

        </div>
    )
}

export default LastestEaseIt
