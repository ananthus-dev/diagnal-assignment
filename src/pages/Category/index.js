import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import CategoryHeader from '../../components/CategoryHeader'
import ContentList from '../../components/ContentList'
import CategoryContext, {
  CategoryContextProvider,
  withCategoryContextProvider
} from '../../context/CategoryContext'
import withContextProvider from '../../hoc/withContextProvider'
import { getCategoryContentList, getCategoryPageData } from '../../services'

import throttle from 'lodash.throttle'

function Category () {
  const {
    pageData: { totalItems, currentPage, contentList },
    setPageData
  } = useContext(CategoryContext)

  const ref = useRef(null)

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
      if (contentList.length < totalItems) {
        const maxScrollTop =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight

        const shouldFetchData =
          document.documentElement.scrollTop >= 0.75 * maxScrollTop

        if (shouldFetchData) {
          console.log('75 percent reached', currentPage)
          fetchPageData(+currentPage + 1)
        }
      }
    }, 500)

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [currentPage, fetchPageData, contentList, totalItems])

  console.log((contentList || []).length, totalItems)

  return (
    <div ref={ref}>
      <CategoryHeader />
      <ContentList />
    </div>
  )
}

export default Category

// export default withCategoryContextProvider(Category)
