import CategoryNav from './category/category-nav'
import getCategories from '@/lib/graphql-requests/get-categories'
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

    return <Categories />

}

export default Catalog;