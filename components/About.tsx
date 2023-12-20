import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className='max-auto max-w-[1440px] padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]'>
      <div className='text-center bold-18 uppercase tracking-[1rem] text-violet-900 pb-20'>About</div>
      <div className='flex flex-col gap-20 md:gap-28 xl:flex-row'>

        <div className='flex-l flexCenter'>
          <Image
            src='/about.png'
            alt='about'
            height={1200}
            width={1200}
            className='w-auto rounded-full shadow-sm'
          />
        </div>

        <div className='flex flexCenter flex-col w-auto'>
          <p className='mb-8'>
            <span className='font-extrabold max-w-[555px] my-4'>Lorem ipsum </span>dolor sit amet consectetur adipisicing elit. Pariatur vero velit a iusto facere ratione, officiis laudantium expedita placeat consectetur inventore magni autem quam eos eligendi eius atque consequatur eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ratione sed consequuntur vel dolor vero cupiditate excepturi, sunt odio nesciunt esse temporibus et, amet magnam quas alias, accusantium eum repudiandae?          </p>
          <Button
            type="button"
            title="Read More"
            icon="/angle-small-right.svg"
            variant="border-green-90 bg-green-90 px-6 py-3 text-white transition-all hover:bg-black"
          />
        </div>

      </div>
    </section>
  )
}

export default About