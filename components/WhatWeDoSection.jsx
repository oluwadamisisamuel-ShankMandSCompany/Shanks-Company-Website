"use client"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image'
import { useState } from 'react'
import FaqTab from "./ui/FaqTab";

function WhatWeDoSection() {

  const [rightSide, setRightSide] = useState(false);

  

  const faq = ["Web Development", "Mobile App Development", "MVP Development", "Quality Assurance"]


  return (
   <div className=' relative pl-[90px] mt-[130px] text-black'>
        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-base mb-4'>Why we do? </h2>
        <h2 className='font-[Poppins] text-2xl font-medium mb-2 '>Crafting Digital Experiences That Drive Success</h2>
        <p className='text-[17px] font-[Figtree] max-w-[92%] leading-6 text-[#383838] mb-4'>Choosing Shanks means partnering with a team that values excellence, innovation, and measurable results. We combine technical expertise with creative insight to deliver scalable digital solutions tailored to your business goals. From concept to launch, we work closely with you to ensure every product we build drives performance, efficiency, and long-term growth.</p>


        <div className='flex bg-[#F6F6F6] mt-[50px] w-[92%]'>
            <Image src={'/images/bridge.png'} alt='bridge-image' width={460} height={650}  />
            <div className='pl-[70px] pt-[50px]'>
                <h2 className='font-[Figtree] font-medium text-[20px] mb-4 '>Custom Software Development</h2>
                <p className='font-[Figtree] text-[#656565] text-sm w-[70%] mb-8 '>We build tailored software solutions designed to solve complex business challenges, streamline operations, and drive growth.</p>
                <p className="text-[#656565] flex items-center gap-2 underline pl-[10px] ">View service 
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>


                <div className="flex items-center justify-between mt-[40px] pr-[50px]">
                    {/* Base Line with a pink background */}
                    <div className="relative w-80 h-[2px] rounded-full overflow-hidden bg-pink-300">
                        {/* Red line that covers half of the line when clicked it moves left or right corresponsing */}
                        <div
                        className={`absolute top-0 h-full w-1/2 bg-red-500 transition-all duration-300 ease-in-out ${
                            rightSide ? "left-1/2" : "left-0"
                        }`}
                        ></div>
                    </div>

                    {/* Buttons that determine the position of the red line(left or right) */}
                    <div className="flex gap-4">
                        <div onClick={() => setRightSide(false)}
                        className="px-4 py-3 bg-gray-200 rounded hover:bg-gray-300 border-1">
                            <SlArrowLeft className="text-lg" />
                        </div>
                       
                        
                        <div onClick={() => setRightSide(true)}
                        className="px-4 py-3 bg-gray-200 rounded hover:bg-gray-300 border-1">
                            <SlArrowRight className="text-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <ul>
            {faq.map((question, index) =>( 
            <li key={index}>
                <FaqTab question= {question} />
            </li>
            ))}
        </ul>

        <p className="text-[#E60509] font-[Poppins] justify-center text-center text-lg flex items-center gap-2 underline mt-3">All Services 
            <GoArrowUpRight style={{fontSize:"20px"}} />
        </p>


   


    </div>
  )
}

export default WhatWeDoSection
