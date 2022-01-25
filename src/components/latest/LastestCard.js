import React from 'react'
import "./latestCard.scss"

const LastestCard = ({ img, alt, text }) => {
    return (
        <div className='card'>
            <img src={img} alt={alt} className='card__img' />
            <p className='card__text'>
                {text}
            </p>

        </div>
    )
}

export default LastestCard
