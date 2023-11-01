import Link from 'next/link'
import getCategoryBySlug from '@/lib/graphql-requests/get-category-by-slug'
import NotFound from '@/components/shared/not-found'
import getCategoriesOnly from '@/lib/graphql-requests/get-categories-only'
import CategoryNav from '@/components/filmer/filmkatalog/category/category-nav'
import CategoryVideoItem from '@/components/filmer/filmkatalog/categories/video-item'

type CategoryProps = {
  categorySlug: string;
}

export default async function Category ({ categorySlug }: CategoryProps) {
  const category = await getCategoryBySlug(decodeURI(categorySlug))
  const categories = await getCategoriesOnly()
  const videosInCategory = category?.videos.items
  if (!category || !videosInCategory) {
    return <NotFound />
  }
  return (
    <div className="page-margins pt-[calc(70px+0.8vw)]">

      <div className="flex justify-center">
        <CategoryNav categories={categories}/>
      </div>
     
      <h2 className="text-[3vw] mt-[3vw] mb-[3vw]">{category.name}</h2>

      <div className="columns-3 gap-x-[0.8vw]">
        {videosInCategory.map((video: Video, index: number) => (
          <div className="mb-[0.8vw] relative" key={index}>
            <CategoryVideoItem video={video} categorySlug={category.slug}/>
          </div>
        ))}
      </div>
    </div>
   )
}