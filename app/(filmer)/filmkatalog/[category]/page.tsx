import Category from 'components/filmer/filmkatalog/category/category'


const CategoryPage = ({ params }: { params: { category: string } }) => {
  console.log(params)
  return (
    <section className="pt-2"><Category categorySlug= {params.category} /></section>
  )
}

export default CategoryPage