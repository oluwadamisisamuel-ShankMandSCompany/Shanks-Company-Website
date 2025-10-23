
import { PiPlus } from "react-icons/pi";


function FaqTab({faq, index, openIndex, handleToggle}) {

    const isOpen = openIndex === index;

  return (
    <div onClick={() => handleToggle(index)} className='flex justify-between  items-center border-b border-[#9F9F9F] py-6 pr-[90px] text-black cursor-pointer'>
        <div>
            <p className='font-[Figtree] text-lg font-medium mb-3'>{faq.question}</p>
            <div
            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
             {faq.answer ? (
                <p className="font-[Figtree] text-sm max-w-[760px] mt-2">
                {faq.answer}
                </p>) 
                : (<p className="font-[Figtree] text-sm max-w-[760px] mt-2">
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
                    possimus quo molestiae sequi quam animi asperiores rem nisi facere
                    adipisci expedita dolorem eveniet! Minus a omnis consequatur animi
                    obcaecati veritatis!
                </p>)}   
            </div>
        </div>

        <PiPlus className={`text-[20px] transform:rotate transition-all duration-300 ${isOpen ? "rotate-45" : "rotate-0"}` } />
    </div>
      
  )
}

export default FaqTab
