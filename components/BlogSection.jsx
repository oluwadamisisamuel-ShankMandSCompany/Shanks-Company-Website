import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function BlogSection() {
  return (
   <div className=' pl-[90px] mt-[130px] text-black '>

        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-xl mb-4'>Our Blog</h2>
        <h2 className='font-[Poppins] text-[28px] font-medium mb-2 '> Insights That Inspire Innovation </h2>
        <p className='text-lg font-[Figtree] max-w-[95%] leading-[125%] text-[#383838] mb-10'>Stay ahead in the digital world with expert insights, industry trends, and practical advice from our team. From software development and design thinking to tech strategy and business growth, our blog delivers the knowledge you need to build smarter and scale faster. </p>
        
        <div className='flex gap-5'>

            <div className='max-w-[355px] '>
                            <Image src={'/images/hotel-img-large.png'} width={355} height={194} className='min-w-[355px] h-[194px]' alt='Hotel image large' />
                            <div className=' mt-4'>
                                <h2 className='font-[Figtree] font-medium text-[20px] max-w-[360px] mb-2'>The Future of Software Development: Trends Shaping 2025</h2>
                                <p className='font-[Figtree] text-[15px] text-[#383838] leading-[125%]'>
                                    See how AI, automation, and cloud technology are transforming the way software is built and scaled.</p>
                            </div>
            
                            <p className="text-[#646464] font-[Poppins] text-center text-sm flex items-center gap-2 underline mt-3">
                               Read more
                                <GoArrowUpRight style={{fontSize:"18px"}} />
                            </p>
            </div>

             <div className='max-w-[355px] '>
                            <Image src={'/images/school-img-large.png'} width={355} height={194} className='min-w-[355px] h-[194px]' alt='school image large' />
                            <div className=' mt-4'>
                                <h2 className='font-[Figtree] font-medium text-[20px] max-w-[360px] mb-2'>From Idea to Product: Building a Digital Solution That Lasts</h2>
                                <p className='font-[Figtree] text-[15px] text-[#383838] leading-[125%]'>
                                    Turn your vision into a powerful digital product with strategy, design, and precision-driven development.</p>
                            </div>
            
                            <p className="text-[#646464] font-[Poppins] text-center text-sm flex items-center gap-2 underline mt-3">
                               Read more
                                <GoArrowUpRight style={{fontSize:"18px"}} />
                            </p>
            </div>

             <div className='max-w-[355px] '>
                            <Image src={'/images/vehicle-img-large.png'} width={355} height={194} className='min-w-[355px] h-[194px]' alt='Vehicle image large' />
                            <div className=' mt-4'>
                                <h2 className='font-[Figtree] font-medium text-[20px] max-w-[360px] mb-2'>Why User Experience (UX) Is the Heart of Every Great Product</h2>
                                <p className='font-[Figtree] text-[15px] text-[#383838] leading-[125%]'>
                                    Great design goes beyond visuals discover how strong UX drives engagement and business growth.</p>
                            </div>
            
                            <p className="text-[#646464] font-[Poppins] text-center text-sm flex items-center gap-2 underline mt-3">
                               Read more
                                <GoArrowUpRight style={{fontSize:"18px"}} />
                            </p>
            </div>
    
        </div>



    </div>
  )
}

export default BlogSection
