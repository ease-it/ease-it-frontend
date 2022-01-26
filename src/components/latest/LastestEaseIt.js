import React from 'react'
import LastestCard from './LastestCard'
import "./latestEaseIt.scss"
import laptop from '../../assets/images/laptop.png'
import weekly from "../../assets/images/weekly.png"
import notification from "../../assets/images/notification.png"

const LastestEaseIt = () => {
    return (
        <div className='latestEaseIt'>
            <h3 className='latestEaseIt__heading'>See The Lastest from Ease-it</h3>
            <div className='latestEaseIt__card'>
                <LastestCard img={laptop} alt="A Laptop" text="Customize your dashboard" />
                <LastestCard img={weekly} alt="weekly planner" text="Make a schedule for your tests" />
                <LastestCard img={notification} alt="notification screenshot" text="Get prompt Notifications" />
            </div>
            <button className="latestEaseIt__button">View More</button>
        </div>
    )
}

export default LastestEaseIt
