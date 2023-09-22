import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"


export default function Login() {
  const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const logIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(()=> navigate("/home"))
        .catch((err)=>alert("invalid username and password\n\nCreate and account to continue"))
    }
  return (
  
      <div className="flex flex-col h-screen items-centerg text-black justify-center log-in-container bg-slate-50">
           <h2 className='text-3xl font-bold mb-3'>Log In</h2>
        <form onSubmit={logIn} className="text-center space-y-5" >
          <div>
            <label htmlFor="email" className="block" >Email</label>
            <input
            className="w-80  border px-3 py-1  "
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            
            />
          </div>
          <div >
            <label htmlFor="password" className="block">Password</label>
            <input
            className="w-80  border  px-3 py-1 "
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}

              placeholder="password"
            />
          </div>
          <div><button type="submit" className="bg-green-600 text-white w-72 h-9 rounded-md" >Log In</button></div>
          <div><p>Dont have an account? <a  href="" className="text-blue-500"   onClick={()=>navigate(`/signUp`)} >signUp</a></p></div>
        </form>
       
      </div>
  
  );
}
