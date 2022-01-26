import React from 'react'
import "./customSlide.scss"

const CustomSlide = ({ title, ...props }) => {
    return (
        <div {...props}>
            <div className='card-block'>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>
                <h2 >{title}</h2>

            </div>


        </div>
    )
}

export default CustomSlide
