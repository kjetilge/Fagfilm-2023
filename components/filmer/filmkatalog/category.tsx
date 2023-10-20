import { getCategoryById } from '@/lib/graphql/getCategoryById'
import getCategoryBySlug from '@/lib/graphql/get-category-by-slug'
import { getCategoriesOnly } from '@/lib/graphql/getCategoriesOnly'
import Link from 'next/link'

interface Category {
  id: number;
  name: string;
  slug: string;
}

// function findCategoryBySlug(categories: Category[], slug: string): Category | undefined {
//   return categories.find((category) => category.slug === slug);
// }

export default async function Category (slug: string) {
  // console.log('slug', slug)
  const category = await getCategoryBySlug({ slug })
  const name = category?.name || ''
  const videos = category?.videos.items || []
  // const categories = await getCategoriesOnly()
  // const categoryId = findCategoryBySlug(categories, slug)?.toString() || ''
  // const category = getCategoryById(categoryId)
  // console.log('category', category)
  return (
            <div>
              <h2>{name}</h2>
                {videos.map((video) => (
                  <p>
                    {video.title}
                  </p>
                ))}
            </div>

  )
}