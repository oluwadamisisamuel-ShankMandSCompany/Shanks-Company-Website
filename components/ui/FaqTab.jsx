"use client"
import {useState } from "react"
import { PiPlus } from "react-icons/pi";


function FaqTab({question}) {
 const [answerOpen, setAnswerOpen] = useState(false)
  return (
    <div onClick={()=> setAnswerOpen(prev => !prev)} className='flex justify-between  items-center border-b border-[#9F9F9F] py-6 pr-[90px] text-black cursor-pointer'>
        <div>
            <p className='font-[Figtree] text-lg font-medium'>{question}</p>
            <div
            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${answerOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="font-[Figtree] text-sm max-w-[800px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
                    possimus quo molestiae sequi quam animi asperiores rem nisi facere
                    adipisci expedita dolorem eveniet! Minus a omnis consequatur animi
                    obcaecati veritatis!
                </p>
            </div>
        </div>

        <PiPlus className={`text-[20px] transform:rotate transition-all duration-300 ${answerOpen ? "rotate-360" : "rotate-0"}` } />
    </div>
      
  )
}

export default FaqTab
