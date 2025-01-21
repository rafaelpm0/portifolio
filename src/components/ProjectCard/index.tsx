import React from 'react';

type CustomCardProps = {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  column?: boolean;
};

const CustomCard: React.FC<CustomCardProps> = ({ image, title, description, linkText, linkUrl, column = false }) => {
  return (
    <div className={`p-4 border h-full bg-[#f5f5f7] rounded-lg shadow-md ${column ? 'flex flex-col' : 'flex flex-row'}  space-x-4`}>
      <div className={`${column ? 'mb-[32px]' : 'mr-4'} flex w-50%`}>
        <img src={image} alt={title} className="max-h-[300px] object-cover rounded-[8px]" />
      </div>
      <div className='flex flex-col w-50% h-full'>
        <h3 className="text-[1.5rem] sm:text-[2rem] font-bold mb-[16px]">{title}</h3>
        <p className="text-[1.2rem] mb-[8px] text-justify">{description}</p>
        <p className="mt-[32px] text-lg">
          Disponível em:{" "}
          <a href={linkUrl} className="text-[#292bca] hover:text-[#ff4c00]">
            {linkText}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
