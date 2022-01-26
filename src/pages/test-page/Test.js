import React from 'react'
import HeaderNav from "../../components/headerNav/HeaderNav"
import MainNav from "../../components/mainNav/MainNav"
import "./test.scss"

const Test = () => {
    return (
        <div>
            <HeaderNav />
            <MainNav />
            <div className='test'>
                <h1> Test Questions</h1>
                <div className="test__number">
                    <span> 1 of 25</span>
                    <div className="test__timer">
                        <span className='test__timer-left'>Time left</span>
                        <span className='test__timer-count'>44 mins 45 secs </span>
                    </div>
                </div>
                <div className="test__question">
                    <form>
                        <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque?</p>
                        <div className="test__answer">
                            <div>
                                <input type="radio" name="answer" id="answer-1" />
                                <label for="answer-1">A. River</label>
                            </div>
                            <div>
                                <input type="radio" name="answer" id="answer-2" />
                                <label for="answer-2">B. Ocean</label>
                            </div>
                            <div>
                                <input type="radio" name="answer" id="answer-3" />
                                <label for="answer-3">C. Lake</label>
                            </div>
                            <div>
                                <input type="radio" name="answer" id="answer-4" />
                                <label for="answer-4">D. Stream</label>
                            </div>
                        </div>

                        <div className="test__submit">
                            <button type="submit" className='test__submit-next'>Next</button>
                            <button type="submit" className='test__submit-skip'>Skip</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Test
