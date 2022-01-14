import React from 'react'
import HeaderNav from "../components/HeaderNav"
import MainNav from "../components/MainNav"

const Test = () => {
    return (
        <div>
            <HeaderNav />
            <MainNav />
            <body className="box-border font-monteserrat text-clr-2  bg-clr-5">
                <div className="flex flex-col 
                            4md:grid 4md:grid-cols-12">
                    <header className="bg-clr-3 
                            1md:pl-10 1md:pr-3
                            4md:col-span-12 4md:grid 4md:grid-cols-12">
                        <div className="flex justify-between m-2 
                            xsm:justify-evenly m-3
                            smx:justify-between
                            sm:mx-4 
                            2sm:mx-8 2sm:p-2
                            4md:col-start-2 4md:col-end-13 4md:mx-0 1md:pl-0">
                            <button className="bg-clr-4 rounded-md drop-shadow-lg m-1 p-1 text-white text-xs tracking-wider
                            sm:text-xs sm:p-2
                            1md:px-1 1md:py-1 1md:tracking-widest 1md:ml-0 1md:text-base
                            4md:rounded-xl 4md:p-2">Country/Region ⌵</button>
                            <div className="self-center flex font-bold text-clr-2 text-xs 
                            xsm:flex-col text-right
                            sm:flex-row text-center tracking-wider
                            2sm:text-sm 2sm:font-bold
                            1md:text-base
                            4md:mr-4">
                                <a className="mr-0
                            smx:mr-2
                            1md:ml-4" href="#">Support</a>
                                <a className="mr-0
                            smx:mr-2
                            1md:ml-4" href="#">Contact Us</a>
                            </div>
                        </div>
                    </header>
                    <nav className="flex justify-between bg-white drop-shadow-xl p-3 
                            2sm:px-10
                            1md:drop-shadow-lg 1md:pl-14 1md:pr-10
                            4md:grid 4md:grid-cols-12 4md:col-span-12 4md:pr-8">
                        <div className="flex justify-between
                            1md:mx-4 1md:ml-0 1md:mr-12
                            2md:ml-10
                            4md:col-start-1 4md:col-end-13 4md:mx-4 4md:ml-10 4md:mr-0">
                            <img className="h-14 self-center
                            4md:col-start-2 4md:col-end-3" src="./ease-it 1.jpg" alt="ease-it logo" />
                            <div className="self-center uppercase 
                            4md:col-start-4 4md:col-end-13">
                                <ul className="absolute flex flex-col items-center top-20 right-0 bg-white w-full p-1 drop-shadow-lg 
                            xsm:flex
                            2sm:w-48 2sm:items-end
                            1md:p-0 
                            4md:drop-shadow-none 4md:flex 4md:static 4md:top-0 4md:w-auto 4md:flex-row">
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                            2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                            2md:tracking-wider
                            4md:m-0 4md:self-center 4md:p-0 4md:mr-2">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                            2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                                    2md:tracking-wider
                        4md:m-0 4md:self-center 4md:p-0 4md:mr-2">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                        2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                        2md:tracking-wider
                        4md:m-0 4md:self-center 4md:p-0 4md:mr-2">
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                        2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                        2md:tracking-wider
                        4md:m-0 4md:self-center 4md:p-0 4md:mr-2"><a href="#">Resources</a>
                                    </li>
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                        2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                        2md:tracking-wider
                        4md:m-0 4md:self-center 4md:p-0 4md:mr-2">
                                        <a className="mr-1" href="#">News & Events</a>
                                    </li>
                                    <li className="p-2 px-1 mt-2 text-xs font-bold tracking-wider hover:border-b-4 hover:border-clr-4 hover:-mb-1   
                        2sm:mr-6 2sm:px-2 2sm:tracking-wide 
                        2md:tracking-wider
                        4md:m-0 4md:self-center 4md:p-0 4md:mr-2">
                                        <a href="#">Search <i
                                            className="fa fa-search self-center text-clr-2 font-medium text-center text-sm p-1 bg-clr-3 rounded-3xl"
                                            aria-hidden="true"></i></a>
                                    </li>
                                    <li className="move">
                                        <button className="justify-self-center text-xs text-white text-center 
                        bg-clr-4 rounded-xl shadow-lg tracking-wider mt-3 p-1 
                        1md:mr-7
                        1md:m-1
                        4md:mr-0 4md:p-2">Signup?Login</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="self-center flex flex-col justify-evenly bg-none mt-3 h-7 w-8 cursor-pointer
                        1md:col-start-11 1md:col-end-12 
                        1md:row-start-1 1md:row-end-2
                        4md:hidden">
                            <div className="border border-clr-2 rounded-xl"></div>
                            <div className="border border-clr-2 rounded-xl"></div>
                            <div className="border border-clr-2 rounded-xl"></div>
                        </div>
                    </nav>
                    <main className="mx-4 mt-2 ml-10 flex flex-col font-serif_display justify-between h-full 
                        2sm:mt-6 2sm:mx-10 
                        md:justify-around
                        1md:pl-10 1md:pr-8
                        4md:col-start-2 4md:col-end-12 4md:mx-0">
                        <div className="flex flex-col-reverse mt-0 mb-3 filter-none 
                        2sm:flex-row 2sm:justify-between
                        1md:mb-0">
                            <div className="test-details">
                                <h1 className="font-bold text-xl tracking-wider mt-4">Test Questions</h1>
                                <p className="text-sm font-semibold tracking-widest">25 0f 25</p>
                            </div>
                            <div className="self-end font-monteserrat text-xs font-medium italic tracking-wide mb-4 drop-shadow-lg filter-none
                        2sm:mb-0
                        3sm:mr-0
                        1md:mr-0">
                                <p className="text-clr-4 text-center">Time left</p>
                                <p className="bg-clr-4 text-white text-xxs tracking-wider px-2 py-1
                        3sm:text-xs">44mins 45sec</p>
                            </div>
                        </div>
                        <section className="text-black">
                            <form action="">
                                <p className=" my-2 
                        2sm:my-6">1. Id bibendum ut neque id. Habitasse fringilla in nisi, auctor et?</p>
                                <div className="ml-4">
                                    <input type="radio" name="option" id="river" value="River" />
                                    <label for="river"> A. River</label>
                                </div>
                                <div className="ml-4">
                                    <input type="radio" name="option" id="river" value="River" />
                                    <label for="river"> B. River</label>
                                </div>
                                <div className="ml-4">
                                    <input type="radio" name="option" id="river" value="River" />
                                    <label for="river"> C. River</label>
                                </div>
                                <div className="ml-4">
                                    <input type="radio" name="option" id="river" value="River" />
                                    <label for="river"> D. River</label>
                                </div>
                                <div className="flex flex-col mt-10
                        md:flex-row">
                                    <button className="bg-clr-2 text-white tracking-wider drop-shadow-lg rounded 
                        xsm:text-xs xsm:font-medium
                        smx:w-52 smx:px-0 smx:py-0 smx:-ml-3 
                        sm:w-max sm:px-6 sm:py-2 sm:rounded-xl
                        2sm:px-8 2sm:mr-6 2sm:rounded-2xl">Finish & Submit</button>
                                    <button className="bg-clr-2 text-white tracking-wider drop-shadow-lg rounded 
                        xsm:text-xs xsm:font-medium
                        smx:w-52 smx:px-0 smx:py-0 smx:-ml-3 
                        sm:w-max sm:px-6 sm:py-2 sm:rounded-xl
                        2sm:px-8 2sm:mr-6 2sm:rounded-2xl bg-clr-3 text-clr-2">Check Unanswered Questions</button>
                                </div>
                            </form>
                        </section>
                    </main>
                </div>
            </body>
        </div>
    )
}

export default Test
