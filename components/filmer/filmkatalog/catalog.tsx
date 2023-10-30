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

function TilbakeTilKatalog() {
  return (
    <Link href="/filmkatalog" className="font-semibold text-indigo-700">&#8592; Tilbake til katalog</Link>
  )
}

async function Catalog({ categorySlug, videoSlug }: CatalogProps) {
  // Show all videos in all categories
  if (!categorySlug && !videoSlug) {
    return <>
    <TilbakeTilKatalog />
    <Categories />
    </>
  }

  // // Show all videos in a single category
  if (categorySlug && !videoSlug) {
    return <>
    <TilbakeTilKatalog />
    <Category categorySlug= {categorySlug} />
    </>
  }
  // Show a single video
  if (categorySlug && videoSlug) {
    return <>
    {/* <TilbakeTilKatalog /> */}
    <Video videoSlug={videoSlug} />
    </>
  }

  return <NotFound />
}

export default Catalog;