import React from 'react'


const EaseItWHyChooseUs = ({ img }) => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={img} alt='Student with Book' />
            </div>
            <div className='text-center'>
                <div className="card--text__heading primary-color-blue text-2xl"><h2>EASE IT FOR STUDENTS</h2></div>
                <div className='card--text__description mt-3 text-black text-center px-12 '>
                    <p>Take tests, assigments and quizzes
                        all in a user friendly space, and easy
                        to navigate.
                        Learning has never been more fun</p>
                </div>
            </div>
            <div className='p-4'>
                <button className='primary-color-yellow font-monserrat rounded-md shadow-black shadow-sm px-2 py-1  '>Learn More</button>
            </div>
        </div>





    )
}

export default EaseItWHyChooseUs
