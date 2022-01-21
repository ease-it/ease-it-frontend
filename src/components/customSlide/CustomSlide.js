import React from 'react'

const CustomSlide = ({ title, ...props }) => {
    return (
        <div {...props}>
            <div className='card block'>
                <h2 className='card-title' >{title}</h2>
            </div>


        </div>
    )
}

export default CustomSlide
