import React from 'react'
import styles from './styles.module.css'

type Props = {
    title?: string
    children?: React.ReactNode
}

function HideCard(Props: Props) {
  
    const { title, children } = Props;

    return (
    <div className='hide-card-container'>
      <div className={styles.title_container}>
        <h1 className='hide-card-title'>{title}</h1>
        <div className='hide-card-line'></div>
      </div>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}

export default HideCard
