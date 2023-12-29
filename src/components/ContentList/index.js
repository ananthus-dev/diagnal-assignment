import React from 'react'

import styles from './styles.module.css'
import ContentCard from '../ContentCard'

function ContentList () {
  return (
    <div className={styles.container}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  )
}

export default ContentList
