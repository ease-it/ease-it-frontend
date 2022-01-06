import React from 'react'
import AboutUsPng from '../assets/images/easeitaboutus.png'
const AboutUs = () => {
    return (
        <div className=' primary-color-blue__background pt-10 p-4 md:px-20 flex justify-center items-center'>
            <div className='md:grid md:grid-flow-col md:col-12 '>
                <div className='md:col-span-5 '>
                    <img src={AboutUsPng} alt="About us with Ease it Logo" />
                </div>
                <div className=' md:px-8 text-left '>
                    <div>
                        <h3 className='primary-color-yellow--text text-3xl font-semibold'>About Us</h3>
                    </div>
                    <div className='sm:text-lg md:text-xl md:w-3/4 '>
                        <p>EASE-IT is an educational platform for students and teachers aimed at helping teachers manage the grades and homeworks of their students.
                            A teacher can give assignments or  quizzes online and then the students takes it, submits and get graded immediately.
                            There is also provision for online resources such as tutorials and handouts. Students can also track their test and assignment records.
                            It can also be used as Skills assessment tools for employees of a Company.</p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default AboutUs
