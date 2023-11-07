import Category from 'components/filmer/filmkatalog/category/category'


const CategoryPage = ({ params }: { params: { category: string } }) => {
  console.log(params)
  return (
    <Category categorySlug= {params.category} />
  )
}

export default CategoryPage