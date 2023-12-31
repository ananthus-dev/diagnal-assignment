import { createContext, useEffect, useState } from 'react'

const CategoryContext = createContext(null)

const CategoryContextProvider = ({ children }) => {
  const [isSearchMode, setIsSearchMode] = useState(false)

  const [pageData, setPageData] = useState({})

  const [searchResults, setSearchResults] = useState([])

  const value = {
    isSearchMode,
    setIsSearchMode,
    pageData,
    setPageData,
    searchResults,
    setSearchResults
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
