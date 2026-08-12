import { useState } from 'react'



function App() {
// const red = () => {

//     document.body.style.backgroundColor = "red";

//   };
//   const yel=()=>{
//      document.body.style.backgroundColor = "yellow";
//   };
const [color,setc]=useState("white");


  return (
    <div style={{backgroundColor: color, height:"100vh"}}>
     {/* <button onClick={red}>red</button>
      <button onClick={yel}>yellow</button> */}
      <button className='bg-green-400' onClick={()=>setc("red")}>red</button>
      <button onClick={()=>setc("blue")}>blue</button>
      <button onClick={()=>setc("green")}>green</button>
      <button onClick={()=>setc("orange")}>orange</button>
      <button onClick={()=>setc("pink")}>pink</button>
      <button onClick={()=>setc("white")}>white</button>
    </div>
  )
}

export default App
