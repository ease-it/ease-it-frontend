import React from 'react'
import Laptop from '../assets/images/laptop.png'
const LastestCard = () => {
    return (
        <div className='card-lastest shadow-lg rounded-b-xl rounded flex-col flex'>
            <div className=''>
                <img src={Laptop} alt="A Laptop" />
            </div>
            <div className='bg-white text-3xl font-DM p-10 font-bold primary-color-blue shadow-xl'>
                <p>Customize 
                <br/>your
                <br/>
                 Dashboard</p>
            </div>
        </div>
    )
}

export default LastestCard
