import Link from 'next/link'
import getCategoryBySlug from '@/lib/graphql-requests/get-category-by-slug'
import NotFound from '@/components/shared/not-found'
import getCategoriesOnly from '@/lib/graphql-requests/get-categories-only'

type CategoryProps = {
  categorySlug: string;
}

export default async function Category ({ categorySlug }: CategoryProps) {
  const category = await getCategoryBySlug(decodeURI(categorySlug))
  const videosInCategory = category?.videos.items
  if (!category || !videosInCategory) {
    return <NotFound />
  }
  return (
    <>
        <h2>Cat Name: {category.name}</h2>
        {videosInCategory.map((video: Video) => (
          <p>
            <Link href={`/filmkatalog/${category.slug}/${video.slug}`}>{video.title}</Link>
          </p>
        ))}
    </>
   )
}