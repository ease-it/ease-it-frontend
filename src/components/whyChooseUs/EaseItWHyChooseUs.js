import React from 'react'
import "./easitWhyChooseUs.scss"


const EaseItWHyChooseUs = ({ img, title, text, alt }) => {
    return (
        <div className="easeitWhyChooseUs">
            <img src={img} alt={alt} className='easeitWhyChooseUs__img' />
            <div className='easeitWhyChooseUs__text-box'>
                <h2 className='easeitWhyChooseUs__heading'>{title}</h2>
                <p className='easeitWhyChooseUs__text'>{text}</p>
                <button className='easeitWhyChooseUs__button'>Learn More</button>
            </div>
        </div>





    )
}

export default EaseItWHyChooseUs
