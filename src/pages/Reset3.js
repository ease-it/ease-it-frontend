import React from 'react'

const Reset3 = () => {
    return (
        <div>
            <body className="box-border overflow-x-hidden font-monteserrat text-black bg-clr-5 tracking-wide">
                <div className="w-full h-full my-0 mx-auto flex flex-col justify-around  lg:w-10/12">
                    <img className="mt-8 self-center drop-shadow-lg xsm:logo-img 3sm:logo-img2 3sm:self-start 3sm:w-24 3sm:ml-6 2xl:ml-28 4xl:w-2/4"
                        src="./ease-it 1.svg" alt="ease-it logo" />
                    <main
                        className="flex flex-col justify-center m-6 3sm:mx-14 3sm:my-4 md:self-center md:mx-20 1md:mx-24 2md:mx-32 2md:my-0 2md:self-center 4md:my-0 4md:mx-0">
                        <h2
                            className="self-start font-serif_display text-clr-2 drop-shadow-md font-semibold pb-2 tracking-wider xsm:text-lg 2sm:text-xl lg:text-left 2xl:text-2xl 4xl:my-4 3xl:mb-4 4xl:text-5xl">
                            Reset Password</h2>
                        <section
                            className="bg-clr-3 rounded-lg p-4 pb-12 font-semibold drop-shadow-md tracking-wider xsm:text-sm sm:pb-14 2sm:pb-32 2sm:text-sm 2md:reset-card2 3md:reset-card 2xl:text-base 2xl:pb-24">
                            <div className="form-wrapper">
                                <form className="w-full flex flex-col justify-start sm:px-4 2sm:px-8 3sm:px-10 md:px-10 3md:px-20">
                                    <p className="mt-2 text-left">Enter new password</p>
                                    <input
                                        className="pwd-input  bg-clr-3 border border-black/50 font-normal text-xs outline-none placeholder:text-black placeholder:font-bold placeholder:tracking-wider my-3 p-2 2xl:text-base"
                                        type="password" name="password" placeholder="Password" />
                                    <input
                                        className="pwd-input bg-clr-3 border border-black/50 font-normal text-xs outline-none placeholder:text-black placeholder:font-bold placeholder:tracking-wider my-3 p-2 2xl:text-base"
                                        type="password" name="password" placeholder="Confirm Password" />
                                    <input className="w-full bg-clr-2 text-white uppercase drop-shadow-lg p-2 mt-8 tracking-widest 2sm:p-2
                            2md:text-sm 2xl:text-lg bg-clr-3 border border-black/50 font-normal text-xs outline-none
                            placeholder:text-black placeholder:font-bold placeholder:tracking-wider my-3 p-2
                            2xl:text-base" type="button" value="Submit" />
                                </form>
                            </div>
                        </section>
                        <div
                            className="self-center border border-black/50 font-black mt-4 mx-2 p-1 text-center xsm:text-xxs sm:text-xs sm:px-px 2sm:p-2 2sm:px-8 2sm:text-sm 3sm:px-2 3sm:w-9/12 2md:mx-2 3md:w-8/12 xl:py-2 2xl:text-lg">
                            <a href="#">Don't have an account?<span className="text-clr-2 font-extrabold"> Click Here</span></a>
                        </div>
                    </main>
                </div>
            </body>

        </div>
    )
}

export default Reset3
