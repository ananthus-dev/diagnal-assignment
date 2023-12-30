import React from 'react'

import styles from './styles.module.css'

function TextField ({ placeholder, value, onChange, maxChar = 30 }) {
  const onInputChange = e => {
    const value = e.target.value
    if (value.length <= maxChar) {
      onChange(value)
    }
  }

  return (
    <input
      className={styles.container}
      type='text'
      value={value}
      onChange={onInputChange}
      placeholder={placeholder}
    />
  )
}

export default TextField
