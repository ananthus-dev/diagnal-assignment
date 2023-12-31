import React, { useContext, useState } from 'react'

import backButton from '../../assets/images/Back.png'
import searchButton from '../../assets/images/search.png'
import styles from './styles.module.css'
import TextField from '../TextField'
import CategoryContext from '../../context/CategoryContext'
import { SEARCH_MAX_CHARS, SEARCH_MIN_CHARS } from '../../constants'

function CategoryHeader () {
  const [searchText, setSearchText] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false)

  const toggleSearchBarVisibility = () => {
    setShowSearchBar(showSearchBar => !showSearchBar)
  }

  const {
    setSearchResults,
    setIsSearchMode,
    pageData: { contentList }
  } = useContext(CategoryContext)

  const filterContentList = keyword => {
    const searchResults = contentList.filter(item =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    )
    console.log('search results ', searchResults)
    setSearchResults(searchResults)
    setIsSearchMode(true)
  }

  const onChangeSearchText = e => {
    const value = e.target.value
    setSearchText(value)
    console.log(value, value.length)
    if (value.length >= SEARCH_MIN_CHARS) {
      filterContentList(value)
    } else {
      setIsSearchMode(false)
    }
  }

  const onClickBack = () => {
    if (showSearchBar) toggleSearchBarVisibility()
  }

  const onClickSearch = () => {
    if (!showSearchBar) toggleSearchBarVisibility()
  }

  return (
    <header className={styles.container}>
      <img
        className={styles.icon}
        src={backButton}
        alt='backbutton'
        onClick={onClickBack}
      />
      {showSearchBar ? (
        <TextField
          placeholder={`Type atleast ${SEARCH_MIN_CHARS} letters of the title to begin searching`}
          value={searchText}
          onChange={onChangeSearchText}
          minLength={SEARCH_MIN_CHARS}
          maxLength={SEARCH_MAX_CHARS}
        />
      ) : (
        <h6 className={styles.categoryTitle}>Romantic Comedy</h6>
      )}
      <img
        className={styles.icon}
        src={searchButton}
        alt='searchbutton'
        onClick={onClickSearch}
      />
    </header>
  )
}

export default CategoryHeader
