import Link from 'next/link'
import VideoCarousel from './video-carousel'

type CategoryProps = {
  category: Category;
}

const CategoryItem = ({category}: CategoryProps) => {
  const videoItems = category.videos.items
  return (
    <div className="">
      <Link href={`/filmkatalog/${category.slug}`} className="inline">
        <h2 className="inline-block text-3xl hover:text-pink-500 pb-[0.9vw]">{category.name}</h2>
      </Link>

      <div className="pb-[4vw]">
        <VideoCarousel videoItems={videoItems} category={category}/>
      </div>
    </div>
  )
}

export default CategoryItem