import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function MeetTheTeam() {
  return (
      <div className=' pl-[90px] mt-[130px] text-black '>
        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-xl mb-4'>Meet the team! </h2>
        <h2 className='font-[Poppins] text-[28px] font-medium mb-2 '>People Who Power Possibility</h2>
        <p className='text-lg font-[Figtree] max-w-[95%] leading-[125%] text-[#383838] mb-4'>At Shanks, we believe great technology starts with great people. Our diverse team of designers, developers, and strategists brings together creativity, technical expertise, and a shared commitment to excellence. Every project we take on is a collaboration built on trust, innovation, and attention to detail, ensuring we deliver solutions that truly make an impact.</p>

        <div className='flex gap-4 mt-5'>
            <Image src={'/images/CEO potrait.png'} alt='CEO' width={250} height={220} />
            <Image src={'/images/manager.png'} alt='manager' width={250} height={220} />
            <Image src={'/images/HR.png'} alt='HR' width={250} height={220} />
            <Image src={'/images/PA.png'} alt='CEO' width={250} height={220} />
        
        </div>

        <p className="text-[#E60509] font-[Poppins] justify-center text-center text-lg flex items-center gap-2 underline mt-8">Get to know Us
            <GoArrowUpRight style={{fontSize:"20px"}} />
        </p>

    </div>
  )
}

export default MeetTheTeam
