import React from 'react'
import "./whyChooseUs.scss"
import EaseItWHyChooseUs from './EaseItWHyChooseUs';
import whychooseus1 from "../../assets/images/whychooseus1.png"
import whychooseus2 from "../../assets/images/whychooseus2.png"
import whychooseus3 from "../../assets/images/whychooseus3.png"
const WhyChooseUs = () => {
    return (
        <div className='whyChooseUs'>
            <div>
                <h3 className='whyChooseUs__heading--1'>WHY CHOOSE US ?</h3>
                <h2 className='whyChooseUs__heading--2'>We help you get enviable result with ease</h2>
            </div>
            <div className="whyChooseUs__card-box">
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
