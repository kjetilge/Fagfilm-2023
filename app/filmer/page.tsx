import { getCategories } from './requests'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('./carousel'), { ssr: false })

// type Props = {
//   categories: Category[]
// }

export default async function videosCatalog() {
  const categories = await getCategories()
  return (
    <>
      <Carousel categories={categories} />
    </>

  )
}