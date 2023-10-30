import Link from 'next/link'
import getCategoryBySlug from '@/lib/graphql-requests/get-category-by-slug'
import NotFound from '@/components/shared/not-found'
import getCategoriesOnly from '@/lib/graphql-requests/get-categories-only'
import CategoryNav from '@/components/filmer/filmkatalog/category/category-nav'

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
    <>
      <CategoryNav categories={categories}/>
      <h2 className="text-3xl">{category.name}</h2>
      {videosInCategory.map((video: Video) => (
        <p>
          <Link href={`/filmkatalog/${category.slug}/${video.slug}`}>{video.title}</Link>
        </p>
      ))}
    </>
   )
}