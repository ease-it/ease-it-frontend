import React from 'react'
import "./aboutUs.scss"
import AboutUsPng from '../../assets/images/easeitaboutus.png'
const AboutUs = () => {
    return (
        <div className='aboutUs'>

            <img src={AboutUsPng} alt="About us with Ease it Logo" />

            <div className='aboutUs__text-box'>
                <h3 className='aboutUs__heading'>About Us</h3>
                <p className='aboutUs__text'>
                    EASE-IT is an educational platform for students and teachers aimed at helping teachers manage the grades and homeworks of their students.
                    A teacher can give assignments or  quizzes online and then the students takes it, submits and get graded immediately.
                    There is also provision for online resources such as tutorials and handouts. Students can also track their test and assignment records.
                    It can also be used as Skills assessment tools for employees of a Company.
                </p>
            </div>
        </div>

    )
}

export default AboutUs
