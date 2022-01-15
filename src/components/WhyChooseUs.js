import React from 'react'
import EaseItWHyChooseUs from './EaseItWHyChooseUs';
import '../assets/css/components/WhyChooseUs.css'
import whychooseus1 from "../assets/images/whychooseus1.png"
import whychooseus2 from "../assets/images/whychooseus2.png"
import whychooseus3 from "../assets/images/whychooseus3.png"
const WhyChooseUs = () => {
    return (
        <div className='px-10 chooseus py-6 '>
            <div className='text-center flex flex-col items-center '>
                <h3 className='primary-color-yellow--text text-lg md:text-3xl font-bold font-monserrat'>WHY CHOOSE US ?</h3>
                <h2 className='primary-color-blue text-xl md:text-4xl'>We help you get enviable result with ease</h2>
            </div>
            <div className=" md:px-10 flex flex-col gap-y-5 md:flex-row  justify-center md:gap-x-10">
                <EaseItWHyChooseUs
                    img={whychooseus1}
                    title="EASE IT FOR STUDENTS"
                    text="Take tests, assigments and quizzes
                        all in a user friendly space, and easy
                        to navigate.
                        Learning has never been more fun"
                    alt="Student with book."
                />
                <EaseItWHyChooseUs
                    img={whychooseus3}
                    title="EASE IT FOR TEACHERS"
                    text="Upload tests and grade students easily, 
                        keep accurate record of student grades and 
                        export results to a spreadsheet.
                        Do more in such a short time"
                    alt="Teacher with book."
                />
                <EaseItWHyChooseUs img={whychooseus2}
                    title="EASE IT FOR EMPLOYERS"
                    text="Upload tests and grade students easily, 
                keep accurate record of student grades and 
                export results to a spreadsheet.
                 Do more in such a short time"
                    alt="Employer smiling."
                />

            </div>
        </div>
    )
}

export default WhyChooseUs;
