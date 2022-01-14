import React,{useState} from 'react';
import '../assets/css/pages/signUp.css';
import easeItpng from '../assets/images/ease-it-logo.png'

const SignUp = () => {

    const [details, setDetails] = useState({
        fullname:'',
        email: '',
        organization:'',
        category: '',
        schoolID : '',
        password: '',
        confirmPassword: '',
    })
  
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
            <div className="container">
            <p><img src={easeItpng} alt="Ease-It Logo" ></img></p>
               <h1>Sign Up</h1>
            <div className="signUp">
                <form className="form" >
                <p>
                <input className="input" type="text" name="fullName" placeholder="Full name" value={details.fullname} onChange={(e)=> setDetails({...details, fullname: e.target.value})}  required ></input>
                </p>
                <p>
                <input className="input" type="text"  name="email"  placeholder="Email Address" value={details.email} onChange={(e)=>setDetails({...details, email: e.target.value})} required ></input>
                </p>
               <p>
               <input className="input" type="text" name="organization"  placeholder="School/Organization" value={details.organization} onChange={(e)=>setDetails({...details, organization: e.target.value})} ></input>  
               </p>
               <p>
               <select className="input" name="category" >
                    <option name="category" value={details.category} onChange={()=>setDetails({...details, category: 'teacher'})}  >Teacher</option>
                    <option name="category" value={details.category} onChange={()=>setDetails({...details,category: 'student'})} >Student</option>
                </select>
               </p>
               <p>
               <input className="input" type="text" name="schoolID" placeholder="School/Organization ID" value={details.schoolID} onChange={(e)=>setDetails({...details, schoolID: e.target.value})} ></input>
               </p>
               <p>
               <input className="input" type="password" name="password" placeholder="Password" value={details.password} onChange={(e)=>setDetails({...details, password:e.target.value})} required ></input>
               </p>
                <p>
                <input className="input" type="password" name="confirmPassword" placeholder="Confirm Password" value={details.confirmPassword} onChange={(e)=>setDetails({...details, confirmPassword: e.target.value})} required ></input>
                </p>     
                <div>
                <button disabled={!details.fullname || !details.email || details.organization || !details.password || details.password !== details.confirmPassword} className="btn" type="submit" onClick={handleSubmit} name="signUp" value="submit" >SIGN UP</button>
                </div>
                </form>
                <div>
                    <button className="btn2"  type="button" >Already have an account? Click here</button>
                </div>
                </div>
               
            </div>
        
    )

}


export default SignUp;