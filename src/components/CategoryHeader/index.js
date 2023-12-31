import React, { Suspense, useContext, useState } from 'react'
import { lazy } from 'react'

import Image from '../Image'

import CategoryContext from '../../context/CategoryContext'

import backButton from '../../assets/images/Back.png'
import searchButton from '../../assets/images/search.png'
import styles from './styles.module.css'

const SearchBar = lazy(() => import('../SearchBar'))

function CategoryHeader () {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const { setIsSearchMode } = useContext(CategoryContext)

  const toggleSearchBarVisibility = () => {
    setShowSearchBar(showSearchBar => !showSearchBar)
  }

  const onClickBack = () => {
    if (showSearchBar) toggleSearchBarVisibility()
    setIsSearchMode(false)
  }

  const onClickSearch = () => {
    if (!showSearchBar) toggleSearchBarVisibility()
  }

  return (
    <header className={styles.container}>
      <Image
        className={styles.icon}
        imgSrc={backButton}
        altText='backbutton'
        onClick={onClickBack}
      />
      {showSearchBar ? (
        <Suspense fallback={<span>Loading...</span>}>
          <SearchBar />
        </Suspense>
      ) : (
        <h6 className={styles.categoryTitle}>Romantic Comedy</h6>
      )}
      <Image
        className={styles.icon}
        imgSrc={searchButton}
        altText='searchbutton'
        onClick={onClickSearch}
      />
    </header>
  )
}

export default CategoryHeader
