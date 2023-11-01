import CategoryNav from './category/category-nav'
import { getCategories } from '@/lib/graphql-requests/get-categories'
import Categories from './categories/categories'
import Category from './category/category'
import NotFound from '@/components/shared/not-found'
import Video from './video-viewer/viewer'
import Link from 'next/link'

import Player from './video-viewer/video-player/player'
// const root = document.getElementById('player')!;

type CatalogProps = {
  categorySlug: string | undefined;
  videoSlug: string | undefined;
}


async function Catalog({ categorySlug, videoSlug }: CatalogProps) {
  // Show all videos in all categories
  if (!categorySlug && !videoSlug) {
    return <>
    <Categories />
    </>
  }

  // // Show all videos in a single category
  if (categorySlug && !videoSlug) {
    return <>
    <Category categorySlug= {categorySlug} />
    </>
  }
  // Show a single video
  if (categorySlug && videoSlug) {
    return <>
    <Video videoSlug={videoSlug} />
    </>
  }

  return <NotFound />
}

export default Catalog;