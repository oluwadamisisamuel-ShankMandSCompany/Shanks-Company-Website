import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'


function OurWorks() {
  return (
     <div className=' relative pl-[90px] mt-[130px] text-black'>
        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-base mb-4'>Our Works? </h2>
        <h2 className='font-[Poppins] text-2xl font-medium mb-2 '>1000+ completed projects across 20+ industries</h2>
        <p className='text-[17px] font-[Figtree] max-w-[92%] leading-6 text-[#383838] mb-4'>From startups to global enterprises, we’ve built powerful digital products for businesses in over 20 industries. Each of our 1000+ projects reflects our commitment to innovation, performance, and creating real value for our clients.</p>

        <div className='flex gap-6 overflow-hidden '>


            <div className='max-w-[395px] mt-4 h-auto'>
                <Image src={'/images/Hotel-management-image.png'} width={375} height={190} className='min-w-[375px]' alt='Hotel management image' />
                <div className=' mt-4'>
                    <p className='font-[Figtree] text-sm text-[#E60509] mb-3'>Software Development</p>
                    <h2 className='font-[Figtree] font-semibold text-2xl max-w-[360px] mb-3'>Hotel Management Software System Application</h2>
                    <p className='font-[Figtree] text-[17px] text-[#383838] leading-[125%]'>HMSSA has all the features required for all Small & Medium hotels to function seamlessly.</p>
                </div>

                <p className="text-[#646464] font-[Poppins] text-center text-lg flex items-center gap-2 underline mt-3">
                    Explore
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>
            </div>


             
            <div className='max-w-[395px] mt-4'>
                <Image src={'/images/school-management-image.png'} width={375} height={190} className='min-w-[375px]' alt='School management image' />
                <div className=' mt-4'>
                    <p className='font-[Figtree] text-sm text-[#E60509] mb-3'>Software Development</p>
                    <h2 className='font-[Figtree] font-semibold text-2xl max-w-[360px] mb-3'>School Management Software System</h2>
                    <p className='font-[Figtree] text-[17px] text-[#383838] leading-[125%]'>
                        SMSS Online Exam and Learning Management System, a unified platform for online exams and learning across all educational institutions.</p>
                </div>

                  <p className="text-[#646464] font-[Poppins] text-center text-lg flex items-center gap-2 underline mt-3">
                    Explore
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>
            </div>


             
            <div className='max-w-[395px] mt-4'>
                <Image src={'/images/vehicle-management-image.png'} width={375} height={190} className='min-w-[375px]' alt='Vehicle management image' />
                <div className=' mt-4'>
                    <p className='font-[Figtree] text-sm text-[#E60509] mb-3'>Software Development</p>
                    <h2 className='font-[Figtree] font-semibold text-2xl max-w-[360px] mb-3'>Vehicle Management Software System Application</h2>
                    <p className='font-[Figtree] text-[17px] text-[#383838] leading-[125%]'>
                       VMS — a modern system for managing fleets and vehicle data efficiently.</p>
                </div>

                  <p className="text-[#646464] font-[Poppins] text-center text-lg flex items-center gap-2 underline mt-3">
                    Explore
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>
            </div>

             
            <div className='max-w-[395px] mt-4'>
                <Image src={'/images/Hotel-management-image.png'} width={375} height={190} className='min-w-[375px] max-w-[395px]' alt='Hospital management image' />
                <div className=' mt-4'>
                    <p className='font-[Figtree] text-sm text-[#E60509] mb-3'>Software Development</p>
                    <h2 className='font-[Figtree] font-semibold text-2xl max-w-[360px] mb-3'>Hospital Management Software System Application</h2>
                    <p className='font-[Figtree] text-[17px] text-[#383838] leading-[125%]'>
                        HMS, a smart system that streamlines hospital operations and manages clinical activities with ease.</p>
                </div>

                  <p className="text-[#646464] font-[Poppins] text-center text-lg flex items-center gap-2 underline mt-3">
                    Explore
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>
            </div>



        </div>

      
    </div>
  )
}

export default OurWorks
