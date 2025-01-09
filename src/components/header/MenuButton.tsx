import React from 'react'
import Link from 'next/link';


type Props = {
    title?: string
    href: string
    padding?: string
    onEnter?: any


}

function MenuButton(Props: Props) {
  
    const { title, href, padding, onEnter } = Props;
    

    return (
    <Link href={href} className={`group h-full flex items-center justify-center cursor-pointer px-[${padding}px] relative`}
    onMouseEnter={() => onEnter()}>
      <h1 className='opacity-80 group-hover:opacity-100'>{title}</h1>
      <div className='w-full absolute bg-black bottom-0 h-[1px] group-hover:bg-[white]'></div>
    </Link>
  )
}

export default MenuButton
