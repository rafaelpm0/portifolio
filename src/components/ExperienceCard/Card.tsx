import React from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    photo: string;
    description: string;
    imageSide: 'left' | 'right';
}


function Card(props: Props) {
  
  const { title, description, photo, imageSide } = props;
  const side = imageSide === 'left' ? 'flex-row' : 'flex-row-reverse';

    return (
    <div > 
      <h3 className='text-[16px] lg:text-[25px]'>{title}</h3>
      <div className={`flex ${side} items-center content-center gap-[2px]`}>
        
        <Image src={photo} alt={photo} width={200} height={200}/>  
        <p className='text-[12px] lg:text-[20px]'>{description}</p>
      </div>
    </div>
  )
}

export default Card
// OBS AJUSTAR A IMAGEM, IRA FICAR TEMPORARIAMENTE ASSIM