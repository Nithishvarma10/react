import React, { useState,useContext } from 'react'
import Usercontext from '../context/Usercontext';

function Login() {
    const [username,setusername]=useState('');
    const [password,setpass]=useState('');
    const {setUser}=useContext(Usercontext)
    const handle=(e)=>{
        e.preventDefault()
        setUser({username,password});


    }
  return (

    <>
    <h2>Login page</h2>
    <input type='text' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}/>
    <input type ='text' placeholder='password' value={password} onChange={(e)=>setpass(e.target.value)}/>
    <button onClick={handle}>Submit</button>
    </>
  )
}

export default Login