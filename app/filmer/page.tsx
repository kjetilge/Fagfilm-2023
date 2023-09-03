import getCategories from '_lib/awsRequests/getCategories'
import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('./carousel'), { ssr: false })
import Cats from './cats'
import Carousel from './carousel'
import { Video, Category } from '../../_lib/types'

// type Props = {
//   categories: Category[]
// }

export default async function videosCatalog() {
  const categories = await getCategories()
  console.log("CATS",JSON.stringify(categories, null, 2))
  return (
    <>
      <Carousel categories={categories} />
      {/* <Cats categories={categories} /> */}
    </>

  )
}