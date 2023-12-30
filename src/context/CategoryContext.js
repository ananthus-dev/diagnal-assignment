import { createContext, useEffect, useState } from 'react'

const CategoryContext = createContext(null)

const CategoryContextProvider = ({ children }) => {
  const [isSearchMode, setIsSearchMode] = useState(false)

  const [pageData, setPageData] = useState({})

  const onToggleSearchMode = () => {
    setIsSearchMode(isSearchMode => !isSearchMode)
  }

  const value = {
    isSearchMode,
    onToggleSearchMode,
    pageData,
    setPageData
  }

  useEffect(() => {
    console.log('mounting provider')
    return () => {
      console.log('unmounting provider')
      setPageData({})
    }
  }, [])

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}

const withCategoryContextProvider = component => {
  return <CategoryContextProvider>{component}</CategoryContextProvider>
}

export { CategoryContextProvider, withCategoryContextProvider }

export default CategoryContext
