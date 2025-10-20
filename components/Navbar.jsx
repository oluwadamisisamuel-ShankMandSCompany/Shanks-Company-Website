
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {

   
  return (
    <nav className='flex items-center justify-between py-3 px-[90px]'>
      <Image src={'/images/shanks_logo.svg'} alt='shanks_logo' width={42} height={42} />
      <ul className='flex gap-3 text-black font-[Poppins] text-base font-normal'>
    
        <li>Home</li>
        <li className='flex items-center'>Company <IoIosArrowDown /> </li>
        <li className='flex items-center'>Services <IoIosArrowDown /> </li>
        <li>Portfolio</li>
      </ul>

      <button className='bg-[#E60509] text-white px-6 py-2 rounded-xs'>Contact Us</button>
    </nav>
  )
}

export default Navbar
