import React, { useState } from 'react'

import styles from './styles.module.css'
import { IMAGE_BASE_URL } from '../../constants'

import Image from '../Image'

function ContentCard ({ title, image }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.thumbnail}
        imgSrc={`${IMAGE_BASE_URL}/${image}`}
        altText={title}
      />
      <p>{title}</p>
    </div>
  )
}

export default ContentCard
