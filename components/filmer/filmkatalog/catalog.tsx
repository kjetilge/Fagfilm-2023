import CategoryNav from './category-nav'
import { getCategories } from '@/lib/graphql-requests/get-categories'
import Categories from './categories'
import Category from './category'
import NotFound from '@/components/shared/not-found'
import Video from './video'

type CatalogProps = {
  categorySlug: string | undefined;
  videoSlug: string | undefined;
}

async function Catalog({ categorySlug, videoSlug }: CatalogProps) {
  // Show all videos in all categories
  console.log('SLUGS', { categorySlug, videoSlug })
  if (!categorySlug && !videoSlug) {
    return <>
    <h1>categorySlug {categorySlug}, videoSlug {videoSlug}</h1>
    <Categories />
    </>
  }

  // // Show all videos in a single category
  if (categorySlug && !videoSlug) {
    return <>
    <h1>categorySlug {categorySlug}, videoSlug {videoSlug}</h1>
    <Category categorySlug= {categorySlug} />
    </>
  }
  // Show a single video
  if (categorySlug && videoSlug) {
    return <>
    <h1>categorySlug {categorySlug}, videoSlug {videoSlug}</h1>
    <Video categorySlug= {categorySlug} videoSlug={videoSlug} />
    </>
  }

  return <NotFound />
}

export default Catalog;