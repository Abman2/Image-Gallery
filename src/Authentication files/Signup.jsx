
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const signUp =(e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then ((userCredential)=> console.log(userCredential))
        .catch((err)=>alert(err));
    }
   
  return (
    <div className="flex flex-col h-screen items-center text-black justify-center  bg-slate-50">
        <h2 className='text-3xl font-bold mb-3'>Sign Up</h2>
        <form action="submit" onSubmit={signUp} className="text-center space-y-5" >
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
              onChange={(e) => setPassword(e.target.value)}

              placeholder="password"
            />
          </div>
          <div><button type="submit" className="bg-green-600 text-white w-72 h-9 rounded-md" >Sign Up</button></div>
          <div><p>Dont have an account? <a href="" className="text-blue-500"   onClick={()=>navigate(`/Image-Gallery`)}>signIn</a></p></div>

        </form>
      </div>
  
  
  )
}

export default Signup