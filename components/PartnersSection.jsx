import Image from 'next/image'
import React from 'react'

function PartnersSection() {
  return (
    <div className=' pl-[90px] mt-[130px] text-black '>

        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-xl mb-4'>Partnering with Visionaries Who Build the Future</h2>
        <h2 className='font-[Poppins] text-[28px] font-medium mb-2 '>Trusted by Forward-Thinking Companies</h2>
        <p className='text-lg font-[Figtree] max-w-[95%] leading-[125%] text-[#383838] mb-10'>We’re proud to collaborate with innovative brands and organizations that share our vision for excellence. Our partners span diverse industries from startups to established enterprises all united by a common goal: creating digital solutions that drive meaningful results. </p>
        
        <div className='flex flex-wrap max-w-[90%] justify-center items-center gap-16 mt-10'>
            <Image src={'/images/google.svg'} alt='google' width={151} height={69} className='min-w-[141px] h-[59px]' />
            <Image src={'/images/mailchimp-black.png'} alt='mail-chimp-black' width={47} height={55} className='w-[40px] h-[50px] mt-4' />   
            <Image src={'/images/netlife.svg'} alt='netlife' width={200} height={62} className='w-[180px] h-[56px]' />
            <Image src={'/images/google-cloud.svg'} alt='google-cloud' width={84} height={77} className='w-[78px] h-[70px]'/>
            <Image src={'/images/atlassian.png'} alt='atlassian' width={200} height={42} className='w-[180px] h-[35px]' />
            <Image src={'/images/microsoft.png'} alt='microsoft' width={158} height={58} className='w-[150px] h-[50px]'/>
            <Image src={'/images/google_ads.svg'} alt='google-ads' width={61} height={78}className='w-[61px] h-[78px]'/>
            <Image src={'/images/oracle.svg'} alt='oracle' width={200} height={42} className='w-[160px] h-[28px]'/>
            <Image src={'/images/paystack.svg'} alt='paystack' width={129} height={69}className='w-[120px] h-[50px]' />
               
        </div>

      </div>
  )
}

export default PartnersSection
