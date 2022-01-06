import React from 'react'
import "../assets/css/components/CustomSlide.css"

const CustomSlide = ({ title, ...props }) => {
    return (
        <div {...props}>
            <div className='card'>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
                <h2 className='card-title'>{title}</h2>
            </div>


        </div>
    )
}

export default CustomSlide
