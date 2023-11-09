import Categories from '@/components/filmer/filmkatalog/categories/categories'
import { Suspense } from 'react'
// export const runtime = 'edge'

const Filmkatalog = () => {
  //  fallback={<p>Laster filmer...</p>}
  return (
  <Suspense>
    <Categories />
  </Suspense>
    
  )
}

export default Filmkatalog