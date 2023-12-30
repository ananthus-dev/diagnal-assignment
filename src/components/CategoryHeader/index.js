import React, { useContext, useState } from 'react'

import backButton from '../../assets/images/Back.png'
import searchButton from '../../assets/images/search.png'
import styles from './styles.module.css'
import TextField from '../TextField'
import CategoryContext from '../../context/CategoryContext'

function CategoryHeader () {
  const [searchText, setSearchText] = useState('')

  const { isSearchMode, onToggleSearchMode } = useContext(CategoryContext)

  const onChangeSearchText = value => {
    setSearchText(value)
  }

  const onClickBack = () => {
    if (isSearchMode) onToggleSearchMode()
  }

  const onClickSearch = () => {
    if (!isSearchMode) onToggleSearchMode()
  }

  return (
    <header className={styles.container}>
      <img
        className={styles.icon}
        src={backButton}
        alt='backbutton'
        onClick={onClickBack}
      />
      {isSearchMode ? (
        <TextField
          placeholder='Type atleast 3 letters of the title to begin searching'
          value={searchText}
          onChange={onChangeSearchText}
          maxChar={20}
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
