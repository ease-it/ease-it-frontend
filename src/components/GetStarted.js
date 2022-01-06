import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import '../assets/css/components/GetStarted.css'
const GetStarted = () => {
    return (
        <>
            <div className="get-started  w-full flex flex-col px-4 md:px-10 justify-center py-3  ">
                <div className='md:px-10'>
                    <div className="get-started-heading text-2xl md:text-6xl ">
                        <h2> The Perfect Platform for  </h2>
                        <h2>Students and Teachers</h2>   
                    </div>
                   <div className="mt-3">
                        <p className='font-semibold'>
                            <span className='md:block text-lg md:text-2xl '>grading made really easy, Manage</span>
                            <span className='md:block md:text-2xl '> Assigment Test and quizzes all</span>
                            <span className='md:block md:text-2xl '>  with just one click</span>
                        </p>
                   </div>
                    
                </div>
                <div className=' md:px-10 mt-3'>
                <button className='py-1 px-2 rounded-lg text-lg md:py-3 md:px-4 get-started__button md:rounded-2xl md:text-xl '>Get Started <span className='text-xl ml-1 font-bold' ><AiOutlineArrowRight className='inline'/></span>  </button>
                </div>
                <button className='mt-3 px-3 get-started__button-white  md:absolute md:left-20 md:bottom-10 text-sm bg-white text-black py-2 font-bold'>
                    <a href='/'>Download Mobile App <span className='px-2 '><IoLogoGooglePlaystore className='inline'/></span></a>
                    </button>
            </div>
           
        </>
        
    )
}

export default GetStarted
