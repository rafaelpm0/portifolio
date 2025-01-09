import React from 'react'
import styles from './styles.module.css'

type Props = {
    isVisible?: boolean
    children?: React.ReactNode
    onLeave?: any
}

function HideCard(Props: Props) {
  
    const { children, isVisible, onLeave } = Props;
    const hidden = isVisible ? '' : 'hidden';

    return (
    <div 
    className={`w-full ${hidden} fixed top-0 left-0 h-[535px]`}
    onMouseLeave={() => onLeave()}>
      <div className={styles.children_container}>
        {children}
      </div>
    </div>
  )
}

export default HideCard
