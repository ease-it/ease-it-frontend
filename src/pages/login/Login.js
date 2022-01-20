import React, { useState } from 'react'
import "./login.scss"
import base from "../../axios.config"
import { GrFacebook } from "react-icons/gr"
import { GrGoogle } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import easeItpng from '../../assets/images/ease-it-logo.png';



const Login = () => {
    const [inputDetails, setInputDetails] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = e => {
        e.preventDefault();

        base.get("/signup")
            .then(res => {
                // check if email and password from endpoint match the one stored in the state here.

                console.log(res)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='login'>
            <img src={easeItpng} alt="ease-it logo" />
            <h1 className='login__heading'>Login to Ease-it</h1>

            <div className='login__form-box'>
                <div className='login__teacher'>
                    <p>If you are a teacher, lecturer or trainer, search for your school or organisation here and tap the link to access the login page.</p>
                    <select name="organization">
                        <option value="">School/organization </option>
                    </select>
                    <button className='login__btn'>Continue</button>
                </div>

                <form className='login__student'>
                    <p>For Students and trainees.</p>
                    <input type="email" name="email" placeholder="Email Address" onChange={e => setInputDetails({ ...inputDetails, email: e.target.value })} required />
                    <input type="password" name="password" placeholder="Password" onChange={e => setInputDetails({ ...inputDetails, password: e.target.value })} required />
                    <div className='login__remember'>
                        <div>
                            <input type="checkbox" name="remember" /> <span>Remember me</span>
                        </div>
                        <a href="/" className='login__remember-pswd'>Forgot Password?</a>
                    </div>
                    <button className='login__btn' onClick={handleSubmit}>Login</button>
                    <span className='login__options'>Or login with </span>
                    <span className='login__socials'>
                        <GrFacebook />
                        <GrGoogle style={{ margin: "auto 2rem" }} />
                        <GrLinkedin />
                    </span>
                </form>

            </div>
            <div className='login__account-box'>
                <a href="/" className='login__account'> <span>Don't have an account?</span> click here</a>
            </div>

        </div>
    )
}

export default Login