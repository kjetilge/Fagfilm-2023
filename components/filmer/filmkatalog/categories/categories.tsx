import getCategories from '@/lib/graphql-requests/get-categories'
import Link from 'next/link'
import CategoryItem from './category-item'
import CategoryDropdown from './category-dropdown'


export default async function Categories () {
  // Dette burde virke
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return <div className="pt-28 filmer-layout-left-margin">Oooops... her gikk noe galt! Hvis feilen fortsetter, kontakt fagfilm.</div>; // Handle empty or undefined categories
  }
  
  return (
    <>
    {/* <CategoryDropdown /> */}
    <ul className="pt-28 filmer-layout-left-margin">
      {categories.map((category: Category) => (
        <li key={category.id}>
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
    </>
  )
}