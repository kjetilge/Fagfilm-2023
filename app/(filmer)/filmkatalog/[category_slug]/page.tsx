import Category from 'components/filmer/filmkatalog/category/category'

const CategoryPage = ({ params }: { params: { category_slug: string } }) => {
  console.log(params)
  return (
    <Category categorySlug= {params.category_slug} />
  )
}

export default CategoryPage