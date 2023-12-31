import React from 'react'

import styles from './styles.module.css'

function TextField ({ ...rest }) {
  const onInputChange = e => {
    const value = e.target.value
    // if (value.length <= maxChar) {
    //   onChange(value)
    // }
  }

  return <input className={styles.container} type='text' {...rest} />
}

export default TextField
