import { SKILLS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      {/* Title */}
      <div className='text-center bold-18 uppercase tracking-[1rem] text-violet-900 pb-20'>Skills</div>
      {
        SKILLS.map((skill) => (
          <SkillItem 
          key={skill.title}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
          />
        ))
      }
    </section>
  )
}

export default Skills

type SkillItem = {
  title: string;
  icon: string;
  description: string;
}

const SkillItem = ({ title, icon, description }: SkillItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col items-center text-center shadow-[0 3px 10px rgba(0, 0, 0, 0.2)] rounded-2xl p-10 hover:bg-violet-300 grop duration-[1200ms] transition'>
      <div className='rounded-full p-5 bg-violet-600 absolute -top-8 group-hover:text-white'>
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
        />
      </div>
      <h3 className='bold-20 lg:bold-22 mt-6 capatalize group-hover:text-white'>{title}</h3>
      <p className='regular-16 text-gray-30 mt-4 group-hover:text-white'>{description}</p>
    </li>
  )
}