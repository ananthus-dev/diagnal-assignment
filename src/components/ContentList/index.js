import React, { useContext } from 'react'

import styles from './styles.module.css'
import ContentCard from '../ContentCard'
import CategoryContext from '../../context/CategoryContext'

function ContentList () {
  const {
    pageData: { contentList = [] },
    searchResults,
    isSearchMode
  } = useContext(CategoryContext)

  const listItems = isSearchMode ? searchResults : contentList

  return (
    <main className={styles.container}>
      {listItems.map((item, index) => (
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
