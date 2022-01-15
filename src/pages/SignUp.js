import React,{useState} from 'react';
import axios from 'axios'
import '../assets/css/pages/signUp.css';
import easeItpng from '../assets/images/ease-it-logo.png';
import {Loading} from '../components/Loading'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name:'',
        email: '',
        sch_org:'',
        sch_org_id: '',
        password: '',
        c_password: '',
    })
    const [loading, setLoading]  = useState(false)
    console.log(details)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const config = {
            headers: { 
                Accept: '*/*',
                'content-type':'application/Json'
        }
        }
        
        axios.post('https://easeit.herokuapp.com/api/signup', JSON.stringify(details), config)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch (err =>
            {
                navigate("/")
                console.log(err)
            })
    }

    return (
            <div className="container">
            <p><img src={easeItpng} alt="Ease-It Logo" ></img></p>
               <h1>Sign Up</h1>
            <div className="signUp">
                <form className="form"  >
                <p>
                <input className="input" type="text" name="name" placeholder="Full name" value={details.name}  onChange={(e)=> setDetails({...details, name: e.target.value})}  required ></input>
                </p>
                <p>
                        <input className="input" type="text" name="email" placeholder="Email Address" value={details.email} onChange={(e)=>setDetails({...details, email: e.target.value})} required ></input>
                </p>
               <p>
                        <input className="input" type="text" name="sch_org" placeholder="School/Organization" value={details.sch_org} onChange={(e)=>setDetails({...details, sch_org: e.target.value})} ></input>  
               </p>
               <p>
               <select className="input" name="category" >
                    <option name="category" value={details.category} onChange={()=>setDetails({...details, category: 'teacher'})}  >Teacher</option>
                    <option name="category" value={details.category} onChange={()=>setDetails({...details,category: 'student'})} >Student</option>
                </select>
               </p>
               <p>
                        <input className="input" type="text" name="sch_org_id" placeholder="School/Organization ID" value={details.sch_org_id} onChange={(e)=>setDetails({...details, sch_org_id: e.target.value})} ></input>
               </p>
               <p>
                        <input className="input" type="password" name="password" placeholder="Password" value={details.password} onChange={(e)=>setDetails({...details, password:e.target.value})} required ></input>
               </p>
                <p>
                        <input className="input" type="password" name="c_password" placeholder="Confirm Password" value={details.c_password} onChange={(e)=>setDetails({...details, c_password: e.target.value})} required ></input>
                </p>     
                <div>
                        <button   className="btn bg-blue-800 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed" type="submit" onClick={handleSubmit} name="signUp" value="submit" >SIGN UP</button>
                </div>
                    {loading && <Loading /> }
                </form>
                <div>
                    <button className="btn2"  type="button" >Already have an account? Click here</button>                   
                </div>
                </div>
               
            </div>
        
    )

}


export default SignUp;