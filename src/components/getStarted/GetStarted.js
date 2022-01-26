import React from 'react'
import "./getStarted.scss"
import { AiOutlineArrowRight } from "react-icons/ai"
import { IoLogoGooglePlaystore } from "react-icons/io5"

const GetStarted = () => {
    return (
        <>
            <div className="get-started">
                <div className='get-started__heading-box'>
                    <div className="get-started__heading">
                        <h2> The Perfect Platform for Students and Teachers  </h2>
                    </div>
                    <div className='get-started__paragraph-box'>
                        <p className='get-started__paragraph'>
                            <span>grading made really easy, Manage</span>
                            <span > Assigment Test and quizzes all</span>
                            <span >  with just one click.</span>
                        </p>
                    </div>
                </div>
                <div className='get-started__button-box'>
                    <button className='get-started__button'>Get Started
                        <span className='get-started__button-icon' >
                            <AiOutlineArrowRight />
                        </span>
                    </button>
                    <a href='/' className='get-started__download'>Download Mobile App
                        <span className='get-started__download-button'><IoLogoGooglePlaystore /></span>
                    </a>
                </div>
            </div>

        </>

    )
}

export default GetStarted
