import React from 'react'
import HeaderNav from "../../components/headerNav/HeaderNav"
import MainNav from "../../components/mainNav/MainNav"
import Community from "../../components/community/Community"
import Footer from "../../components/footer/Footer"
import { GrEdit } from "react-icons/gr"
import { GrUser } from "react-icons/gr"
import { GrPlay } from "react-icons/gr"
import { GrTask } from "react-icons/gr"
import { GrCheckmark } from "react-icons/gr"
import { GrLogout } from "react-icons/gr"
import "./dashboard.scss"

const Dashboard = () => {
    return (
        <div>
            <HeaderNav />
            <MainNav />

            <div className='dashboard'>
                <nav className="dashboard__sidebar">
                    <h1 className='dashboard__heading'>Dashboard</h1>
                    <ul className="dashboard__sidenav">
                        <li className="dashboard__sidenav-item">
                            <a href="/test" className='dashboard__sidenav-link'>
                                <GrTask className='dashboard__sidenav-icon' />
                                <span>Take a quiz</span>
                            </a>
                        </li>
                        <li className="dashboard__sidenav-item">
                            <a href="/attendance" className='dashboard__sidenav-link'>
                                <GrCheckmark className='dashboard__sidenav-icon' />
                                <span>Attendance</span>
                            </a>
                        </li>
                        <li className="dashboard__sidenav-item">
                            <a href="/" className='dashboard__sidenav-link'>
                                <GrPlay className='dashboard__sidenav-icon' />
                                <span>Tutorials</span>
                            </a>
                        </li>
                        <li className="dashboard__sidenav-item">
                            <a href="/upload-assignment" className='dashboard__sidenav-link'>
                                <GrEdit className='dashboard__sidenav-icon' />
                                <span>Assignment</span>
                            </a>
                        </li>
                        <li className="dashboard__sidenav-item">
                            <a href="/result" className='dashboard__sidenav-link'>
                                <GrUser className='dashboard__sidenav-icon' />
                                <span>Results</span>
                            </a>
                        </li>
                        <li className="dashboard__sidenav-item">
                            <a href="/login" className='dashboard__sidenav-link'>
                                <GrLogout className='dashboard__sidenav-icon' />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <main className="dashboard__content">
                    <div className="dashboard__tutorial">
                        <h3>Tutorials</h3>
                        <video controls poster="video.svg">
                            <source src="#" type="video/mp4" />
                            <source src="#" type="video/webm" />
                        </video>
                    </div>

                    <div className="dashboard__summary">
                        <div className='dashboard__summary-content'>
                            <h4>Tutorials 1</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <button>Learn More</button>
                        </div>
                        <div className='dashboard__summary-content'>
                            <h4>Tutorials 2</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </main>
            </div>
            <Community />
            <Footer />
        </div>
    )
}

export default Dashboard
