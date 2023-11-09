import getCategories from '@/lib/graphql-requests/get-categories'
import Link from 'next/link'
import CategoryItem from './category-item'
import CategoryDropdown from './category-dropdown'


export default async function Categories () {
  // Dette burde virke
  const categories = await getCategories();
  
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