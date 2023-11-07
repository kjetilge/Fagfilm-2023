import Category from 'components/filmer/filmkatalog/category/category'
import getCategories from '@/lib/graphql-requests/get-categories'


export async function generateStaticParams() {
  const categories = await getCategories();
 
  return categories.map((category: Category) => ({
    slug: category.slug,
  }))
}

const CategoryPage = ({ params }: { params: { category_slug: string } }) => {
  console.log(params)
  return (
    <Category categorySlug= {params.category_slug} />
  )
}

export default CategoryPage