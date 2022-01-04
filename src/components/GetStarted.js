import React from 'react'
import '../assets/css/components/GetStarted.css'
const GetStarted = () => {
    return (
        <>
            <div className="get-started w-full flex flex-col px-10 justify-center  ">
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
                <div>
                    <button>Get Started </button>
                </div>
            </div>
            <div>
                <div>
                    <a>Download Mobile App</a>
                </div>
             
            </div>
        </>
        
    )
}

export default GetStarted
