import React from 'react';
import HeaderNav from '../../components/headerNav/HeaderNav';
import MainNav from '../../components/mainNav/MainNav';
import "./test-score.scss"

const TestScore = () => {
    return (
        <div>
            <HeaderNav />
            <MainNav />
            <div className='score'>
                <h1>Test Score</h1>
                <h2>Course/Subject</h2>
                <div className="score__text">
                    <span className='score__percentage'>80%</span>
                    <div className="score__timer">
                        <span>Time Spent</span>
                        <span className='score__timer-count'>42 min 30 secs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestScore;
