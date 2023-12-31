import React, { useCallback, useContext, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

import CategoryHeader from '../../components/CategoryHeader'
import CategoryContentList from '../../components/CategoryContentList'
import withContextProvider from '../../hoc/withContextProvider'

import CategoryContext, {
  CategoryContextProvider
} from '../../context/CategoryContext'

import { getCategoryPageData } from '../../services'

function CategoryPage () {
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
    fetchPageData()
  }, [fetchPageData])

  useEffect(() => {
    const onScroll = throttle(() => {
      const currentScrollTop = document.documentElement.scrollTop

      if (
        currentScrollTop > prevScrollTop.current &&
        !isSearchMode &&
        contentList.length < totalItems
      ) {
        const maxScrollTop =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight

        const isScrollPositionThresholdCrossed =
          currentScrollTop >= 0.75 * maxScrollTop

        if (isScrollPositionThresholdCrossed) {
          fetchPageData(+currentPage + 1)
        }
      }

      prevScrollTop.current = currentScrollTop
    }, 200)

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [isSearchMode, currentPage, fetchPageData, contentList, totalItems])

  return (
    <div>
      <CategoryHeader />
      <CategoryContentList />
    </div>
  )
}

export default withContextProvider(CategoryContextProvider, CategoryPage)
