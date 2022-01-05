import React from 'react'
import LastestCard from './LastestCard'

const LastestEaseIt = () => {
    return (
        <div className='flex flex-col p-20 justify-center items-center '>
            <div className='text-4xl font-DM p-10 font-semibold'>
            <h3 className='primary-color-blue'>See Lastest from Ease-it</h3>
            </div>
            <div className='flex gap-x-6 '>
            <LastestCard />
            <LastestCard />
            <LastestCard />
            </div>
            <div className="mt-4">
                <button className="primary-color-yellow py-2 shadow-lg px-4 text-white text-lg rounded-2xl font-medium ">View More</button>
            </div>
            
        </div>
    )
}

export default LastestEaseIt
