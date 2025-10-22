import Image from 'next/image'
import React from 'react'

function PartnersSection() {
  return (
    <div className=' pl-[90px] mt-[130px] text-black '>

        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-xl mb-4'>Partnering with Visionaries Who Build the Future</h2>
        <h2 className='font-[Poppins] text-[28px] font-medium mb-2 '>Trusted by Forward-Thinking Companies</h2>
        <p className='text-lg font-[Figtree] max-w-[95%] leading-[125%] text-[#383838] mb-10'>We’re proud to collaborate with innovative brands and organizations that share our vision for excellence. Our partners span diverse industries from startups to established enterprises all united by a common goal: creating digital solutions that drive meaningful results. </p>
        
        <div className='flex flex-wrap max-w-[90%] justify-center gap-16 mt-10'>
            <Image src={'/images/google.svg'} alt='google' width={200} height={69} className='min-w-[200px]' />
            <Image src={'/images/mailchimp-black.png'} alt='mail-chimp-black' width={50} height={60} className='min-w-[50px] h-[60px] mt-4' />   
            <Image src={'/images/netlife.svg'} alt='netlife' width={180} height={62} className='min-w-[180px]' />
            <Image src={'/images/google-cloud.svg'} alt='google-cloud' width={74} height={57} className='min-w-[74px]'/>
            <Image src={'/images/atlassian.png'} alt='atlassian' width={200} height={12} className='min-w-[150px]' />
            <Image src={'/images/microsoft.png'} alt='microsoft' width={158} height={58} className='min-w-[158px]'/>
            <Image src={'/images/google_ads.svg'} alt='google-ads' width={100} height={100} className='min-w-[61px]'/>
            <Image src={'/images/oracle.svg'} alt='oracle' width={200} height={42} className='min-w-[200px]'/>
            <Image src={'/images/paystack.svg'} alt='paystack' width={129} height={69}className='min-w-[129px]' />
               
        </div>

      </div>
  )
}

export default PartnersSection
