import { GoArrowUpRight } from "react-icons/go"

function HowWeBringSection() {
  return (
    <div className=' relative pl-[90px] mt-[130px] text-black'>
        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-base mb-4'>How We Bring Ideas to Life</h2>
        <h2 className='font-[Poppins] text-2xl font-medium mb-2 '>Our Approach to Building Better Solutions</h2>
        <p className='text-[17px] font-[Figtree] max-w-[92%] leading-6 text-[#383838] mb-4'>We don’t just build products we build solutions that create impact. Through a clear process and collaborative mindset, we ensure every project moves from concept to completion with innovation and quality at its core.</p>


        <div className='flex gap-4 pb-4'>
            <div className='bg-[#F7F7F7] flex-1 rounded-2xl pl-5 flex flex-col justify-between pb-14'>
                <div className='pt-7 '>
                    <p className=' mb-4 w-[140px] rounded-full bg-[#FFE4CE] text-[11px] text-[#F26D00] py-1 px-2'>Understand. Align. Plan</p> 
                    <p className= 'mb-3 font-[Poppins] text-2xl font-medium'>Discovery & Consultation</p>
                    <p className='font-[Poppins] text-base max-w-[470px] text-[#828282]'>Every successful project starts with understanding. We take time to learn about your goals, audience, and challenges through focused discussions. This allows us to define the project scope, key features, and a clear roadmap to achieve your objectives.</p>
                </div>

                <p className="text-[#E60509] font-[Poppins] text-center text-lg flex items-center gap-2 underline mt-3">
                    Talk to Our Team 
                    <GoArrowUpRight style={{fontSize:"20px"}} />
                </p>
            </div>


            <div className='flex-1'>

                <div className='pt-9 pl-4 pb-4 mr-24 h-[200px] bg-[#F7F7F7] mb-4 rounded-2xl'>
                    <p className=' mb-3 w-[140px] rounded-full bg-[#CBFFCF] text-[11px] text-[#00A70E] py-1 px-2'>Design. Build. Deliver</p> 
                    <p className= 'mb-2 font-[Poppins] text-2xl font-medium'>Proposal, Planning & Execution</p>
                    <p className='font-[Poppins] max-w-[470px] text-base text-[#828282]'>We craft a clear proposal, then design and build your product with precision keeping you updated every step of the way.</p>
                </div>


                 <div className='pt-9 pb-8 pl-4 mr-24 h-[200px] bg-[#F7F7F7] rounded-2xl'>
                    <p className=' mb-3 w-[140px] rounded-full bg-[#E4E4FF] text-[11px] text-[#191BB8] py-1 px-2'>Launch. Support. Grow</p> 
                    <p className= 'mb-2 font-[Poppins] text-2xl font-medium'>Delivery, Review & Ongoing Support</p>
                    <p className='font-[Poppins] max-w-[470px] text-base text-[#828282]'>After launch, we ensure your solution runs smoothly through continuous support, updates, and maintenance staying with you as a long-term partner in growth and success.</p>
                </div>
            </div>

        </div>
       

    </div>
  )
}

export default HowWeBringSection
