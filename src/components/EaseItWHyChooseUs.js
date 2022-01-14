import React from 'react'


const EaseItWHyChooseUs = ({ img, title, text, alt }) => {
    return (
        <div className="flex flex-col items-center justify-end">
            <div>
                <img src={img} alt={alt} />
            </div>
            <div className='text-center'>
                <div className="card--text__heading primary-color-blue text-2xl"><h2>{title}</h2></div>
                <div className='card--text__description mt-3 text-center px-12'>
                    <p className='text-clr-1 font-lighter'>{text}</p>
                </div>
            </div>
            <div className='p-4'>
                <button className='primary-color-yellow font-monserrat rounded-md shadow-black shadow-sm px-2 py-1  '>Learn More</button>
            </div>
        </div>





    )
}

export default EaseItWHyChooseUs
