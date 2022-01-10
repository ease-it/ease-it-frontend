import React from 'react'
import '../assets/css/components/Community.css'
import { IoLogoGooglePlaystore } from "react-icons/io5"
const Community = () => {
    return (
        <div className='community--header primary-color-blue__background flex flex-col '>
            <div className='community flex flex-col justify-center items-center'>
                <div className=" text-xl md:text-4xl font-DM">
                    <h3 className='py-4'>Join our community of Ease-it users. </h3>
                    <h3 className='text-center'>With us, you can only get better.</h3>
                </div>
            </div>
            <div className='text-center '>
                <div className='flex flex-col md:flex-row justify-between  md:p-6 items-center'>
                    <div>
                        <button className='mt-3 px-3 get-started__button-white  text-sm bg-white text-black py-2 font-bold'>
                            <a href='/'>Download Mobile App <span className='px-2 '><IoLogoGooglePlaystore className='inline' /></span></a>
                        </button>
                    </div>
                    <div className='md:w-3/4'>
                        <form >
                            <div className='md:w-3/5  px-4 '>
                                <p className="text-center"> Subscribe to our Newsletter</p>
                                <input className='w-full py-2 md:py-3 md:w-2/3 text-black mr-3' type='email' placeholder='Enter Email' width={'50px'} />
                                <button className="primary-color-yellow  py-2
                                shadow-lg mt-2 px-4 text-white text-lg 
                                rounded-xl font-semibold">
                                    Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
