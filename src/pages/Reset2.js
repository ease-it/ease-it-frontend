import React from 'react'

const Reset2 = () => {
    return (
        <div>
            <body className="box-border overflow-x-hidden font-monteserrat text-black bg-clr-5 tracking-wide">
                <div className="w-full h-full my-0 mx-auto flex flex-col justify-around lg:w-10/12">
                    <img className="mt-8 self-center drop-shadow-lg xsm:logo-img 3sm:logo-img2 3sm:self-start 3sm:w-24 3sm:ml-6 2xl:ml-28 4xl:w-2/4"
                        src="./ease-it 1.svg" alt="ease-it logo" />
                    <main
                        className="flex flex-col justify-center m-6 3sm:mx-14 3sm:my-4 md:self-center md:mx-20 1md:mx-24 2md:mx-32 2md:my-0 2md:self-center 4md:my-0 4md:mx-0 ">
                        <h2
                            className="self-start font-serif_display text-clr-2 drop-shadow-md font-semibold pb-2 tracking-wider xsm:text-lg 2sm:text-xl lg:text-left 2xl:text-2xl 3xl:mb-4 4xl:my-4 4xl:text-5xl">
                            Reset Password</h2>
                        <section
                            className="bg-clr-3 rounded-lg p-4 pb-12 font-semibold drop-shadow-md tracking-wider xsm:text-xs sm:pb-20 2sm:text-sm 4md:pb-24 2md:reset-card2 3md:reset-card 2xl:text-base 2xl:pb-24 2xl:w-full 4xl:text-xl 4xl:h-full">
                            <form className="flex flex-col justify-start items-center">
                                <p className="mt-2 paragraph text-center pb-4 2sm:mx-2 2xl:pb-2 2xl:m-4">Enter the 6 digit code sent to
                                    the email provided to continue</p>
                                <div className="flex justify-center 2sm:pb-4">
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                    <input
                                        className="inline-flex bg-clr-3 border-clr-2/40 border m-px outline-0 shadow-lg text-center xsm:w-6 xsm:h-6 2sm:w-8 2sm:h-8 md:m-1 md:w-9 md:h-9"
                                        type="" name="code" />
                                </div>
                                <input
                                    className="self-center bg-clr-2 text-white uppercase drop-shadow-lg p-1 mt-5 tracking-widest xsm:w-3/4 sm:w-3/5 2sm:p-2 md:w-3/5 2md:text-sm 2xl:text-lg"
                                    type="button" value="Submit" />
                                <p className="mt-2 xsm:pt-4 pb-0 3xl:mx-8">Didn't receive any code?</p>
                                <input className=" self-center bg-clr-2 text-white uppercase drop-shadow-lg p-1 mt-5 tracking-widest
                        xsm:w-3/4 sm:w-3/5 2sm:p-2 md:w-3/5 2md:text-sm 2xl:text-lg bg-white text-clr-2 font-semibold
                        tracking-normal 3md:font-black" type="button" value="Resend Code" />
                            </form>
                        </section>
                        <a className="self-center border border-black/50 font-black mt-4 mx-2 p-1 text-center xsm:text-xxs sm:text-xs 2sm:p-2 2sm:px-8 2sm:text-sm 3sm:px-12 xl:py-2 2xl:text-lg"
                            href="#">Don't have an account?<span className="text-clr-2 font-extrabold 3md:font-black"> Click
                                Here</span></a>
                    </main>
                </div>
            </body>
        </div>
    )
}

export default Reset2
