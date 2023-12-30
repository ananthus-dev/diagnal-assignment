import React from 'react'

import styles from './styles.module.css'
import { IMAGE_BASE_URL } from '../../constants'

function ContentCard ({ title, image }) {
  return (
    <div className={styles.container}>
      <img src={`${IMAGE_BASE_URL}/${image}`} />
      <p>{title}</p>
    </div>
  )
}

export default ContentCard
