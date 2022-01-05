import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import '../assets/css/components/GetStarted.css'
const GetStarted = () => {
    return (
        <>
            <div className="get-started  w-full flex flex-col px-10 justify-center  ">
                <div className='px-10'>
                    <div className="get-started-heading text-6xl font-xl">
                        <h2> The Perfect Platform for  </h2>
                        <h2>Students and Teachers</h2>   
                    </div>
                   <div className="mt-3">
                        <p>
                            <span className='block text-2xl font-bold'>grading made really easy, Manage</span>
                            <span className='block text-2xl font-bold'> Assigment Test and quizzes all</span>
                            <span className='block text-2xl font-bold'>  with just one click</span>
                        </p>
                   </div>
                    
                </div>
                <div className='px-10 mt-3'>
                    <button className='py-3 px-4 get-started__button rounded-2xl text-xl '>Get Started <span className='text-xl ml-1 font-bold' ><AiOutlineArrowRight className='inline'/></span>  </button>
                </div>
                <button className='mt-3 px-3 get-started__button-white  sm:absolute sm:left-20 sm:bottom-10 text-sm bg-white text-black py-2 font-bold'>
                    <a href='/'>Download Mobile App <span className='px-2 '><IoLogoGooglePlaystore className='inline'/></span></a>
                    </button>
            </div>
           
        </>
        
    )
}

export default GetStarted
