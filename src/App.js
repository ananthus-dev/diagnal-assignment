import { CategoryContextProvider } from './context/CategoryContext'
import Category from './pages/Category'

function App () {
  return (
    <CategoryContextProvider>
      <Category />
    </CategoryContextProvider>
  )
}

export default App
