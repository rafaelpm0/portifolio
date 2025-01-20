import React from 'react';
import styles from './styles.module.css';

type Props = {
  isVisible?: boolean;
  children?: React.ReactNode;
  onLeave?: any;
};

function HideCard({ children, isVisible, onLeave }: Props) {
  const hidden = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none';

  return (
    <div
      className={`w-full fixed top-0 left-0 h-[535px] transition-opacity duration-500 ${hidden}`}
      onMouseLeave={() => onLeave()}
    >
      {children}
    </div>
  );
}

export default HideCard;
