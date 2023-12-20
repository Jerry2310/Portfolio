import React from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='relative px-6 lg:px-20 3xl:px-0 z-30 rounded-lg bg-white shadow-x ring-1 ring-slate-100'>
      {/* <button id="triggerEl" aria-expanded="false" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button> */}
      <div id="triggerEl" className="flex items-center justify-between mx-auto max-w-[1440px]">
        <Link href={"/"} className='text-[28px] font-[700] leading-[120%] capitalize relative'>
          Je<span className='text-violet-700'>rry</span><span className='absolute top-[-0.3rem] right-[-1rem] h-5 w-5 linearGradient rounded-full -z-[10]'></span>
        </Link>
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {
            NAV_LINKS.map((link) => (
              <Link href={link.herf} key={link.key} className='flex items-center justify-center text-[15px] font-[500] text-black hover:bg-violet-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
                {link.label}
              </Link>
            ))
          }
        </ul>
        <Image
        src="/menu-burger.svg"
        alt="menu"
        width={28}
        height={28}
        className='inline-block cursor-pointer lg:hidden' 
        />
        {/* <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
          
          {
            NAV_LINKS.map((link) => (
              <Link href={link.herf} key={link.key} className='flex items-center justify-center text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
                {link.label}
              </Link>
            ))
          }
          </div>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar