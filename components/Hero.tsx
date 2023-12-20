"use client";
import React from 'react'
// import ReactDOM from 'react-dom';
import TypewriterComponent from 'typewriter-effect';
import Button from './Button'
import Image from 'next/image';


const Hero = () => {

  // const [text] = useTypewriter({
  //   words: ['Hello', 'From', 'Typewriter', 'Hook!'],
  //   loop: 0}).

  // const handleType = (count: []) => {
  //   // access word count number
  //   console.log(count)
  // }  

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className="mx-auto max-w-[1440px] absolute top-64 left-44 h-[144px] w-[777px] bg-[#7e22ce] rounded-full shadow-lg blur-[7rem] -z-10"></span>
      {/* LEFT */}
      <div className='relative z-10 flex flex-1 flex-col pt-16'>
        <h4 className='text-[20px] font-[600]'>Hello,</h4>
        <h1 className='text-[40px] font-[400] leading-[120%] lg:hold-64 relative'>I'm Ankur Pratap Singh</h1>
        <h2 className='Bold-28 lg:text-[40px] lg:font-[400] lg:leading-[120%] text-[1.8rem] capitalize'>
          A
          {/* <span>{text}</span> */}

          
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing."
              ],
              autoStart: true,
              loop: true,
            }}
          />
          
          {/* <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            /> */}

        </h2>
        <p className='text-[16px] font-[400] max-w-[555px] my-4'>I am a dedicated and enthusiastic Full Stack Developer with a strong foundation in backend development. My passion for technology extends to the exciting world of blockchain, where I've gained valuable expertise. I thrive in dynamic and challenging environments, consistently delivering high-quality solutions through my hardworking and detail-oriented approach.</p>
        <div>
          <div>

          </div>
        </div>
        <div className='flexStart gap-1 pt-6'>
          <Button
            type="button"
            title="Download CV"
            
            icon="/download.svg"
            variant="border-green-90 bg-green-90 px-6 py-3 text-white transition-all hover:bg-black"
          />
          <span> </span>
          <Button
            type="button"
            title="Contact Me"
            icon="/arrow-right.svg"
            variant="border-white bg-white px-6 py-3 text-gray-90"
          />
        </div>
      </div>
      {/* Right */}

      <div className='flex flex-l xl:flex xl:items-center xl:justify-end'>
        <Image src="/my.png" alt="bg" width={288} height={288} className='w-auto' />
      </div>
    </section>

  )
}

export default Hero