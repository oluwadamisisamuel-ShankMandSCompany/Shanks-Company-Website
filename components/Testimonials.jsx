import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Testimonials() {
  return (
    <div className=' relative  mt-[130px] text-black bg-[#EBEBEB] w-full'>


    <div className='pl-[90px] p-[40px]'>
         <h2 className=' border-l-2 border-[#E60609] px-1 py-0 font-[Figtree] font-semibold text-[22px] mb-4'>Testimonials </h2>

      <div className='flex gap-6 '>
        
        <div className='w-[400px] h-[320px] bg-[#A30406] rounded-lg flex flex-col justify-center items-center gap-3 '>
            <div className='flex '>
                <Image src={'/images/profile-3.png'} alt='Profile' width={60} height={60} className='rounded-full' />
                <Image src={'/images/profile-2.png'} alt='Profile' width={60} height={60} className='rounded-full ml-[-8] z-10' />
                <Image src={'/images/profile-1.png'} alt='Profile' width={60} height={60} className='rounded-full ml-[-8] z-20' />
            </div>
           <p className='font-semibold text-xl text-white max-w-[300px] text-center'> Building Trust Through Experience </p>  
           <p className="text-white font-[Poppins] text-center text-lg flex items-center gap-2 underline"> Explore
             <GoArrowUpRight style={{fontSize:"20px"}} />
            </p>
        </div>

        <div className='bg-white text-black w-[800px] rounded-lg py-10 px-8 '> 
            <p className='font-[Figtree] text-xl leading-[125%] max-w-[600px] '>
                Shanks transformed our marketing journey. Their team's expertise and dedication shone through every step of the way. 
                <span className='text-[#828282] leading-[125%] ml-1'>
                    From initial strategy to flawless execution, they delivered a solution that perfectly aligned with our vision. We couldn't be happier with the results
                </span> 
            </p>

            <div className='mt-[50px] '>
            <p className='font-[Figtree] text-xl'> Music Company </p>
            <p className='font-[Figtree] text-[20px] font-semibold '>Virgin Sound.</p>

             </div>
        </div>

      </div>



      <div className='mt-8 flex gap-6'>
            <div className='max-w-[400px] h-[320px] bg-white rounded-lg  py-[40px] px-[15px] flex flex-col justify-between '>
                <p className='font-[Figtree] text-lg leading[125%] '>
                   The Shanks team combines technical excellence with great communication. They delivered on time, on budget, and with a level of polish that made our product stand out in a competitive market.
                </p>
                <div>
                  <p className='font-[Figtree] leading-[125%] text-lg'>Product Manager, CloudAxis</p>
                  <p className='font-[Figtree] leading-[125%] text-lg font-semibold'>Emily R.</p>
                </div>
            </div>

            <div className='max-w-[400px] h-[320px] bg-white rounded-lg  py-[40px] px-[15px] flex flex-col justify-between '>
                <p className='font-[Figtree] text-lg leading[125%] '>
                   The Shanks team combines technical excellence with great communication. They delivered on time, on budget, and with a level of polish that made our product stand out in a competitive market.
                </p>
                <div>
                  <p className='font-[Figtree] leading-[125%] text-lg'>Product Manager, CloudAxis</p>
                  <p className='font-[Figtree] leading-[125%] text-lg font-semibold'>Emily R.</p>
                </div>
            </div>

            <div className='max-w-[400px] h-[320px] bg-white rounded-lg  py-[40px] px-[15px] flex flex-col justify-between '>
                <p className='font-[Figtree] text-lg leading[125%] '>
                   The Shanks team combines technical excellence with great communication. They delivered on time, on budget, and with a level of polish that made our product stand out in a competitive market.
                </p>
                <div>
                  <p className='font-[Figtree] leading-[125%] text-lg'>Product Manager, CloudAxis</p>
                  <p className='font-[Figtree] leading-[125%] text-lg font-semibold'>Emily R.</p>
                </div>
            </div>
      </div>
    </div>
 



    </div>
  )
}

export default Testimonials
