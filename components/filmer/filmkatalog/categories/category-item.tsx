import Link from 'next/link'
import VideoCarousel from './video-carousel'

type CategoryProps = {
  category: Category;
}

const CategoryItem = ({category}: CategoryProps) => {
  const videoItems = category.videos.items
  return (
    <>
      <Link href={`/filmkatalog/${category.slug}`} className="text-3xl underline decoration-dashed hover:text-pink-500">
        <h3>{category.name}</h3>
      </Link>
      <VideoCarousel videoItems={videoItems} category={category}/>
    </>
  )
}

export default CategoryItem