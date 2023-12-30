import { DATA_BASE_URL } from '../constants'

export const getCategoryPageData = async pageNum => {
  try {
    const response = await fetch(`${DATA_BASE_URL}/page${pageNum}.json`)
    const data = await response.json()
    return {
      title: data?.page?.title || '',
      totalItems: data?.page?.['total-content-items'] || 0,
      currentPage: data?.page?.['page-num-requested'] || 1,
      contentList: data?.page?.['content-items']?.content || []
    }
  } catch (e) {
    return Promise.reject(e)
  }
}
