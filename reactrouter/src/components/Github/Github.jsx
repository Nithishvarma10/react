import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Nithishvarma10')
        .then(res=>res.json())
        .then(gitdata=>{
            
            setdata(gitdata);
        })

    },[])
  return (
    <>

    <div className= 'text-center bg-green-400 m-4 text-black '>Github Followers:{data.name}</div>
    <img src={data.avatar_url} width={300}></img>
    </>
  )
}

export default Github