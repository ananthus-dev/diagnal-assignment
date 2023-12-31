import React, { useState } from 'react'
import loadingImage from '../../assets/images/placeholder_for_missing_posters.png'

function Image ({ className, imgSrc, altText }) {
  const [showLoader, setShowLoader] = useState(true)

  const onImageLoad = () => {
    setShowLoader(false)
  }

  return (
    <>
      <img
        className={className}
        src={loadingImage}
        alt={'loading'}
        style={{ display: showLoader ? 'block' : 'none' }}
      />
      <img
        className={className}
        src={imgSrc}
        alt={altText}
        style={{ display: !showLoader ? 'block' : 'none' }}
        onLoad={onImageLoad}
      />
    </>
  )
}

export default Image
