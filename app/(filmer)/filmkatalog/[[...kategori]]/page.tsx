
import AllCategories from '@/components/filmer/filmkatalog/all-categories'
import Category from '@/components/filmer/filmkatalog/category'

function isEmptyObj(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
export default function Catalog ({ params }: { params: { kategori: string } }) {
  const slug = params.kategori[0]
  console.log('*****************************slugz', slug)  
  console.log()

  if (isEmptyObj(params)) {
    return (
      <>
        <h1>All categories</h1>
        <AllCategories />
      </>
    )
  }

  return (
    <>
      <Category slug={slug} />
    </>
  )
}