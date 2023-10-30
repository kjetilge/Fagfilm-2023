import { getCategories } from '@/lib/graphql-requests/get-categories'
import Link from 'next/link'
import CategoryItem from './category-item'

export default async function Categories () {
  const categories = await getCategories();
  
  return (
    <ul>
      {categories.map((category: Category) => (
        <li key={category.id}>
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  )
}