import React from 'react'
import EaseItWHyChooseUs from './EaseItWHyChooseUs';
import '../assets/css/components/WhyChooseUs.css'
const WhyChooseUs = () => {
    return (
        <div className='px-10 chooseus py-6 '>
            <div className='text-center flex flex-col items-center '>
                <h3 className='primary-color-yellow--text text-lg md:text-3xl font-bold font-monserrat'>WHY CHOOSE US ?</h3>
                <h2 className='primary-color-blue text-xl md:text-4xl'>We help you get enviable result with ease</h2>
            </div>
            <div className=" md:px-10 flex flex-col gap-y-5 md:flex-row  justify-center md:gap-x-10">
                <EaseItWHyChooseUs />
                <EaseItWHyChooseUs />
                <EaseItWHyChooseUs />
            </div>
        </div>
    )
}

export default WhyChooseUs;
