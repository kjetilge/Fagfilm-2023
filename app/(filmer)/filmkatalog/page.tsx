
import { getCategories } from '../../../components/filmkatalog/requests'
// import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('./carousel'), { ssr: false })

type Props = {
  categories: Category[]
}
import VideoCatalog from '@/components/filmkatalog/video-catalog'

export default async function videosCatalog() {
  const categories = await getCategories()
  return (
    <>
      <VideoCatalog categories={categories} />
    </>
  )
}