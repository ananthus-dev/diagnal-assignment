import React, { useContext } from 'react'

import styles from './styles.module.css'
import ContentCard from '../ContentCard'
import CategoryContext from '../../context/CategoryContext'

function ContentList () {
  const {
    pageData: { contentList = [] }
  } = useContext(CategoryContext)

  return (
    <main className={styles.container}>
      {contentList.map((item, index) => (
        <ContentCard
          key={`${index}-${item.name}`}
          title={item.name}
          image={item['poster-image']}
        />
      ))}
      {/* <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard /> */}
    </main>
  )
}

export default ContentList
