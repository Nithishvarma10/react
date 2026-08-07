
import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setlen]=useState(6);
const [number,numberallow]=useState(false);
const[character,charallow]=useState(false);
const [passwor,setpass]=useState("");
const passgen=useCallback(()=>{
  console.log("Number:", number);
console.log("Character:", character);
let pass="";
let str="";
 str="ABCDEFGHIJKLHMNOPARSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(number) str+="0123456789"
if(character) str+="[]{}&^%$#*()"
for(let i=0;i<length;i++){
  let char=Math.floor(Math.random()*str.length);
  pass+=str.charAt(char);
  

}
setpass(pass);
},[length,number,character]);
useEffect(()=>{
passgen()
},[passgen]);
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-[700px] bg-slate-800 rounded-3xl p-8">

       

        <h1 className="text-5xl text-white text-center font-medium mb-10">

          Password generator

        </h1>

        

        <div className="flex overflow-hidden rounded-2xl">

          <input

            type="text"

            placeholder="Password"
            value={passwor}
            readOnly

            className="flex-1 bg-white text-orange-500 text-4xl px-6 py-4 outline-none"

          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-3xl px-8 transition">

            copy

          </button>

        </div>


        <div className="flex items-center gap-6 mt-10 text-orange-500 text-2xl">


          <input

            type="range"

            min={6}

            max={30}

            value={length}

            className="cursor-pointer"
            onChange={(e)=>setlen(Number(e.target.value))

            }

          />

          <span>Length: {length}</span>

        \

          <label className="flex items-center gap-2">

            <input type="checkbox"
            checked={number}
            onChange={()=>numberallow((prev)=>!prev)}/>

            Numbers

          </label>

        

          <label className="flex items-center gap-2">

            <input type="checkbox" 
            checked={character}
            onChange={()=>charallow((prev)=>!prev)}/>

            Characters

          </label>

        </div>

      </div>

    </div>
  )
}

export default App
