import React from 'react'
import '../assets/css/components/Community.css'
import { IoLogoGooglePlaystore } from "react-icons/io5"
const Community = () => {
    return (
        <div className='community--header primary-color-blue__background flex flex-col '>
            <div className='community flex flex-col justify-center items-center'>
                <div>
                    <h3>Join our community of Ease-it users. </h3>
                    <h3>With us, you can only get better.</h3>
                </div>
                </div>
            <div className='text-center '>
                <h3>Subscribe to our Newsletter</h3>
                <div className='flex  justify-between '>
                    <div>
                        <button className='mt-3 px-3 get-started__button-white  text-sm bg-white text-black py-2 font-bold'>
                            <a href='/'>Download Mobile App <span className='px-2 '><IoLogoGooglePlaystore className='inline' /></span></a>
                        </button>
                    </div>
                    <div>
                        <form>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
