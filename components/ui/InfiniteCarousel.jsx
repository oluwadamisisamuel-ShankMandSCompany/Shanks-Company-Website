import React from 'react'

function InfiniteCarousel() {
  return (
         <div className="mt-10 overflow-hidden bg-[#E60509] text-white group">
            <div className="flex justify-center gap-2 md:gap-8 py-3 w-max  font-bold 
            [animation:scroll_10s_linear_infinite] group-hover:[animation-play-state:paused] ">

            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">PHP</div>
            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md  ">Python</div>
            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Ruby</div>
            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">React-Native</div>
            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Kotlin</div>
            <div className=" border-gray-700 text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Java</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">AWS</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">.Net</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Node.Js</div>


            {/* Duplicated Cells for Scroll animation */}

            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">PHP</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md  ">Python</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Ruby</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">React-Native</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Kotlin</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Java</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">AWS</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">.Net</div>
            <div className=" border-gray-700  text-[12px] md:text-xl h-[30px] md:h-[50px] min-w-[100px] md:min-w-[150px] flex items-center justify-center rounded-md ">Node.Js</div>
            </div>
        </div>
  )
}

export default InfiniteCarousel
