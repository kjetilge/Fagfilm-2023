import Link from 'next/link'

type CategoryNavProps = {
  categories: Category[]
}

const CategoryNav = ({categories}: CategoryNavProps) => {
  return (
    <nav>
      <ul>
        {categories.map((category: Category, index: number) => (
          <li key={index}>
            <Link href={`/filmkatalog/${category.slug}`} className="font-semibold text-indigo-700">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav