import React from 'react';
import { IconType } from 'react-icons';

type InfoCardProps = {
  icon: IconType;
  title: string;
  text: string;
  link: string;
  isLink?: boolean
};

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, text, link, isLink=true}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md flex items-center space-x-4 h-[100%]">
      <Icon size={40} className="text-blue-500" />
      <div className='text-left'>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-lg">
       
          {isLink ? (  <a href={link} className="text-blue-500 hover:text-[#ff4c00]">
            {text}
          </a>): (text) }
        
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
