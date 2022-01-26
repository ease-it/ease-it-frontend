import React, { useState } from 'react';
import base from "../../axios.config"
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import easeItpng from '../../assets/ease-it.svg';
import "./signup.scss"

const SignUp = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: '',
        email: '',
        sch_org: '',
        sch_org_id: '',
        password: '',
        c_password: '',
    })
    const [loading, setLoading] = useState(false)
    console.log(details)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const config = {
            headers: {
                Accept: '*/*',
                'content-type': 'application/Json'
            }
        }

        base.post('/signup', JSON.stringify(details), config)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                navigate("/")
                console.log(err)
            })
    }

    return (
        <div className="signUp">
            <img src={easeItpng} alt="Ease-It Logo" />
            <h1 className='signUp__heading'>Sign Up</h1>
            <div className="signUp__form-container">
                <form className="signUp__form"  >
                    <input type="text" name="name" placeholder="Full name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} required />
                    <input type="text" name="email" placeholder="Email Address" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} required />
                    <select name="category" >
                        <option name="category" value={details.category} onChange={() => setDetails({ ...details, category: 'teacher' })}>Teacher</option>
                        <option name="category" value={details.category} onChange={() => setDetails({ ...details, category: 'student' })} >Student</option>
                    </select>
                    <input type="text" name="sch_org" placeholder="School/Organization" value={details.sch_org} onChange={(e) => setDetails({ ...details, sch_org: e.target.value })} />
                    <input type="text" name="sch_org_id" placeholder="School/Organization ID" value={details.sch_org_id} onChange={(e) => setDetails({ ...details, sch_org_id: e.target.value })} />
                    <input type="password" name="password" placeholder="Password" value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} required />
                    <input type="password" name="c_password" placeholder="Confirm Password" value={details.c_password} onChange={(e) => setDetails({ ...details, c_password: e.target.value })} required />
                    <button className="signUp__form-submit" type="submit" onClick={handleSubmit} name="signUp">Sign Up</button>

                    {loading && <Loading />}
                </form>
                <a href="/login" className="signUp__account" type="button" >Already have an account? Click here</a>
            </div>
        </div>

    )

}


export default SignUp;