import React from 'react'

import backButton from '../../assets/images/Back.png'
import searchButton from '../../assets/images/search.png'
import styles from './styles.module.css'

function CategoryHeader () {
  return (
    <header className={styles.container}>
      <img className={styles.backButton} src={backButton} alt='backbutton' />
      <h6 className={styles.categoryTitle}>Romantic Comedy</h6>
      <img
        className={styles.searchButton}
        src={searchButton}
        alt='searchbutton'
      />
    </header>
  )
}

export default CategoryHeader
