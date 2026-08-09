import React from 'react'
import { useId } from 'react'

function Input({
    label,
    amount,
    amountchange,
    currencychange,
    currencyopt=[],
    selectcurrency="usd",
    amountdis=false,
    currrencydis=false,




    
    className = ""}){
        const aid=useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  htmlFor={aid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdis}
                    value={amount}
                    onChange={(e)=>{
                        amountchange && amountchange(Number(e.target.value))
                    }}
                    id={aid}
                    

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                     value={selectcurrency}
                     disabled={currrencydis}
                     onChange={(e)=>{
                        currencychange && currencychange(e.target.value)
                     }}
                >
                   
                      { currencyopt.map(currency => (
                         <option key={currency} value={currency}>
                            {currency}

                         </option >

                       )

                       )}
                
                </select>
            </div>
        </div>
  )
}

export default Input