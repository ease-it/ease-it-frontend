import React from 'react'

const LastestCard = ({ img, alt }) => {
    return (
        <div className='card-lastest shadow-lg rounded-b-xl rounded flex-col flex'>
            <div className=''>
                <img src={img} alt={alt} style={{ maxWidth: "300px", height: "200px" }} />
            </div>
            <div className='bg-white text-2xl p-5 font-DM md:p-10 md:font-bold primary-color-blue shadow-xl'>
                <p>Customize
                    <br />your
                    <br />
                    Dashboard</p>
            </div>
        </div>
    )
}

export default LastestCard
