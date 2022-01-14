import React,{useState} from 'react';
import '../assets/css/pages/signUp.css';
import easeItpng from '../assets/images/ease-it-logo.png'

const SignUp = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrgainzation] = useState('');
    const [category, setCategory] = useState('')
    const [schoolID, setSchoolID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  
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
                <input className="input" type="text" name="fullName" placeholder="Full name" value={fullname} onChange={(e)=> setFullname(e.target.value)}  required ></input>
                </p>
                <p>
                <input className="input" type="text"  name="email"  placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required ></input>
                </p>
               <p>
               <input className="input" type="text" name="organization"  placeholder="School/Organization" value={organization} onChange={(e)=>setOrgainzation(e.target.value)} ></input>  
               </p>
               <p>
               <select className="input" name="category" >
                    <option name="category" value={category} onChange={()=>setCategory({categoy: 'teacher'})}  >Teacher</option>
                    <option name="category" value={category} onChange={()=>setCategory({categoy: 'student'})} >Student</option>
                </select>
               </p>
               <p>
               <input className="input" type="text" name="schoolID" placeholder="School/Organization ID" value={schoolID} onChange={(e)=>setSchoolID(e.target.value)} ></input>
               </p>
               <p>
               <input className="input" type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required ></input>
               </p>
                <p>
                <input className="input" type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required ></input>
                </p>     
                <div>
                <button disabled={!fullname || !email || !password ||  password !== confirmPassword} className="btn" type="submit" onClick={handleSubmit} name="signUp" value="submit" >SIGN UP</button>
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