import React from 'react'
import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({type, title, icon, variant} : ButtonProps) => {
  return (
    <button className={`flexCenter gap-4 inline-flex rounded-full border ${variant}`} type = {type}>
        
        <label className='font-[500] whitespace-nowrap cursor-pointer'>
            {title}
        </label>
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </button>
  )
}

export default Button