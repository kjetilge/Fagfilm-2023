import getCategories from '_lib/awsRequests/getCategories'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('./carousel'), { ssr: false })

import { Video, Category } from '../../_lib/types'

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