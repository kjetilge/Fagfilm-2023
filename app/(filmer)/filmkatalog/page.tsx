import Categories from '@/components/filmer/filmkatalog/categories/categories'
import { Suspense } from 'react'
// export const runtime = 'edge'

const Filmkatalog = () => {
  return (
  <Suspense fallback={<p>Laster filmer...</p>}>
    <Categories />
  </Suspense>
    
  )
}

export default Filmkatalog