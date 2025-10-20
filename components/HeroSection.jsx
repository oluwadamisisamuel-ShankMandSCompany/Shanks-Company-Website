import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section className='relative h-screen w-full'>
      <Image src={"/images/Hero-section.png"} alt='Hero-Background' fill 
      className='object-cover object-center -z-10'/>
    <div className='h-full max-w-[700px] text-white pl-[90px] pt-[120px]'>
        <h2 className='font-semibold text-[45px] leading-tight font-[Poppins]  mb-2 '>Transforming Ideas into Scalable Digital Products.</h2>
        <p className='leading-snug font-[Figtree]  mb-6'>Backed by experience and innovation, we help organizations evolve through technology. From custom applications to enterprise platforms, we build scalable digital products that define the future of your business.</p>
        <button className='bg-[#E60509] text-white w-[150px] px-2 py-2 rounded-xs mb-6'>Request a Quote</button>
        <p className='leading-snug font-[Figtree]  mb-2 '>Trusted by forward-thinking companies and startups worldwide.</p>
        <div className='flex gap-2'>
         <Image src={'/images/google.svg'}  alt='google-image' width={100} height={36} /> 
         <Image src={'/images/netlife.svg'}  alt='netlife-image' width={110} height={36} />
         <Image src={'/images/mailchimp.svg'} alt='mail-chimp-image'  width={61} height={36} />
         <Image src={'/images/google_ads.svg'} alt='google-ads-image'  width={60} height={36} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
