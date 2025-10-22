import React from 'react'

function InfiniteCarousel() {

  const languages = ["PHP","Python","Ruby","React-Native","Kotlin","Java","React",".Net","Node.Js", ]
  return (
         <div className="mt-10 overflow-hidden bg-[#E60509] text-white group">
            <div className="flex justify-center gap-1 md:gap-3 py-3 w-max  font-bold [animation:scroll_10s_linear_infinite] ">
                {/* group-hover:[animation-play-state:paused] */}

                {languages.map((lang, index) => (
                 <div key={index} className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">
                  {lang}
                 </div>
                ))}


            {/* Duplicated Cells for Scroll animation */}
            
                {languages.map((lang, index) => (
                 <div key={index} className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">
                  {lang}
                 </div>
                ))}

            </div>
        </div>
  )
}

export default InfiniteCarousel
