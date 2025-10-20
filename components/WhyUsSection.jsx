import Image from 'next/image'
import React from 'react'

function WhyUsSection() {
  return (
    <div className=' relative pl-[90px] mt-[130px] text-black'>
     <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-base mb-4'>Why Us? </h2>
     <h2 className='font-[Poppins] text-2xl font-medium mb-2 '>Crafting Digital Experiences That Drive Success</h2>
     <p className='text-[17px] font-[Figtree] max-w-[92%] leading-6 text-[#383838] mb-4'>Choosing Shanks means partnering with a team that values excellence, innovation, and measurable results. We combine technical expertise with creative insight to deliver scalable digital solutions tailored to your business goals. From concept to launch, we work closely with you to ensure every product we build drives performance, efficiency, and long-term growth.</p>
     <Image src={'/images/snailia.svg'} alt='snaila-image' width={1100} height={400}  />
    </div>
  )
}

export default WhyUsSection
