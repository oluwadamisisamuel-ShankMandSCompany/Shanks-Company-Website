"use client"
import { GoArrowUpRight } from 'react-icons/go';
import FaqTab from './ui/FaqTab'
import { useState } from 'react'

function FaqSection() {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {question : "What services does Shanks Media & Software Company offer?",
            answer: "We specialize in software development, UI/UX design, web development, and digital strategy. Our team also provides product maintenance, brand identity, and scalable digital solutions for businesses of all sizes."
        },
        {question : "How long does it take to complete a project?",
            answer: "Project timelines vary depending on complexity and requirements. Smaller projects may take 2–4 weeks, while larger custom solutions can range from 6–12 weeks. Once we review your goals, we’ll provide a detailed timeline in your project proposal."
        },
        {question : " Do you work with startups or only established businesses?",
            answer: "We work with both. Whether you’re a startup building your first MVP or an enterprise scaling an existing system, our process adapts to meet your goals and resources."
        },
        {question : "What is the company's process for client engagement?",
            answer: "We begin with a thorough discovery phase, followed by design sprints and iterative feedback loops to refine the project continuously."
        },
        {question : "Do you offer post-launch support?",
            answer: "Yes. We provide ongoing maintenance, performance optimization, and feature updates to ensure your product continues running smoothly and stays up to date."
        }
    ]
  return (
    <div className=' pl-[90px] mt-[130px] text-black '>

        <h2 className='border-l-2 border-[#E60509] px-1 py-0 font-[Figtree] font-semibold text-xl mb-4'>You’ve got Questions?</h2>
        <h2 className='font-[Poppins] text-[28px] font-medium mb-2 '>Frequently Asked Questions</h2>
        <p className='text-lg font-[Figtree] max-w-[95%] leading-[125%] text-[#383838] mb-10'>We know choosing the right digital partner comes with questions. Here, we’ve answered some of the most common inquiries about our process, services, and what it’s like to work with Shanks. </p>
        

        <ul className='flex flex-col pl-[80px]'>
        {data.map((faq,index) => (
            <li key={index}>
                <FaqTab  index = {index} faq = {faq} openIndex={openIndex}   handleToggle={handleToggle} />
            </li>
            
        ))}
        </ul>

        <p className="text-[#E60509] font-[Poppins] justify-center text-center text-lg flex items-center gap-2 underline mt-8">Got more questions?
                    <GoArrowUpRight style={{fontSize:"20px"}} />
        </p>
        
      
    </div>
  )
}

export default FaqSection
