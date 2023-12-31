import React, { useCallback, useContext, useEffect, useRef } from 'react'
import CategoryHeader from '../../components/CategoryHeader'
import ContentList from '../../components/ContentList'
import CategoryContext from '../../context/CategoryContext'
import { getCategoryPageData } from '../../services'

import throttle from 'lodash.throttle'

function Category () {
  const {
    isSearchMode,
    pageData: { totalItems, currentPage, contentList },
    setPageData
  } = useContext(CategoryContext)

  const prevScrollTop = useRef(0)

  const fetchPageData = useCallback(
    async (pageNum = 1) => {
      try {
        const pageData = await getCategoryPageData(pageNum)
        setPageData(prevPageData => {
          console.log(prevPageData, pageData)
          return {
            ...pageData,
            contentList: [
              ...(prevPageData.contentList ?? []),
              ...pageData.contentList
            ]
          }
        })
      } catch (e) {}
    },
    [setPageData]
  )

  useEffect(() => {
    console.log('mounting category')
    return () => {
      console.log('unmounting category')
    }
  }, [])

  useEffect(() => {
    fetchPageData()
  }, [fetchPageData])

  useEffect(() => {
    const onScroll = throttle(() => {
      //   console.log(contentList.length, totalItems)
      const currentScrollTop = document.documentElement.scrollTop

      if (
        currentScrollTop > prevScrollTop.current &&
        !isSearchMode &&
        contentList.length < totalItems
      ) {
        const maxScrollTop =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight

        const shouldFetchData = currentScrollTop >= 0.75 * maxScrollTop

        if (shouldFetchData) {
          console.log('75 percent reached', currentPage)
          fetchPageData(+currentPage + 1)
        }
      }

      prevScrollTop.current = currentScrollTop
    }, 200)

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [isSearchMode, currentPage, fetchPageData, contentList, totalItems])

  console.log((contentList || []).length, totalItems)

  return (
    <div>
      <CategoryHeader />
      <ContentList />
    </div>
  )
}

export default Category

// export default withCategoryContextProvider(Category)
